import React, { useCallback, useEffect, useRef, useState } from "react";
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
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { getDayFromData } from "../utils/getDayFromData";
import { colors } from "../constants/colors";

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
export const MyTabs = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const [selectedDate, setSelectedDate] = useState("");
  const date = useAppSelector((state) => state.week.date);

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
    dispatch(setDay(getDayFromData(day.dateString)));
    dispatch(setWeek(getWeeksSince(day.dateString)));
    dispatch(setDate(dayjs(day.dateString).toString()));
  };
  const dispatch = useAppDispatch();
  function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={styles.customTabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          const [animationValue] = useState(new Animated.Value(0));

          useEffect(() => {
            Animated.timing(animationValue, {
              toValue: isFocused ? 1 : 0,
              duration: 300,
              useNativeDriver: true,
            }).start();
          }, [isFocused, animationValue]);
          const animatedStyle = {
            transform: [
              {
                scale: animationValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1], // Измените значения для настройки масштабирования
                }),
              },
            ],
            backgroundColor: animationValue.interpolate({
              inputRange: [0, 1],
              outputRange: ["#1B1D24", "#5465FF"], // Измените цвета для настройки градиента
            }),
          };
          return (
            <Animated.View
              key={route.name}
              style={[styles.customTabBarAnimatedItem, animatedStyle]}
            >
              <TouchableOpacity
                style={styles.customTabBarItem}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <Text
                  style={{
                    color: isFocused ? colors.white : colors.gray,
                    fontFamily: "Poppins-Medium",
                    fontSize: 15,
                  }}
                >
                  {label}
                </Text>
                <Text
                  style={{
                    color: isFocused ? colors.white : colors.topTabsTabBarGray,
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 19,
                  }}
                >
                  {dayjs(date)
                    .startOf("week")
                    .add(days[label], "day")
                    .format("DD")
                    .toString()}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    );
  }

  return (
    <>
      <Header title={"Четверг"} days={[]} handleOpenPress={handleOpenPress} />

      <Tab.Navigator
        style={{ backgroundColor: colors.black }}
        tabBar={(props) => {
          return <MyTabBar {...props} />;
        }}
      >
        {Object.keys(days).map((day) => {
          return (
            <Tab.Screen
              listeners={{
                focus: () => {
                  dispatch(setDay(day));
                  dispatch(
                    setDate(
                      dayjs(date)
                        .day(days[day] + 1)
                        .toString(),
                    ),
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
        enablePanDownToClose={true}
        snapPoints={["25%", "50%"]}
        backgroundStyle={{ backgroundColor: colors.semiBlack }}
      >
        <BottomSheetView>
          <Calendar
            theme={{
              calendarBackground: colors.semiBlack,
              textDayFontFamily: "Poppins-Regular",
              textDayHeaderFontFamily: "Poppins-Medium",
              textMonthFontFamily: "Poppins-SemiBold",
              arrowColor: colors.purple,
              todayTextColor: colors.purple,
              dayTextColor: colors.white,
              monthTextColor: colors.gray,
              textSectionTitleColor: colors.gray,
            }}
            onDayPress={onDayPress}
            hideExtraDays={true}
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
};

const styles = StyleSheet.create({
  customTabBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.semiBlack,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  customTabBarAnimatedItem: {
    flex: 1,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 10,
    borderRadius: 10,
    margin: 10,
  },
  customTabBarItem: {
    gap: 4,
    alignItems: "center",
  },
});
