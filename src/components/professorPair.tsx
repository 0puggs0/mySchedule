import { TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native"

interface Props {
    group: string,
    professor: string,
    classNum: string | null,
    subject: string,
    timeEnd: string,
    timeStart: string,
    adress: string | null,
    date: string
}
export function ProfessorPair(props: Props) {
    return (
        <View>
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
          <Text>{props.date}</Text>
        <View>
              <Text>
                {props.group}
              </Text>
            </View>
          <TouchableWithoutFeedback>
            <View>
              <Text>
                {props.subject}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text style={styles.professor}>{props.professor}</Text>
        </View>
        <View>
          <Text style={styles.textAdress}>{props.adress}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.classNum}>{props.classNum}</Text>
        </View>
      </View>
    </View>
    </View>
    )
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