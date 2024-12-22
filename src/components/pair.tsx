import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import useColors, { Colors } from "../constants/colors";

interface Props {
  timeStart: string;
  timeEnd: string;
  subject: string;
  professor: string;
  classNum: string | null;
  adress: string;
}
export function Pair(props: Props) {
  const colors = useColors();
  const styles = createStyles(colors);

  const [isPressed, setIsPressed] = useState(2);
  return (
    <View style={styles.container}>
      <View style={styles.pair}>
        <View style={styles.time}>
          <Text style={styles.textTime}>{props.timeStart}</Text>
          <Text style={styles.textTime}>-</Text>
          <Text style={styles.textTime}>{props.timeEnd}</Text>
        </View>
        <View style={styles.borderBottom}></View>
        <View style={styles.pairInfo}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                if (props.subject.length > 31) {
                  setIsPressed((prevLines) => (prevLines === 2 ? 15 : 2));
                }
              }}
            >
              <View>
                <Text
                  style={isPressed ? styles.pressedText : styles.text}
                  numberOfLines={isPressed}
                >
                  {props.subject}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Text style={styles.professor}>{props.professor}</Text>
          </View>
          <View>
            {props.adress !== "" ? (
              <Text style={styles.textAdress}>{props.adress}</Text>
            ) : (
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Bold",
                  color: colors.textCardBlack,
                }}
              >
                Дистанционно
              </Text>
            )}
          </View>
        </View>
        <View>
          <Text style={styles.classNum}>
            {props.classNum === "Спортзал" ? "Зал" : props.classNum}
          </Text>
        </View>
      </View>
    </View>
  );
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.semiBlack,
    },
    pair: {
      flexDirection: "row",
      borderRadius: 16,
      justifyContent: "space-between",
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: colors.gray,
      marginBottom: 20,
    },
    text: {
      overflow: "hidden",
      fontSize: 19,
      color: colors.textCardBlack,
      fontFamily: "Poppins-SemiBold",
      marginBottom: 15,
    },
    pressedText: {
      overflow: "hidden",
      fontSize: 19,
      fontFamily: "Poppins-SemiBold",
      color: colors.textCardBlack,
      marginBottom: 15,
    },
    textTime: {
      textAlign: "center",
      fontSize: 18,
      fontFamily: "Poppins-Medium",
      color: colors.textCardBlack,
    },
    time: {
      fontSize: 18,
      alignItems: "center",
    },
    subProf: {
      alignItems: "center",
      justifyContent: "center",
      textAlign: "justify",
    },
    classNum: {
      overflow: "hidden",
      textAlign: "center",
      fontSize: 17,
      fontFamily: "Poppins-Regular",
      color: colors.classNumTextColor,
      paddingHorizontal: 14,
      paddingVertical: 7,
      backgroundColor: colors.classNumBlack,
      borderRadius: 10,
    },
    textAdress: {
      fontSize: 14,
      fontFamily: "Poppins-Regular",
      color: colors.textCardBlack,
    },
    pairInfo: {
      width: 170,
      justifyContent: "center",
    },
    professor: {
      fontSize: 14,
      fontFamily: "Poppins-Regular",
      color: colors.textCardBlack,
    },
    borderBottom: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: colors.textCardBlack,
    },
  });
