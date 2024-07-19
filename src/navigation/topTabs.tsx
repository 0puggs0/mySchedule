import React, { useCallback, useRef, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Schedule } from "../screens/schedule";
import { Header } from "../components/header";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Calendar, DateData } from "react-native-calendars";
import XDate from "xdate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setDate, setDay, setWeek } from "../store/weekSlice";
import { getWeeksSince } from "../utils/getWeekSince";
import dayjs from "dayjs";
import { days } from "../constants/days";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { ProfessorSchedule } from "../screens/professorSchedule";

dayjs.extend(localizedFormat);
dayjs.locale("ru");

XDate.locales["ru"] = {
  dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ],
  dayNames: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
};
XDate.defaultLocale = "ru";

const Tab = createMaterialTopTabNavigator();
const ProfessorTab = createMaterialTopTabNavigator();
export const MyTabs = ({ route }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const [selectedDate, setSelectedDate] = useState("");
  const date = useAppSelector(state => state.week.date)

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
    dispatch(
      setDay(
        dayjs(day.dateString)
          .format("dd")
          .replace(/^(.)/, (match) => match.toUpperCase())
      )
    );
    dispatch(setWeek(getWeeksSince(day.dateString)));
    dispatch(setDate(dayjs(day.dateString).toString()));
  };
  const dispatch = useAppDispatch()

  return (
    <>
      <Header title={"Четверг"} days={[]} handleOpenPress={handleOpenPress} />

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#2C4970" },
          tabBarLabelStyle: { color: "white" },
        }}
      >
        {Object.keys(days).map((day) => {
          return (
            <Tab.Screen
              listeners={{
                focus: () => {
                  dispatch(setDay(day));
                  dispatch(setDate(dayjs(date).day(days[day] + 1).toString()))
                  
                },
              }}
              name={day}
              component={Schedule}
              key={day}
            />
          );
        })}
      </Tab.Navigator>

      <BottomSheet
        backdropComponent={renderBackdrop}
        index={-1}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        snapPoints={["25%", "55%"]}
        backgroundStyle={{ backgroundColor: "#436A9F" }}
      >
        <BottomSheetView>
          <Calendar
            theme={{
              calendarBackground: "#436A9F",
              textDayHeaderFontFamily: "AvenirNext-Medium",
              textMonthFontFamily: "AvenirNext-Medium",
              arrowColor: "#2C4970",
              todayTextColor: "white",
              dayTextColor: "black",
              monthTextColor: "white",
              textSectionTitleColor: "white",
            }}
            onDayPress={onDayPress}
            hideExtraDays={true}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "#2C4970",
                selectedTextColor: "white",
              },
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};
