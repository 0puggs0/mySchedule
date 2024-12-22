import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Pair } from "../components/pair";
import { RootStackParamList } from "../API/apiInterface";
import { FlatList } from "react-native-gesture-handler";
import { days } from "../constants/days";
import type { StackScreenProps } from "@react-navigation/stack";
import { Day } from "../types/schedule";
import dayjs from "dayjs";
import { ActivePair } from "../components/activePair";
import useColors, { Colors } from "../constants/colors";
import scheduleStore from "../store/scheduleStore";
import dateStore from "../store/dateStore";
import groupStore from "../store/groupStore";
import { observer } from "mobx-react-lite";

export type Props = StackScreenProps<RootStackParamList, Day>;
export const Schedule = observer(({ route, navigation }: Props) => {
  const colors = useColors();

  const styles = createStyles(colors);

  const [nowDate, setNowDate] = useState(dayjs().format("DD.MM.YYYY"));
  const [nowHour, setNowHour] = useState(dayjs().format("HH:mm"));

  useEffect(() => {
    const timeout = setInterval(() => {
      setNowDate(dayjs().format("DD.MM.YYYY"));
      setNowHour(dayjs().format("HH:mm"));
    }, 60000);
    return () => clearInterval(timeout);
  }, []);
  const { schedule, scheduleIsLoading, getSchedule } = scheduleStore;
  const { day, week } = dateStore;
  const { group } = groupStore;

  useEffect(() => {
    if (route.name === "Пн") {
      getSchedule();
    }
  }, [week, group]);
  useEffect(() => {
    if (route.name === "Пн") {
      navigation.navigate(`${day}`);
    }
  }, [day]);
  if (scheduleIsLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{ paddingTop: 25 }}
        contentContainerStyle={{ paddingBottom: 25 }}
        ListEmptyComponent={() => (
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-Medium",
              color: colors.white,
              fontSize: 30,
            }}
          >
            Сегодня пар нет
          </Text>
        )}
        data={schedule?.[days[route.name]]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.date === nowDate &&
          nowHour >= item.timeStart &&
          nowHour <= item.timeEnd ? (
            <ActivePair
              timeStart={item.timeStart}
              timeEnd={item.timeEnd}
              subject={item.subject.name}
              professor={item.professor.name}
              classNum={item.room.auditory ? item.room.auditory : "-"}
              adress={item.room.name}
            />
          ) : (
            <Pair
              timeStart={item.timeStart}
              timeEnd={item.timeEnd}
              subject={item.subject.name}
              professor={item.professor.name}
              classNum={item.room.auditory ? item.room.auditory : "-"}
              adress={item.room.name}
            />
          )
        }
      />
    </View>
  );
});

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.semiBlack,
      flex: 1,
      paddingHorizontal: 8,
    },
  });
