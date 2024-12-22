import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import dayjs from "dayjs";
import { days } from "../constants/days";
import useColors, { Colors } from "../constants/colors";
import dateStore from "../store/dateStore";
interface Props {
  title: string;
  days: string[];
  handleOpenPress: () => void;
}
export const Header = (props: Props) => {
  const colors = useColors();
  const styles = createStyles(colors);
  function openBottomSheet() {
    props.handleOpenPress();
  }
  const { date, day } = dateStore;
  function getFullDayName(day: keyof typeof days) {
    const dayMap = {
      Пн: "Понедельник",
      Вт: "Вторник",
      Ср: "Среда",
      Чт: "Четверг",
      Пт: "Пятница",
      Сб: "Суббота",
      Вс: "Воскресенье",
    };
    return dayMap[day];
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerMenu}>
        <Text style={styles.title}>{getFullDayName(day)}</Text>

        <TouchableOpacity onPress={openBottomSheet}>
          <Text style={styles.week}>{dayjs(date).format("DD MMMM")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.black,
      width: "100%",
      height: 150,
    },
    title: {
      color: colors.white,
      marginTop: 75,
      fontFamily: "Poppins-Medium",
      fontSize: 36,
    },
    headerMenu: {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 16,
      justifyContent: "space-between",
      alignItems: "center",
    },
    week: {
      color: colors.semiPurple,
      overflow: "hidden",
      marginTop: 80,
      fontSize: 18,
      padding: 12,
      backgroundColor: colors.minPurple,
      borderRadius: 15,
      fontFamily: "Poppins-SemiBold",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
    },
  });
