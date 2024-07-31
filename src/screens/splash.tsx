import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../API/apiInterface";
import { colors, lightColors } from "../constants/colors";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setTheme } from "../store/themeSlice";

export type Props = StackScreenProps<RootStackParamList, "Splash">;
const Splash = ({ navigation }: Props) => {
  const theme = useAppSelector(state => state.theme.theme)
  const styles = createStyles(theme)
  const dispatch = useAppDispatch()
  const groupChecher = async () => {
    const group = await AsyncStorage.getItem("group");
    if (group) {
      navigation.navigate("Schedule" as never);
    } else {
      navigation.navigate("Login" as never);
    }
  };

  const themeChecher = async () => {
    const asyncStorageTheme = await AsyncStorage.getItem("theme");
    if (asyncStorageTheme) {
      dispatch(setTheme(asyncStorageTheme))
    }
  };
  useEffect(() => {
    themeChecher()
    groupChecher()
  }, []);
  return (
    <View
      style={styles.container}
    >
      
    </View>
  );
};

const createStyles = (theme: string) =>  StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: theme === 'dark' ? colors.semiBlack : lightColors.semiBlack,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;
