import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
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
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
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
import { colors, lightColors } from "../constants/colors";
import { setTheme } from "../store/themeSlice";
import { InsetsInterface } from "../API/apiInterface";
interface Props {
  navigation: NavigationProp<ParamListBase>;
}
interface ItemType {
  name: string;
  id: string;
}

export function Info({ navigation }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleExit = () => {
    setShowModal(true);
  };

  const handleConfirmExit = async () => {
    setShowModal(false);
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const handleCancelExit = () => {
    setShowModal(false);
  };

  function ChangeThemeIcon() {
    return theme === "dark" ? (
      <Feather name="sun" size={30} color="white" />
    ) : (
      <Feather name="moon" size={30} color="black" />
    );
  }

  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = useMemo(() => createStyles(theme, insets), [theme]);

  const toggleSwitch = () => {
    theme == "dark" ? dispatch(setTheme("light")) : dispatch(setTheme("dark"));
  };

  useEffect(() => {
    AsyncStorage.setItem("theme", theme);
  }, [theme]);

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
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? colors.black : lightColors.black,
      }}
    >
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={styles.topHeading}>
        <Text style={styles.topHeadingText}>Личный кабинет</Text>
      </View>

      <View style={styles.contentBlock}>
        <View style={styles.topButtonsContainer}>
          <View style={styles.topButtons}>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: colors.purple,
                borderRadius: 10,
              }}
              onPress={toggleSwitch}
            >
              <ChangeThemeIcon></ChangeThemeIcon>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleExit}
              style={{
                padding: 5,
                backgroundColor: colors.purple,
                borderRadius: 10,
              }}
            >
              <MaterialIcons
                name="exit-to-app"
                size={30}
                color={theme === "dark" ? colors.white : lightColors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middleContent}>
          <Svg width={170} height={153} viewBox="0 0 170 153" fill="none">
            <Path
              d="M84.854 0L.563 43.707v10.436l84.29 46.827 72.251-40.137v33.25h12.041V43.708L84.854 0zm60.208 53.747l-12.042 6.69-48.166 26.76-48.167-26.76-12.041-6.69-8.346-4.636 68.554-35.547 68.554 35.547-8.346 4.636z"
              fill="#5465FF"
            />
            <Path
              d="M127 114.646l-42.146 23.707-42.146-23.707V89.599l-12.041-6.69v38.779l54.187 30.481 54.187-30.481v-38.78L127 89.599v25.048z"
              fill="#5465FF"
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
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://t.me/ilushablz")}
            style={{
              padding: 13,
              backgroundColor:
                theme === "dark" ? colors.black : lightColors.black,
              borderRadius: 8,
            }}
          >
            <FontAwesome5
              name="telegram-plane"
              size={28}
              color={
                theme === "dark" ? colors.semiWhite : lightColors.semiWhite
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://vk.com/kspsuti.samara")}
            style={{
              padding: 13,
              backgroundColor:
                theme === "dark" ? colors.black : lightColors.black,
              borderRadius: 8,
            }}
          >
            <Entypo
              name="vk"
              size={28}
              color={
                theme === "dark" ? colors.semiWhite : lightColors.semiWhite
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://ks.psuti.ru/")}
            style={{
              padding: 13,
              backgroundColor:
                theme === "dark" ? colors.black : lightColors.black,
              borderRadius: 8,
            }}
          >
            <MaterialCommunityIcons
              name="web"
              size={28}
              color={
                theme === "dark" ? colors.semiWhite : lightColors.semiWhite
              }
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
        backgroundStyle={{
          backgroundColor:
            theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
        }}
      >
        <BottomSheetView style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetHeading}>Выберите преподавателя:</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <AntDesign
              name="close"
              size={23}
              color={
                theme === "dark" ? colors.semiBlack : lightColors.semiBlack
              }
            />
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
      <Modal visible={showModal} animationType="fade" transparent={true}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableWithoutFeedback
            style={{ flex: 1, width: "100%" }}
            onPress={handleCancelExit}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableWithoutFeedback onPress={() => ""}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Вы уверены, что хотите выйти?
                  </Text>
                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={handleConfirmExit}>
                      <Text style={styles.modalButton}>Да</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCancelExit}>
                      <Text style={styles.modalButton}>Нет</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
}
const createStyles = (theme: string, insets: InsetsInterface) =>
  StyleSheet.create({
    contentBlock: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor:
        theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
      height: "100%",
      justifyContent: "space-between",
      borderRadius: 32,
      flex: 1,
    },
    topHeading: {
      height: 150,
      alignItems: "center",
      justifyContent: "center",
    },
    topHeadingText: {
      textAlign: "center",
      color: theme === "dark" ? colors.white : lightColors.white,
      fontFamily: "Poppins-Medium",
      fontSize: 30,
      paddingTop: insets.top,
    },
    heading: {
      color: theme === "dark" ? colors.white : lightColors.white,
      fontFamily: "Poppins-Medium",
      fontSize: 38,
    },
    groupText: {
      color: theme === "dark" ? colors.semiWhite : lightColors.semiWhite,
      fontFamily: "Poppins-Medium",
      fontSize: 30,
    },
    button: {
      width: 307,
      height: 47,
      backgroundColor: theme === "dark" ? colors.purple : lightColors.purple,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonBS: {
      width: 175,
      height: 78,
      backgroundColor: theme === "dark" ? colors.purple : lightColors.purple,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
    },
    buttonBSText: {
      textAlign: "center",
      color: colors.white,
      fontFamily: "Poppins-Medium",
      fontSize: 16,
    },
    textButton: {
      color: theme === "dark" ? colors.textButtonColor : colors.textButtonColor,
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
      color: theme === "dark" ? colors.white : lightColors.white,
      maxWidth: 210,
      fontFamily: "Poppins-Bold",
    },
    input: {
      width: 290,
      borderRadius: 8,
      height: 60,
      backgroundColor:
        theme === "dark"
          ? colors.bottomSheetInputColor
          : lightColors.bottomSheetInputColor,
      textAlign: "center",
      fontSize: 20,
      color: theme === "dark" ? colors.white : lightColors.white,
      fontFamily: "Poppins-Medium",
      alignItems: "center",
      justifyContent: "center",
    },
    closeButton: {
      backgroundColor: theme === "dark" ? colors.purple : lightColors.purple,
      padding: 10,
      position: "absolute",
      right: 20,
      borderRadius: 10,
    },
    modalView: {
      backgroundColor:
        theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
      padding: 20,
      borderRadius: 15,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "90%",
      height: "20%",
      justifyContent: "center",
    },
    modalText: {
      fontSize: 20,
      marginBottom: 10,
      fontFamily: "Poppins-Medium",
      color: theme === "dark" ? colors.white : lightColors.white,
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 30,
    },
    modalButton: {
      textAlign: "center",
      width: 100,
      overflow: "hidden",
      padding: 15,
      borderRadius: 5,
      backgroundColor: colors.purple,
      color: "white",
      fontFamily: "Poppins-Medium",
      fontSize: 15,
    },
    darkBackground: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    topButtons: {
      flexDirection: "row",
      gap: 7,
    },
    topButtonsContainer: {
      alignItems: "flex-end",
    },
    middleContent: {
      alignItems: "center",
    },
    bottomButtons: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 20,
    },
  });
