import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import React, { useEffect, useMemo, useState } from "react";
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

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { InsetsInterface } from "../API/apiInterface";
import useColors, { Colors } from "../constants/colors";
import useModalInfo from "../hooks/useModalInfo";
import useSwitchColorTheme from "../hooks/useSwitchColorTheme";
import useProfessors from "../hooks/useProfessors";
import { renderBackdrop } from "../components/backdrop";
import groupStore from "../store/groupStore";
import { observer } from "mobx-react-lite";
import themeStore from "../store/themeStore";
interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const Info = observer(({ navigation }: Props) => {
  const { theme } = themeStore;
  const { group } = groupStore;

  const colors = useColors();
  const { handleCancelExit, handleConfirmExit, handleExit, showModal } =
    useModalInfo();
  const { ChangeThemeIcon, toggleSwitch } = useSwitchColorTheme();
  const {
    filtered,
    handleClose,
    handleOpenPress,
    bottomSheetRef,
    searchText,
    setSearchText,
  } = useProfessors();

  const insets = useSafeAreaInsets();

  const styles = useMemo(() => createStyles(colors, insets), [theme]);

  const [groupAs, setGroupAs] = useState("");

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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
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
                color={colors.white}
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
              backgroundColor: colors.black,
              borderRadius: 8,
            }}
          >
            <FontAwesome5
              name="telegram-plane"
              size={28}
              color={colors.semiWhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://vk.com/kspsuti.samara")}
            style={{
              padding: 13,
              backgroundColor: colors.black,
              borderRadius: 8,
            }}
          >
            <Entypo name="vk" size={28} color={colors.semiWhite} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://ks.psuti.ru/")}
            style={{
              padding: 13,
              backgroundColor: colors.black,
              borderRadius: 8,
            }}
          >
            <MaterialCommunityIcons
              name="web"
              size={28}
              color={colors.semiWhite}
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
          backgroundColor: colors.semiBlack,
        }}
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
            renderItem={({ item }) => (
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
            keyExtractor={(item: { name: string; id: string }) => item.id}
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
});

const createStyles = (colors: Colors, insets: InsetsInterface) =>
  StyleSheet.create({
    contentBlock: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: colors.semiBlack,
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
      color: colors.white,
      fontFamily: "Poppins-Medium",
      fontSize: 30,
      paddingTop: insets.top,
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
      height: 78,
      backgroundColor: colors.purple,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: 165,
      padding: 10,
      margin: 10,
    },
    buttonBSText: {
      textAlign: "center",
      color: colors.white,
      fontFamily: "Poppins-Medium",
      fontSize: 16,
    },
    textButton: {
      color: colors.textButtonColor,
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
      backgroundColor: colors.bottomSheetInputColor,
      textAlign: "center",
      fontSize: 20,
      color: colors.white,
      fontFamily: "Poppins-Medium",
      alignItems: "center",
      justifyContent: "center",
    },
    closeButton: {
      backgroundColor: colors.purple,
      padding: 10,
      position: "absolute",
      right: 20,
      borderRadius: 10,
    },
    modalView: {
      backgroundColor: colors.semiBlack,
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
      color: colors.white,
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
      padding: 12,
      borderRadius: 10,
      backgroundColor: colors.purple,
      color: "white",
      fontFamily: "Poppins-Medium",
      fontSize: 17,
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
