import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { ProfessorPair } from "../components/professorPair";
import React, { useEffect, useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../API/apiInterface";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Calendar } from "react-native-calendars";
import useColors, { Colors } from "../constants/colors";
import { renderBackdrop } from "../components/backdrop";
import scheduleStore from "../store/scheduleStore";
import { observer } from "mobx-react-lite";
import { formatName } from "../utils/formatName";
import useProfessorCalendar from "../hooks/useProfessorCalendar";

type Props = StackScreenProps<RootStackParamList, "ProfessorSchedule">;

export const ProfessorSchedule = observer(({ navigation, route }: Props) => {
  const { localWeek, selectedDate, onDayPress } = useProfessorCalendar();
  const colors = useColors();
  const {
    professorSchedule,
    professorScheduleIsLoading,
    getProfessorSchedule,
  } = scheduleStore;

  useEffect(() => {
    getProfessorSchedule({ professorKey: route.params.id, week: localWeek });
  }, [localWeek]);

  const insets = useSafeAreaInsets();
  const styles = createStyles(colors);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const calendarTheme = {
    calendarBackground: colors.semiBlack,
    textDayFontFamily: "Poppins-Regular",
    textDayHeaderFontFamily: "Poppins-Medium",
    textMonthFontFamily: "Poppins-SemiBold",
    arrowColor: colors.purple,
    todayTextColor: colors.purple,
    dayTextColor: colors.white,
    monthTextColor: colors.white,
    textSectionTitleColor: colors.gray,
  };

  if (professorScheduleIsLoading) {
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
          backgroundColor: colors.semiBlack,
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
                selectedTextColor: colors.white,
              },
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
});

const createStyles = (colors: Colors) =>
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
      backgroundColor: colors.semiBlack,
      borderRadius: 8,
    },
    headerText: {
      textAlign: "center",
      fontSize: 25,
      width: 200,
      color: colors.semiWhite,
      fontFamily: "Poppins-Medium",
    },
    weekButton: {
      color: colors.semiPurple,
      overflow: "hidden",
      fontSize: 18,
      padding: 10,
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
      color: colors.sectionDate,
      fontFamily: "Poppins-SemiBold",
      fontSize: 21,
    },
    sectionDay: {
      color: colors.sectionDay,
      fontFamily: "Poppins-Medium",
      fontSize: 25,
    },
  });
