import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';
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
  Image,
} from "react-native";
import { useAppSelector } from "../hooks/redux";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
interface Props {
  navigation: NavigationProp<ParamListBase>;
}
interface ItemType {
  name: string;
  id: string;
}

export function Info({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [groupAs, setGroupAs] = useState("");
  const group = useAppSelector((state) => state.group.value);
  const [data, setData] = useState([]);

  async function getProfessors() {
    const response = await fetch("https://api.rosggram.ru/getProfessors", {
      headers: {
        token:
          "hHc7JIv3EMPd27w2mES5DuZ1jIU3AR1EC6fW0901AqXhuxp0cMu16THKGJuh2yBW",
      },
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

  const bottomSheetRef = useRef<BottomSheetModal>(null);

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
    [],
  );
  const handleOpenPress = () => {
    getProfessors();
    bottomSheetRef.current?.present();
  };
  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: colors.black }}
    >
      <View style={styles.topHeading}>
        <Text style={styles.topHeadingText}>Личный кабинет</Text>
      </View>
      <View style={styles.contentBlock}>
        <Image
          style={{ height: 200, width: 220, marginBottom: 15 }}
          source={require("../../assets/bob5.png")}
        ></Image>
        <View style={styles.block}>
          <Text style={styles.heading}>Ваша группа:</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.groupText}>{groupAs}</Text>
        </View>
        <View style={styles.block}>
          <TouchableOpacity style={styles.button} onPress={handleOpenPress}>
            <Text style={styles.textButton}>Расписание преподавателей</Text>
          </TouchableOpacity>
        </View>
        <View>
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
        <View style ={{ flexDirection: 'row', gap: 15, marginTop: 30}}>
        <TouchableOpacity onPress={() => Linking.openURL('https://t.me/ilushablz')} style = {{padding: 13, backgroundColor: colors.black, borderRadius: 8}}>
          <FontAwesome5 name="telegram-plane" size={28} color={colors.semiWhite} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://vk.com/kspsuti.samara')} style = {{padding: 13, backgroundColor: colors.black, borderRadius: 8}}>
          <Entypo name="vk" size={28} color={colors.semiWhite} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://ks.psuti.ru/')} style = {{padding: 13, backgroundColor: colors.black, borderRadius: 8}}>
          <MaterialCommunityIcons name="web" size={28} color={colors.semiWhite} />
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        index={0}
        enablePanDownToClose={true}
        snapPoints={["85%"]}
        backgroundStyle={{ backgroundColor: colors.semiBlack }}
      >
        <BottomSheetView style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetHeading}>Выберите преподавателя:</Text>
          <TextInput
            style={styles.input}
            placeholder="Арефьев Андрей Андреевич"
            multiline={false}
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          <FlatList
            contentContainerStyle={{ paddingBottom: 200 }}
            data={filtered}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }: { item: ItemType }) => (
              <TouchableOpacity
                style={styles.buttonBS}
                onPress={() => {
                  navigation.navigate("ProfessorSchedule", {
                    id: item.id,
                    name: item.name,
                  });
                  bottomSheetRef?.current?.dismiss();
                }}
              >
                <Text
                  style={styles.buttonBSText}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item: ItemType) => item.id}
            numColumns={2}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
const styles = StyleSheet.create({
  contentBlock: {
    backgroundColor: colors.semiBlack,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    flex: 1,
  },
  topHeading: {
    height: 115,
    alignItems: "center",
    justifyContent: "center",
  },
  topHeadingText: {
    textAlign: "center",
    color: colors.white,
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },
  heading: {
    color: colors.white,
    fontFamily: "Poppins-Medium",
    fontSize: 38,
  },
  groupText: {
    color: colors.semiWhite,
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },
  button: {
    width: 307,
    height: 47,
    backgroundColor: colors.purple,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBS: {
    width: 175,
    height: 78,
    backgroundColor: colors.purple,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonBSText: {
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  textButton: {
    color: colors.white,
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
  block: {
    marginBottom: 15,
  },

  bottomSheetContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  bottomSheetHeading: {
    fontSize: 24,
    textAlign: "center",
    color: colors.white,
    maxWidth: 210,
    fontFamily: "Poppins-Bold",
  },
  input: {
    width: 290,
    borderRadius: 8,
    height: 60,
    backgroundColor: "#25272F",
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontFamily: "Poppins-Medium",
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
});
