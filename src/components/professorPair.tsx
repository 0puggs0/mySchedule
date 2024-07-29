import { TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

interface Props {
  group: string;
  classNum: string | null;
  subject: string;
  timeEnd: string;
  timeStart: string;
  adress: string | null;
}
export function ProfessorPair(props: Props) {
  return (
    <View style ={styles.container}>
      <View style={styles.pair}>
        <View style={styles.time}>
          <View>
            <Text style={styles.textTime}>{props.timeStart}</Text>
          </View>
          <View>
            <Text style={styles.textTime}>-</Text>
          </View>
          <View>
            <Text style={styles.textTime}>{props.timeEnd}</Text>
          </View>
        </View>
        <View style={styles.pairInfo}>
          <View>
            <View>
              <Text style = {{marginBottom: 8, fontFamily: 'Poppins-SemiBold', fontSize: 20}}>{props.group}</Text>
            </View>
            <TouchableWithoutFeedback>
              <View>
                <Text numberOfLines = {1} style={styles.textAdress}>{props.subject}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Text style={styles.textAdress}>{props.adress}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.classNum}>{props.classNum ? props.classNum : '-'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8
  },
  
  pair: {
    columnGap: 20,
    flexDirection: "row",
    borderRadius: 16,
    justifyContent: "center",
    padding: 30,
    backgroundColor: colors.gray,
    marginBottom: 20,
    
  },
  text: {
    overflow: "hidden",
    fontSize: 18,
    height: 60,
    fontFamily: "Poppins-Medium",
    color: colors.white
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
    width: 100,
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    color: colors.classNumTextColor,
    paddingBottom: 7,
    paddingTop: 7,
    
    backgroundColor: colors.classNumBlack,
    borderRadius: 10,
  },
  textAdress: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: colors.textCardBlack,
  },
  pairInfo: {
    width: 190,
    borderLeftWidth: 1,
    paddingLeft: 22,
    borderColor: colors.textCardBlack,
  },
  
});
