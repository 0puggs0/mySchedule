import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface Props {
  timeStart: string;
  timeEnd: string;
  subject: string;
  professor: string;
  classNum: string | null;
  adress: string;
}
export function Pair(props: Props) {
  const [isPressed, setIsPressed] = useState(2);
  return (
    <View style = {{backgroundColor: '#1B1D24'}}>
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
          <TouchableWithoutFeedback onPress={() => {
            if(props.subject.length > 31){
              setIsPressed(prevLines => prevLines === 2 ? 15 : 2)
            }
          }}>
            <View>
              <Text style={isPressed ? styles.pressedText : styles.text}  numberOfLines={isPressed}>
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
  pair: {
    columnGap: 16,
    flexDirection: "row",
    borderRadius: 16,
    justifyContent: "center",
    padding: 30,  
    backgroundColor: "#BCC1CD",
    marginBottom: 20,
    width: '100%'

  },
  text: {
    overflow: "hidden",
    fontSize: 19,
    height: 60,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 15
  },
  pressedText: {
    overflow: "hidden",
    fontSize: 19,
    fontFamily: "Poppins-SemiBold",
    color: "#212525",
    marginBottom: 15
  },
  textTime: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: "#212525",
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
    color: "white",
    paddingBottom: 7,
    paddingTop: 7,
    
    backgroundColor: "rgba(33, 37, 37, 0.9)",
    borderRadius: 10,
  },
  textAdress: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#212525",
  },
  pairInfo: {
    width: 190,
    justifyContent: "center",
    borderLeftWidth: 1,
    paddingLeft: 17
  },
  professor: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#212525",
  },
});
