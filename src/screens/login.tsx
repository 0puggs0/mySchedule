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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useColors, { Colors } from "../constants/colors";
import groupStore from "../store/groupStore";
import ScheduleStore from "../store/scheduleStore";
import { observer } from "mobx-react-lite";

export const Login = observer(() => {
  const [inputValue, setInputValue] = useState("");
  const { setGroup } = groupStore;
  const { getSchedule } = ScheduleStore;

  const colors = useColors();
  const styles = createStyles(colors);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const submitGroup = () => {
    const processedInputArray = inputValue.split("");
    for (let i = 0; i < processedInputArray.length; i++) {
      if (processedInputArray[i] == "-") {
        break;
      }
      processedInputArray[i] = processedInputArray[i].toUpperCase();
    }
    const processedInput = processedInputArray.join("");
    fetch(`https://oh.sssh.it/searchGroup/${processedInput}`)
      .then((response) => {
        if (response.status < 300) {
          AsyncStorage.setItem("group", processedInput);
          setGroup(processedInput);
          return response.json().then(() => {
            getSchedule();
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
        backgroundColor: colors.black,
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
            color={colors.submitInputColor}
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
});

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    main: {
      alignItems: "center",
    },
    heading: {
      fontSize: 16,
      color: colors.gray,
      fontFamily: "Poppins-Medium",
    },
    input: {
      width: 300,
      height: 70,
      borderRadius: 8,
      backgroundColor: colors.inputBlack,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 17,
    },
    text: {
      color: colors.gray,
      fontFamily: "Poppins-Medium",
      fontSize: 20,
    },
    h1: {
      color: colors.semiWhite,
      fontFamily: "Poppins-Medium",
      fontSize: 52,
      marginBottom: 20,
    },
    textInput: {
      fontSize: 25,
      color: colors.white,
      fontFamily: "Poppins-SemiBold",
    },
    button: {
      width: 120,
      height: 50,
      backgroundColor: colors.inputBlack,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: colors.gray,
      fontFamily: "Poppins-Medium",
      fontSize: 20,
      marginBottom: 6,
    },
  });
