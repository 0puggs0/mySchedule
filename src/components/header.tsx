import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setWeek } from "../store/weekSlice";
import axios from "axios";
import { groups } from "../constants/groups";
import dayjs from "dayjs";
import { days } from "../constants/days";
interface Props {
  title: string;
  days: string[];
  handleOpenPress: () => void;
}

export function Header(props: Props) {
  
  function OpenBottomSheet() {
    props.handleOpenPress();

  }
  const date = useAppSelector(state => (state.week.date))
  const day = useAppSelector((state) => state.week.day)
  function getFullDayName(day: keyof typeof days) {
    const dayMap = {
      'Пн': 'Понедельник',
      'Вт': 'Вторник',
      'Ср': 'Среда',
      'Чт': 'Четверг',
      'Пт': 'Пятница',
      'Сб': 'Суббота',
      'Вс': 'Воскресенье'
    }
    return dayMap[day]
  }
  
  return (
    <View style={styles.header}>
      <View style={styles.headerMenu}>
        
        <Text style={styles.title}>{getFullDayName(day)}</Text>
        
        <TouchableOpacity onPress={OpenBottomSheet}>
          <Text style={styles.week}>{dayjs(date).format('DD MMMM')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#131418",
    width: "100%",
    height: 150,
  },
  title: {
    color: "#BCC1CD",
    marginTop: 75,
    fontFamily: "Poppins-Medium",
    fontSize: 36,
  },
  headerMenu: {
    width: '100%',
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  week: {
    color: "rgba(84, 101, 255, 0.9)",
    overflow: "hidden",
    marginTop: 80,
    fontSize: 18,
    padding: 12,
    backgroundColor: "rgba(84, 101, 255, 0.2)",
    borderRadius: 15,
    fontFamily: "Poppins-SemiBold",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
