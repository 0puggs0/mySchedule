import { View, Text, SectionList, TouchableOpacity } from "react-native";
import { ProfessorPair } from "../components/professorPair";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useCallback, useEffect, useRef, useState } from "react";
import { getProfessorSchedule } from "../store/scheduleSlice";
import { StackScreenProps } from "@react-navigation/stack";
import { NewProfessorSchedule, RootStackParamList } from "../API/apiInterface";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Calendar, DateData } from "react-native-calendars";
import { getWeeksSince } from "../utils/getWeekSince";
type Props = StackScreenProps<RootStackParamList, "ProfessorSchedule">;
export function ProfessorSchedule({ navigation, route }: Props) {
  const dispatch = useAppDispatch();
  const professorSchedule: NewProfessorSchedule[] = useAppSelector(
    (state) => state.schedule.professorSchedule
  );
  const week = useAppSelector((state) => state.week.week);
  const [localWeek, setLocalWeek] = useState(week)

  const insets = useSafeAreaInsets();

  useEffect(() => {
    dispatch(getProfessorSchedule(route.params.id));
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
    []
  );
  const [selectedDate, setSelectedDate] = useState("");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  function onDayPress(day: DateData) {
    setSelectedDate(day.dateString);
    setLocalWeek(getWeeksSince(day.dateString))
  }
  return (
    <View
      style={{
        backgroundColor: "#131418",
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={{
          height: "15%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 8
          
        }}
      >
        <TouchableOpacity
          onPress={() => {navigation.navigate("Info")
            
          }}
          style={{
            overflow: "hidden",
            padding: 15,
            backgroundColor: "#25272F",
            borderRadius: 8,
          }}
        >
          <Entypo name="chevron-left" size={24} color="#BCC1CD" />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            width: 200,
            color: "white",
            fontFamily: "Poppins-Medium",
          }}
        >
          {formatName(route.params.name)}
        </Text>
        <TouchableOpacity onPress={() => handleOpenPress()}>
          <Text style={{ color: "rgba(84, 101, 255, 0.9)",
    overflow: "hidden",
    fontSize: 18,
    padding: 12,
    backgroundColor: "rgba(84, 101, 255, 0.2)",
    borderRadius: 15,
    fontFamily: "Poppins-SemiBold",}}>Неделя {localWeek}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "100%",
          backgroundColor: "#1B1D24",
          borderTopRightRadius: 32,
          borderTopLeftRadius: 32,
        }}
      >
        <SectionList
        style = {{borderTopLeftRadius: 32,
          overflow: 'hidden',
          borderTopRightRadius: 32,
          paddingVertical: 28}}
          contentContainerStyle = {{paddingBottom: 135, }}
          sections={professorSchedule}
          keyExtractor={(item, index) => index + ""}
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
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 8,
                  
                  marginBottom: 15
                }}
              >
                <Text style={{ color: "white", fontFamily: 'Poppins-Medium', fontSize: 25}}>{section.title}</Text>
                <Text style={{ color: "#BCC1CD", fontFamily: 'Poppins-SemiBold', fontSize: 21 }}>{section.data[0].date}</Text>
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
        snapPoints={["25%", "55%"]}
        backgroundStyle={{ backgroundColor: "#1B1D24" }}
      >
        <BottomSheetView>
          <Calendar
            theme={{
              calendarBackground: "#1B1D24",
              textDayFontFamily: 'Poppins-Regular',
              textDayHeaderFontFamily: "Poppins-Medium",
              textMonthFontFamily: "Poppins-SemiBold",
              arrowColor: "#5465FF",
              todayTextColor: "#5465FF",
              dayTextColor: "black",
              monthTextColor: "#BCC1CD",
              textSectionTitleColor: "#BCC1CD",
            }}
            onDayPress={onDayPress}
            hideExtraDays={true}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "#5465FF",
                selectedTextColor: "white",
              },
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
