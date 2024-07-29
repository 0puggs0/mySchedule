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
import { colors } from "../constants/colors";
import dayjs from "dayjs";
type Props = StackScreenProps<RootStackParamList, "ProfessorSchedule">;
export function ProfessorSchedule({ navigation, route }: Props) {
  function onDayPress(day: DateData) {
    setSelectedDate(day.dateString);
    setLocalWeek(getWeeksSince(day.dateString));
  }
  const dispatch = useAppDispatch();
  const { professorSchedule, professorScheduleLoading } = useAppSelector(
    (state) => state.schedule,
  );
  const week = useAppSelector((state) => state.week.week);
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

  const theme = {
    calendarBackground: colors.semiBlack,
    textDayFontFamily: "Poppins-Regular",
    textDayHeaderFontFamily: "Poppins-Medium",
    textMonthFontFamily: "Poppins-SemiBold",
    arrowColor: colors.purple,
    todayTextColor: colors.purple,
    dayTextColor: colors.semiWhite,
    monthTextColor: colors.gray,
    textSectionTitleColor: colors.white,
  };

  if (professorScheduleLoading) {
    return (
      <View
        style={{
          backgroundColor: colors.black,
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
            <Entypo name="chevron-left" size={24} color={colors.gray} />
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
        backgroundColor: colors.black,
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
          <Entypo name="chevron-left" size={24} color={colors.gray} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{formatName(route.params.name)}</Text>
        <TouchableOpacity onPress={() => handleOpenPress()}>
          <Text style={styles.weekButton}>Неделя {localWeek}</Text>
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
              <View
                style={styles.sectionBlock}
              >
                <Text
                  style={styles.sectionDay}
                >
                  {section.title}
                </Text>
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
        backgroundStyle={{ backgroundColor: colors.semiBlack }}
      >
        <BottomSheetView>
          <Calendar
            initialDate={selectedDate}
            theme={theme}
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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "15%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  backButton: {
    overflow: "hidden",
    padding: 15,
    backgroundColor: colors.semiBlack,
    borderRadius: 8,
  },
  headerText: {
    textAlign: "center",
    fontSize: 25,
    width: 200,
    color: colors.white,
    fontFamily: "Poppins-Medium",
  },
  weekButton: {
    color: colors.semiPurple,
    overflow: "hidden",
    fontSize: 18,
    padding: 12,
    backgroundColor: colors.minPurple,
    borderRadius: 15,
    fontFamily: "Poppins-SemiBold",
  },
  contentBlock: {
    height: "100%",
    backgroundColor: colors.semiBlack,
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
    color: colors.gray,
    fontFamily: "Poppins-SemiBold",
    fontSize: 21,
  },
  sectionDay: {
    color: colors.gray,
    fontFamily: "Poppins-Medium",
    fontSize: 25,
  },
});
