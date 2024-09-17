import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { ProfessorPair } from "../components/professorPair";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getProfessorSchedule } from "../store/scheduleSlice";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../API/apiInterface";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Calendar, DateData } from "react-native-calendars";
import { getWeeksSince } from "../utils/getWeekSince";
import { colors, lightColors } from "../constants/colors";
import dayjs from "dayjs";
type Props = StackScreenProps<RootStackParamList, "ProfessorSchedule">;
export function ProfessorSchedule({ navigation, route }: Props) {
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = createStyles(theme);

  function onDayPress(day: DateData) {
    const dayOfWeek = dayjs(day.dateString).day();
    if (dayOfWeek !== 0) {
      setSelectedDate(day.dateString);
      setLocalWeek(getWeeksSince(day.dateString));
    }
  }
  const dispatch = useAppDispatch();
  const { professorSchedule, professorScheduleLoading } = useAppSelector(
    (state) => state.schedule,
  );
  const [localWeek, setLocalWeek] = useState(getWeeksSince(dayjs().toString()));

  const insets = useSafeAreaInsets();

  useEffect(() => {
    dispatch(
      getProfessorSchedule({ professorKey: route.params.id, week: localWeek }),
    );
  }, [localWeek]);
  function formatName(fullName: string) {
    const parts = fullName.split(" ");

    if (parts.length < 3) {
      return fullName;
    }

    const lastName = parts[0];
    const firstNameInitial = parts[1].charAt(0).toUpperCase();
    const middleNameInitial = parts[2].charAt(0).toUpperCase();

    return `${lastName} ${firstNameInitial}.${middleNameInitial}`;
  }
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
  const [selectedDate, setSelectedDate] = useState("");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const calendarTheme = {
    calendarBackground:
      theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
    textDayFontFamily: "Poppins-Regular",
    textDayHeaderFontFamily: "Poppins-Medium",
    textMonthFontFamily: "Poppins-SemiBold",
    arrowColor: colors.purple,
    todayTextColor: colors.purple,
    dayTextColor: theme === "dark" ? colors.white : lightColors.white,
    monthTextColor: theme === "dark" ? colors.white : lightColors.white,
    textSectionTitleColor: theme === "dark" ? colors.gray : lightColors.gray,
  };

  if (professorScheduleLoading) {
    return (
      <View
        style={{
          backgroundColor: theme === "dark" ? colors.black : lightColors.black,
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Info");
            }}
            style={styles.backButton}
          >
            <Entypo
              name="chevron-left"
              size={24}
              color={theme === "dark" ? colors.gray : lightColors.gray}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>{formatName(route.params.name)}</Text>
          <TouchableOpacity onPress={() => handleOpenPress()}>
            <Text style={styles.weekButton}>Неделя {localWeek}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentBlock}>
          <View style={{ flex: 1 }}>
            <ActivityIndicator size="large"></ActivityIndicator>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? colors.black : lightColors.black,
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Info");
          }}
          style={styles.backButton}
        >
          <Entypo
            name="chevron-left"
            size={24}
            color={theme === "dark" ? colors.gray : lightColors.gray}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{formatName(route.params.name)}</Text>
        <TouchableOpacity onPress={() => handleOpenPress()}>
          <Text style={styles.weekButton}>Нед. {localWeek}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentBlock}>
        <SectionList
          style={styles.contentSectionList}
          contentContainerStyle={{ paddingBottom: 135 }}
          sections={professorSchedule}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProfessorPair
              group={item.group.name}
              classNum={item.room.auditory}
              subject={item.subject.name}
              timeEnd={item.timeEnd}
              timeStart={item.timeStart}
              adress={item.room.name}
            />
          )}
          renderSectionHeader={({ section }) =>
            section.data.length ? (
              <View style={styles.sectionBlock}>
                <Text style={styles.sectionDay}>{section.title}</Text>
                <Text style={styles.sectionDate}>{section.data[0].date}</Text>
              </View>
            ) : (
              <></>
            )
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomSheet
        backdropComponent={renderBackdrop}
        index={-1}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        snapPoints={["25%", "50%"]}
        backgroundStyle={{
          backgroundColor:
            theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
        }}
      >
        <BottomSheetView>
          <Calendar
            initialDate={selectedDate}
            theme={calendarTheme}
            onDayPress={onDayPress}
            hideExtraDays={true}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: colors.purple,
                selectedTextColor:
                  theme === "dark" ? colors.white : lightColors.white,
              },
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const createStyles = (theme: string) =>
  StyleSheet.create({
    header: {
      height: "15%",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 8,
    },
    backButton: {
      overflow: "hidden",
      padding: 10,
      backgroundColor:
        theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
      borderRadius: 8,
    },
    headerText: {
      textAlign: "center",
      fontSize: 25,
      width: 200,
      color: theme === "dark" ? colors.white : lightColors.white,
      fontFamily: "Poppins-Medium",
    },
    weekButton: {
      color: theme === "dark" ? colors.semiPurple : lightColors.semiPurple,
      overflow: "hidden",
      fontSize: 18,
      padding: 10,
      backgroundColor:
        theme === "dark" ? colors.minPurple : lightColors.minPurple,
      borderRadius: 15,
      fontFamily: "Poppins-SemiBold",
    },
    contentBlock: {
      height: "100%",
      backgroundColor:
        theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
    },
    contentSectionList: {
      borderTopLeftRadius: 32,
      overflow: "hidden",
      borderTopRightRadius: 32,
      paddingVertical: 28,
    },
    sectionBlock: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 8,
      marginBottom: 15,
    },
    sectionDate: {
      color: theme === "dark" ? colors.sectionDate : lightColors.sectionDate,
      fontFamily: "Poppins-SemiBold",
      fontSize: 21,
    },
    sectionDay: {
      color: theme === "dark" ? colors.sectionDay : lightColors.sectionDay,
      fontFamily: "Poppins-Medium",
      fontSize: 25,
    },
  });
