import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Pair } from "../components/pair";
import { RootStackParamList } from "../API/apiInterface";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { FlatList } from "react-native-gesture-handler";
import { days } from "../constants/days";
import { getSchedule } from "../store/scheduleSlice";
import type { StackScreenProps } from "@react-navigation/stack";
import { colors, lightColors } from "../constants/colors";
import { Day } from "../types/schedule";
import dayjs from "dayjs";
import { ActivePair } from "../components/activePair";

export type Props = StackScreenProps<RootStackParamList, Day>;
export const Schedule = ({ route, navigation }: Props) => {

  const theme = useAppSelector(state => state.theme.theme)
  const styles = createStyles(theme)

  const [nowDate, setNowDate] = useState(dayjs().format('DD.MM.YYYY'));
  const [nowHour, setNowHour] = useState(dayjs().format('HH:mm'));

  useEffect(() => {
    const timeout = setInterval(() => {
      setNowDate(dayjs().format('DD.MM.YYYY'))
      setNowHour(dayjs().format('HH:mm'))
    }, 60000)
    return () => clearInterval(timeout)
  }, [])

  const dispatch = useAppDispatch();
  const { schedule, scheduleLoading } = useAppSelector(
    (state) => state.schedule,
  );
  const week = useAppSelector((state) => state.week.week);
  const day = useAppSelector((state) => state.week.day);
  const group = useAppSelector((state) => state.group.value);

  useEffect(() => {
    if (route.name === "Пн") {
      dispatch(getSchedule());
    }
  }, [week,group]);
  useEffect(() => {
    if (route.name === "Пн") {
    navigation.navigate(`${day}`);
    }
  }, [day])
  if (scheduleLoading) {
    return (
      <View
        style={styles.container}
      >
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
              color: theme === 'dark' ? colors.white : lightColors.white,
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
          nowHour >= item.timeStart && nowHour <= item.timeEnd ?
          (
          <ActivePair
            timeStart={item.timeStart}
            timeEnd={item.timeEnd}
            subject={item.subject.name}
            professor={item.professor.name}
            classNum={item.room.auditory ? item.room.auditory : "-"}
            adress={item.room.name}
          />
        ) :
      (
        <Pair timeStart={item.timeStart}
        timeEnd={item.timeEnd}
        subject={item.subject.name}
        professor={item.professor.name}
        classNum={item.room.auditory ? item.room.auditory : "-"}
        adress={item.room.name}/>
      )}
      />
    </View>
  );
};

const createStyles = (theme: string) => StyleSheet.create({
  container: {
    backgroundColor: theme === 'dark' ? colors.semiBlack : lightColors.semiBlack,
    flex: 1,
    paddingHorizontal: 8,
  },
});
