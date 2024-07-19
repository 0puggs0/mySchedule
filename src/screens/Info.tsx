import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useAppSelector } from "../hooks/redux";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
interface Props {
  navigation: NavigationProp<ParamListBase>;
}
interface ItemType {
  name: string;
  id: string
}
export function Info({ navigation }: Props) {
  const [groupAs, setGroupAs] = useState("");
  const group = useAppSelector((state) => state.group.value);
  const [data, setData] = useState([]);

  async function getProfessors() {
    const response = await fetch("https://api.rosggram.ru/getProfessors", {
      headers: {token: 'hHc7JIv3EMPd27w2mES5DuZ1jIU3AR1EC6fW0901AqXhuxp0cMu16THKGJuh2yBW'}
    });
    const json = await response.json();
    setFilteredData(json.professors);
  }

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const filtered = useMemo(() => {
    const newData = filteredData.filter((item: ItemType) => {
      if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
    });
    return newData;
  }, [searchText, filteredData]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    const fetchGroup = async () => {
      const groupValue = await AsyncStorage.getItem("group");
      if (groupValue) {
        setGroupAs(groupValue);
      }
    };

    fetchGroup();
  }, []);
  useEffect(() => {
    setGroupAs(group);
  }, [group]);

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
  const handleOpenPress = () => {
    getProfessors();
    bottomSheetRef.current?.expand();
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.heading}>Ваша группа:</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.groupText}>{groupAs}</Text>
      </View>
      <View style={styles.block}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await AsyncStorage.clear();
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.textButton}>Выйти</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
        <Text style={styles.textButton}>Расписание преподавателей</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        index={-1}
        enablePanDownToClose={true}
        snapPoints={["25%", "57%", "95%"]}
        backgroundStyle={{ backgroundColor: "#436A9F" }}
      >
        <BottomSheetView
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              color: "white",
              fontFamily: "AvenirNext-Medium",
            }}
          >
            Выберите нужного преподавателя:
          </Text>
          <TextInput
            style={{
              width: 300,
              height: 70,
              backgroundColor: "#436A9F",
              textAlign: "center",
              fontSize: 20,
              fontFamily: "AvenirNext-Medium",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
            }}
            placeholder="Арефьев Андрей Андреевич"
            multiline={false}
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          <FlatList
            data={filtered}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }: {item: ItemType}) => (
              <TouchableOpacity style={styles.buttonBS} onPress={() => navigation.navigate('ProfessorSchedule', {id: item.id, name: item.name})}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "AvenirNext-Medium",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item: ItemType) => item.id}
            numColumns={2}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C4970",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  heading: {
    color: "white",
    fontFamily: "AvenirNext-Medium",
    fontSize: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  groupText: {
    color: "white",
    fontFamily: "AvenirNext-Medium",
    fontSize: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  button: {
    width: 360,
    height: 50,
    backgroundColor: "#436A9F",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonBS: {
    width: 170,
    height: 70,
    backgroundColor: "#2C4970",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    margin: 10,
  },
  textButton: {
    color: "white",
    fontFamily: "AvenirNext-Medium",
    fontSize: 25,
  },
  block: {
    marginBottom: 15,
  },
});
