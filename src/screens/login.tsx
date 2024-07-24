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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSchedule } from "../store/scheduleSlice";
import { useAppDispatch } from "../hooks/redux";

export function Login() {
  
  const insets = useSafeAreaInsets()

  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  // Функция, которая преобразует значение инпута в значение, которое не чувствительно к регистру и записывает инпут в глобальное redux состояние 
  const submitGroup = () => {
    let processedInputArray = inputValue.split("");
    for (let i = 0; i < processedInputArray.length; i++) {
      if (processedInputArray[i] == "-") {
        break;
      }
      processedInputArray[i] = processedInputArray[i].toUpperCase();
    }
    const processedInput = processedInputArray.join("");
    dispatch(setGroup(processedInput));
      


    // Проверка, существует ли данная группа в базе данных?
    fetch(`https://api.rosggram.ru/searchGroup/${processedInput}`).then(
      (response) => {
        if (response.status < 300) {
          AsyncStorage.setItem('group', processedInput)
          // getSchedule().then((data) => {
          //   if (data) {
          //     dispatch(setSchedule(data));
          //   }})
          return response.json().then((json) => {
            dispatch(getSchedule())
            navigation.navigate("Schedule" as never);
            
          });
        } else {
          Alert.alert("Ошибка", "Такой группы не существует");
          return response.json().then((json) => console.log(json));
        }
      }
    ).catch(e => console.error(e))
  };
  return (
    <View style={{ 
      alignItems: 'center', 
      width: "100%",
      height: "100%",
      flexDirection: 'column',
    justifyContent: 'space-between',
      backgroundColor: "#131418", paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <View><Text style={styles.heading}>Расписание КС ПГУТИ</Text></View>
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
          <Ionicons name="checkmark-sharp" size={36} color="#A0A0A0"/>
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

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
  },
  heading: {
    fontSize: 16,
    color: '#BCC1CD',
    fontFamily: "Poppins-Medium",
  },
  input: {
    width: 300,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#292C34",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 17,
    shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
  },

  text: {
    color: "#BCC1CD",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    
  },
  h1: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: "Poppins-Medium",
    fontSize: 52,
    marginBottom: 20,
    shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
  },
  textInput: {
    fontSize: 25,
    color: "white",
    fontFamily: "AvenirNext-Medium",
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: "#292C34",
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
  title: {
    color: "#BCC1CD",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    marginBottom: 6,
  },
});
