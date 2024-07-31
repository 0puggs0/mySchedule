import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
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
  Linking,
  Switch,
} from "react-native";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, lightColors} from "../constants/colors";
import { setTheme } from "../store/themeSlice";
interface Props {
  navigation: NavigationProp<ParamListBase>;
}
interface ItemType {
  name: string;
  id: string;
}

export function Info({ navigation }: Props) {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme.theme)
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  console.log('123')
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    theme == 'dark' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'))
  }
  
  
  const insets = useSafeAreaInsets();
  const [groupAs, setGroupAs] = useState("");
  const group = useAppSelector((state) => state.group.value);

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
  const [filteredData, setFilteredData] = useState([]);

  const filtered = useMemo(() => {
    if (Array.isArray(filteredData)) {
      const newData = filteredData.filter((item: ItemType) => {
        if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }
      });
      return newData;
    } else {
      return [];
    }
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
  const handleClose = () => {
    bottomSheetRef.current?.dismiss();
  };
  return (
    <View
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: theme === 'dark' ? colors.black : lightColors.black }}
    >
      <View style={styles.topHeading}>
        <Text style={styles.topHeadingText}>Личный кабинет</Text>
      </View>
      <View style={styles.contentBlock}>
        <Svg width={247} height={223} fill="none">
          <Path
            fill="#5465FF"
            d="M123.5.233.562 63.98v15.22L123.5 147.498l105.375-58.54v48.496h17.563V63.979L123.5.233Zm87.812 78.39L193.75 88.38l-70.25 39.03-70.25-39.03-17.563-9.757-12.172-6.763L123.5 20.017l99.985 51.844-12.173 6.762Z"
          />
          <Path
            fill="#5465FF"
            d="M184.969 167.443 123.5 202.019l-61.469-34.576v-36.531l-17.562-9.757v56.558l79.031 44.456 79.031-44.456v-56.558l-17.562 9.757v36.531Z"
          />
        </Svg>
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
        
        <View>
          <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>
        <View style={{ flexDirection: "row", gap: 23, marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://t.me/ilushablz")}
            style={{
              padding: 13,
              backgroundColor: theme === 'dark' ? colors.black : lightColors.black,
              borderRadius: 8,
            }}
          >
            <FontAwesome5
              name="telegram-plane"
              size={28}
              color={theme === 'dark' ? colors.semiWhite : lightColors.semiWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://vk.com/kspsuti.samara")}
            style={{
              padding: 13,
              backgroundColor: theme === 'dark' ? colors.black : lightColors.black,
              borderRadius: 8,
            }}
          >
            <Entypo name="vk" size={28} color={theme === 'dark' ? colors.semiWhite : lightColors.semiWhite} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://ks.psuti.ru/")}
            style={{
              padding: 13,
              backgroundColor: theme === 'dark' ? colors.black : lightColors.black,
              borderRadius: 8,
            }}
          >
            <MaterialCommunityIcons
              name="web"
              size={28}
              color={theme === 'dark' ? colors.semiWhite : lightColors.semiWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        index={0}
        enablePanDownToClose={true}
        snapPoints={["85%"]}
        backgroundStyle={{ backgroundColor: theme === 'dark' ? colors.semiBlack : lightColors.semiBlack }}
      >
        <BottomSheetView style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetHeading}>Выберите преподавателя:</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <AntDesign name="close" size={23} color={colors.semiBlack} />
          </TouchableOpacity>
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
                <Text style={styles.buttonBSText}>{item.name}</Text>
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
const createStyles = (theme: string) => StyleSheet.create({ 
  contentBlock: { 
    backgroundColor: theme === 'dark' ? colors.semiBlack : lightColors.semiBlack, 
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
    color: theme === 'dark' ? colors.white : lightColors.white,
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },
  heading: {
    color: theme === 'dark' ? colors.white : lightColors.white,
    fontFamily: "Poppins-Medium",
    fontSize: 38,
  },
  groupText: {
    color: theme === 'dark' ? colors.semiWhite : lightColors.semiWhite,
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },
  button: {
    width: 307,
    height: 47,
    backgroundColor: theme === 'dark' ? colors.purple : lightColors.purple,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBS: {
    width: 175,
    height: 78,
    backgroundColor: theme === 'dark' ? colors.purple : lightColors.purple,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonBSText: {
    textAlign: "center",
    color: theme === 'dark' ? colors.white : lightColors.white,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  textButton: {
    color: theme === 'dark' ? colors.textButtonColor : colors.textButtonColor,
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
    color: theme === 'dark' ? colors.white : lightColors.white,
    maxWidth: 210,
    fontFamily: "Poppins-Bold",
  },
  input: {
    width: 290,
    borderRadius: 8,
    height: 60,
    backgroundColor: theme === 'dark' ? colors.bottomSheetInputColor : lightColors.bottomSheetInputColor,
    textAlign: "center",
    fontSize: 20,
    color: theme === 'dark' ? colors.white : lightColors.white,
    fontFamily: "Poppins-Medium",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: theme === 'dark' ? colors.purple : lightColors.purple,
    padding: 10,
    position: "absolute",
    right: 20,
    borderRadius: 10,
  },
});
