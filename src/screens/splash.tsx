import { View, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../API/apiInterface";
import { colors } from "../constants/colors";

export type Props = StackScreenProps<RootStackParamList, "Splash">;
const Splash = ({ navigation }: Props) => {
  const groupChecher = async () => {
    const group = await AsyncStorage.getItem("group");
    if (group) {
      navigation.navigate("Schedule" as never);
    } else {
      navigation.navigate("Login" as never);
    }
  };
  useEffect(() => {
    groupChecher();
  }, []);
  return (
    <View
      style={styles.container}
    >
      <Image
        style={{ height: 170, width: 170 }}
        source={require("../../assets/bob1.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.semiBlack,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;
