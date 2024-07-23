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

  return (
    <View style={{ backgroundColor: "#1B1D24", flex: 1, paddingHorizontal: 8,}}>
      
      <FlatList
      style ={{paddingTop: 25}}
      contentContainerStyle = {{paddingBottom: 25, }}
        ListEmptyComponent={() => <Text style = {{textAlign: 'center', fontFamily: 'Poppins-Medium', color: 'white', fontSize: 30}}>Сегодня пар нет</Text>}
        data={schedule?.[days[route.name]]}
        showsVerticalScrollIndicator={false}
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


