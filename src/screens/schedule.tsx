import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { Pair } from "../components/pair";
import { RootStackParamList } from "../API/apiInterface";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { FlatList } from "react-native-gesture-handler";
import { days } from "../constants/days";
import { getSchedule } from "../store/scheduleSlice";
import type { StackScreenProps } from "@react-navigation/stack";
import { colors } from "../constants/colors";
import { Day } from "../types/schedule";

export type Props = StackScreenProps<RootStackParamList, Day>;
export const Schedule = ({ route, navigation }: Props) => {
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
      navigation.navigate(`${day}`);
    }
  }, [week, day, group]);
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
              color: "white",
              fontSize: 30,
            }}
          >
            Сегодня пар нет
          </Text>
        )}
        data={schedule?.[days[route.name]]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.timeStart}
        renderItem={({ item }) => (
          <Pair
            timeStart={item.timeStart}
            timeEnd={item.timeEnd}
            subject={item.subject.name}
            professor={item.professor.name}
            classNum={item.room.auditory ? item.room.auditory : "-"}
            adress={item.room.name}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.semiBlack,
    flex: 1,
    paddingHorizontal: 8,
  },
});
