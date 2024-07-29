import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../constants/colors";


interface Props {
  timeStart: string;
  timeEnd: string;
  subject: string;
  professor: string;
  classNum: string | null;
  adress: string;
}
export function ActivePair(props: Props) {
  
  const [isPressed, setIsPressed] = useState(2);
  return (
    <View style={styles.container}>
      <View style={styles.pair}>
        <View style={styles.time}>
          <SafeAreaView>
            <Text style={styles.textTime}>{props.timeStart}</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.textTime}>-</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.textTime}>{props.timeEnd}</Text>
          </SafeAreaView>
        </View>
        <View style={styles.pairInfo}>
          <SafeAreaView>
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
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.professor}>{props.professor}</Text>
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.textAdress}>{props.adress}</Text>
          </SafeAreaView>
        </View>
        <View>
          <SafeAreaView>
            <Text style={styles.classNum}>{props.classNum}</Text>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#1B1D24" },
  pair: {
    columnGap: 16,
    flexDirection: "row",
    borderRadius: 16,
    justifyContent: "center",
    padding: 30,
    backgroundColor: colors.purple,
    marginBottom: 20,
    width: "100%",
  },
  text: {
    overflow: "hidden",
    fontSize: 19,
    height: 60,
    color: colors.white,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 15,
  },
  pressedText: {
    overflow: "hidden",
    fontSize: 19,
    fontFamily: "Poppins-SemiBold",
    color: colors.white,
    marginBottom: 15,
  },
  textTime: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: colors.white,
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
    width: 100,
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    color: colors.textCardBlack,
    paddingBottom: 7,
    paddingTop: 7,

    backgroundColor: colors.activeClassNum,
    borderRadius: 10,
  },
  textAdress: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: colors.white,
  },
  pairInfo: {
    width: 190,
    justifyContent: "center",
    borderLeftWidth: 1,
    borderColor: colors.white,
    paddingLeft: 17,
  },
  professor: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: colors.white,
  },
});