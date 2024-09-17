import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { setGroup } from "../store/groupSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSchedule } from "../store/scheduleSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { colors, lightColors } from "../constants/colors";

export function Login() {
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = createStyles(theme);

  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  // Функция, которая преобразует значение инпута в значение, которое не чувствительно к регистру и записывает инпут в глобальное redux состояние
  const submitGroup = () => {
    const processedInputArray = inputValue.split("");
    for (let i = 0; i < processedInputArray.length; i++) {
      if (processedInputArray[i] == "-") {
        break;
      }
      processedInputArray[i] = processedInputArray[i].toUpperCase();
    }
    const processedInput = processedInputArray.join("");
    dispatch(setGroup(processedInput));

    // Проверка, существует ли данная группа в базе данных?
    fetch(`https://oh.sssh.it/searchGroup/${processedInput}`)
      .then((response) => {
        if (response.status < 300) {
          AsyncStorage.setItem("group", processedInput);
          return response.json().then(() => {
            dispatch(getSchedule());
            navigation.navigate("Schedule" as never);
          });
        } else {
          Alert.alert("Ошибка", "Такой группы не существует");
          return response.json().then((json) => console.log(json));
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme === "dark" ? colors.black : lightColors.black,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View>
        <Text style={styles.heading}>Расписание КС ПГУТИ</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.h1}>Привет!</Text>
        <Text style={styles.title}>Введи свою группу:</Text>
        <View style={styles.input}>
          <TextInput
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            style={styles.textInput}
            placeholder="3ИСПП-13К"
            maxLength={9}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => submitGroup()}>
          <Ionicons
            name="checkmark-sharp"
            size={36}
            color={
              theme === "dark"
                ? colors.submitInputColor
                : lightColors.submitInputColor
            }
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.text}>Нашли ошибку?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const createStyles = (theme: string) =>
  StyleSheet.create({
    main: {
      alignItems: "center",
    },
    heading: {
      fontSize: 16,
      color: theme === "dark" ? colors.gray : lightColors.gray,
      fontFamily: "Poppins-Medium",
    },
    input: {
      width: 300,
      height: 70,
      borderRadius: 8,
      backgroundColor:
        theme === "dark" ? colors.inputBlack : lightColors.inputBlack,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 17,
    },

    text: {
      color: theme === "dark" ? colors.gray : lightColors.gray,
      fontFamily: "Poppins-Medium",
      fontSize: 20,
    },
    h1: {
      color: theme === "dark" ? colors.semiWhite : lightColors.semiWhite,
      fontFamily: "Poppins-Medium",
      fontSize: 52,
      marginBottom: 20,
    },
    textInput: {
      fontSize: 25,
      color: theme === "dark" ? colors.white : lightColors.white,
      fontFamily: "Poppins-SemiBold",
    },
    button: {
      width: 120,
      height: 50,
      backgroundColor:
        theme === "dark" ? colors.inputBlack : lightColors.inputBlack,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: theme === "dark" ? colors.gray : lightColors.gray,
      fontFamily: "Poppins-Medium",
      fontSize: 20,
      marginBottom: 6,
    },
  });
