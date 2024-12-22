import { TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native";
import React from "react";
import useColors, { Colors } from "../constants/colors";

interface Props {
  group: string;
  classNum: string | null;
  subject: string;
  timeEnd: string;
  timeStart: string;
  adress: string | null;
}
export function ProfessorPair(props: Props) {
  const colors = useColors();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.pair}>
        <View style={styles.time}>
          <Text style={styles.textTime}>{props.timeStart}</Text>
          <Text style={styles.textTime}>-</Text>
          <Text style={styles.textTime}>{props.timeEnd}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: colors.textCardBlack,
          }}
        ></View>
        <View style={styles.pairInfo}>
          <View>
            <View>
              <Text style={styles.groupText}>{props.group}</Text>
            </View>
            <TouchableWithoutFeedback>
              <View>
                <Text numberOfLines={1} style={styles.textAdress}>
                  {props.subject}
                </Text>
              </View>
            </TouchableWithoutFeedback>
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
          <View>
            <Text style={styles.classNum}>
              {props.classNum ? props.classNum : "-"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 8,
    },

    pair: {
      flexDirection: "row",
      borderRadius: 16,
      justifyContent: "space-between",
      padding: 30,
      backgroundColor: colors.gray,
      marginBottom: 20,
    },
    text: {
      overflow: "hidden",
      fontSize: 18,
      height: 60,
      fontFamily: "Poppins-Medium",
      color: colors.white,
    },
    textTime: {
      fontSize: 18,
      fontFamily: "Poppins-Medium",
      color: colors.textCardBlack,
    },
    time: {
      flexDirection: "column",
      fontSize: 18,
      alignItems: "center",
      justifyContent: "center",
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
      fontSize: 15,
      fontFamily: "Poppins-Regular",
      color: colors.textCardBlack,
    },
    pairInfo: {
      width: 170,
      borderColor: colors.textCardBlack,
    },
    groupText: {
      marginBottom: 8,
      fontFamily: "Poppins-SemiBold",
      fontSize: 20,
    },
  });
