import { View, Text, SectionList } from "react-native";
import { ProfessorPair } from "../components/professorPair";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { getProfessorSchedule } from "../store/scheduleSlice";
import { StackScreenProps } from "@react-navigation/stack";
import { NewProfessorSchedule, RootStackParamList } from "../API/apiInterface";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
type Props = StackScreenProps<RootStackParamList, "ProfessorSchedule">;
export function ProfessorSchedule({ navigation, route }: Props) {
  const dispatch = useAppDispatch();
  const professorSchedule: NewProfessorSchedule[] = useAppSelector(
    (state) => state.schedule.professorSchedule
  );
  const week = useAppSelector((state) => state.week.week);

  const insets = useSafeAreaInsets()

  useEffect(() => {
    dispatch(getProfessorSchedule(route.params.id));
  }, [week]);
  return (
    <View style={{ backgroundColor: "#2C4970", flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom}}>

      <View>
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          Расписание преподавателей
        </Text>
        <Text style={{ textAlign: "center", fontSize: 15 }}>{route.params.name}</Text>
      </View>

      <SectionList
        sections={professorSchedule}
        keyExtractor={(item, index) => index + ""}
        renderItem={({ item }) => (
          <ProfessorPair
            group={item.group.name}
            professor={item.professor.name}
            classNum={item.room.auditory}
            subject={item.subject.name}
            timeEnd={item.timeEnd}
            timeStart={item.timeStart}
            adress={item.room.name} 
            date={item.date}          />
        )}
        renderSectionHeader={({ section }) => section.data.length ? <Text>{section.title}</Text> : <></>}
      />
    </View>
  );
}
