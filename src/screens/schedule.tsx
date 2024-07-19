import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Pair } from "../components/pair";
import {
  RootStackParamList,
} from "../API/apiInterface";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { FlatList } from "react-native-gesture-handler";
import { days } from "../constants/days";
import { getSchedule } from "../store/scheduleSlice";
import type { StackScreenProps } from '@react-navigation/stack';

export type Props = StackScreenProps<RootStackParamList, 'Schedule'>;
export const Schedule = ({ route, navigation }:Props) => {
  const dispatch = useAppDispatch();
  const schedule = useAppSelector((state) => state.schedule.schedule);
  const week = useAppSelector((state) => state.week.week);
  const day = useAppSelector((state) => (state.week.day))
  const group = useAppSelector((state) => state.group.value)



  useEffect(() => {
    if (route.name === "Пн") {
      dispatch(getSchedule())
      navigation.navigate(`${day}`)
    }
  }, [week, day, group]);

 

  // function fet() {
  //   const changedWeek = sheduleB
  //     .map((item: Day) => {
  //       const [day, month, year] = item.key.split(".");
  //       const date = `${year}-${month}-${day}`;
  //       return { ...item, week: getWeeksSince(date) };
  //     })
  //     .forEach((item: Day) => {
  //       axios
  //         .post("https://api.rosggram.ru/add-schedule", item)
  //         .then((response) => {
  //           console.log("Данные успешно отправлены", response.data);
  //         })
  //         .catch((e) =>
  //           console.error("Ошибка при отправке данных " + e.message)
  //         );
  //     });
  // }

  // Функция, которая получает на вход дату и возвращает день недели
  // function getDayOfWeek(dateString: string) {
  //   const days = [
  //     "Воскресенье",
  //     "Понедельник",
  //     "Вторник",
  //     "Среда",
  //     "Четверг",
  //     "Пятница",
  //     "Суббота",
  //   ];
  //   const [day, month, year] = dateString.split(".");
  //   const formattedDate = `${year}-${month}-${day}`;
  //   const date = new Date(formattedDate);
  //   return days[date.getDay()];
  // }
  return (
    <View style={{ backgroundColor: "#2C4970", flex: 1 }}>
      <FlatList
        ListEmptyComponent={() => <Text style = {{textAlign: 'center', fontFamily: 'AvenirNext-Medium', color: 'white', fontSize: 30}}>Сегодня пар нет</Text>}
        data={schedule?.[days[route.name]]}
        keyExtractor={(item, index) => item.timeStart}
        renderItem={({ item }) => (
          <Pair
            timeStart={item.timeStart}
            timeEnd={item.timeEnd}
            subject={item.subject.name}
            professor={item.professor.name}
            classNum={item.room.auditory ? item.room.auditory : '-'}
            adress={item.room.name}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});


