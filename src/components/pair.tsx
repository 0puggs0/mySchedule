import { useState } from "react";
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
    <View>
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
    columnGap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#436A9F",
    marginBottom: 15,

  },
  text: {
    overflow: "hidden",
    fontSize: 18,
    height: 60,
    fontFamily: "AvenirNext-Medium",
    color: "white",
  },
  pressedText: {
    overflow: "hidden",
    fontSize: 18,
    fontFamily: "AvenirNext-Medium",
    color: "white",
  },
  textTime: {
    fontSize: 18,
    fontFamily: "AvenirNext-Medium",
    color: "white",
  },
  time: {
    flexDirection: "column",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  subProf: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "justify",
  },
  classNum: {
    overflow: "hidden",
    textAlign: "center",
    width: 117,
    color: "white",
    fontSize: 17,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 7,
    paddingTop: 7,
    fontFamily: "AvenirNext-Medium",
    backgroundColor: "rgba(44, 73, 112, 0.9)",
    borderRadius: 10,
  },
  textAdress: {
    fontSize: 14,
    fontFamily: "AvenirNext-Medium",
    color: "#1c3352",
  },
  pairInfo: {
    width: 170,
  },
  professor: {
    fontSize: 15,
    fontFamily: "AvenirNext-Medium",
    color: "#1c3352",
  },
});
