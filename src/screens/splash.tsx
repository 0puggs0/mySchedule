import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../API/apiInterface";
import useColors, { Colors } from "../constants/colors";
import useSplashChecker from "../hooks/useSplashChecker";

export type Props = StackScreenProps<RootStackParamList, "Splash">;
const Splash = () => {
  const { groupChecker, themeChecker } = useSplashChecker();
  useEffect(() => {
    themeChecker();
    groupChecker();
  }, []);
  const colors = useColors();
  const styles = createStyles(colors);
  return <View style={styles.container}></View>;
};

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: colors.semiBlack,
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default Splash;
