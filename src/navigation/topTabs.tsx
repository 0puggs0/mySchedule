import React, { useMemo, useRef, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Schedule } from "../screens/schedule";
import { Header } from "../components/header";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { getWeeksSince } from "../utils/getWeekSince";
import dayjs from "dayjs";
import { days } from "../constants/days";
import { Alert } from "react-native";
import { getDayFromData } from "../utils/getDayFromData";
import { Day } from "../types/schedule";
import { RootStackParamList } from "../API/apiInterface";
import useColors from "../constants/colors";
import dateStore from "../store/dateStore";
import themeStore from "../store/themeStore";
import { observer } from "mobx-react-lite";
import { renderBackdrop } from "../components/backdrop";
import { local } from "../constants/localConfigWixCalendar";
import { MyTabBar } from "../components/customTabBar";

LocaleConfig.locales["ru"] = {
  monthNames: local.monthNames,
  monthNamesShort: local.monthNamesShort,
  dayNames: local.dayNames,
  dayNamesShort: local.dayNamesShort,
};
LocaleConfig.defaultLocale = "ru";

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export const MyTabs = observer(() => {
  const [selectedDate, setSelectedDate] = useState("");
  const colors = useColors();
  const { theme } = themeStore;
  const { setDate, setDay, setWeek, date, day, week } = dateStore;

  const calendarTheme = useMemo(
    () => ({
      calendarBackground: colors.semiBlack,
      textDayFontFamily: "Poppins-Regular",
      textDayHeaderFontFamily: "Poppins-Medium",
      textMonthFontFamily: "Poppins-SemiBold",
      arrowColor: colors.purple,
      todayTextColor: colors.purple,
      dayTextColor: colors.white,
      monthTextColor: colors.white,
      textSectionTitleColor: colors.gray,
    }),
    [theme],
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const onDayPress = (day: DateData) => {
    const dayOfWeek = dayjs(day.dateString).day();
    if (dayOfWeek !== 0) {
      setSelectedDate(day.dateString);
      setDay(getDayFromData(day.dateString));
      setWeek(getWeeksSince(day.dateString));
      setDate(dayjs(day.dateString).toString());
    } else {
      Alert.alert("Ошибка", "По воскресеньям не учимся))");
    }
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <Header title={"Четверг"} days={[]} handleOpenPress={handleOpenPress} />
      <Tab.Navigator
        style={{
          backgroundColor: colors.black,
        }}
        tabBar={(props) => {
          return <MyTabBar {...props} />;
        }}
      >
        {(Object.keys(days) as Day[]).map((day) => {
          return (
            <Tab.Screen
              listeners={{
                focus: () => {
                  setSelectedDate(
                    dayjs(date)
                      .day(days[day] + 1)
                      .format("YYYY-MM-DD"),
                  );
                  setDay(day);
                  setDate(
                    dayjs(date)
                      .day(days[day] + 1)
                      .toString(),
                  );
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
        enablePanDownToClose
        snapPoints={["25%", "60%"]}
        backgroundStyle={{
          backgroundColor: colors.semiBlack,
        }}
      >
        <BottomSheetView>
          <Calendar
            key={theme}
            theme={calendarTheme}
            initialDate={selectedDate}
            onDayPress={onDayPress}
            hideExtraDays
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: colors.purple,
                selectedTextColor: colors.white,
              },
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
});
