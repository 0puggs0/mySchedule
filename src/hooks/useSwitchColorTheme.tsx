import { useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import themeStore from "../store/themeStore";
const useSwitchColorTheme = () => {
  const { theme, setTheme } = themeStore;
  const toggleSwitch = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const ChangeThemeIcon = () => {
    return theme === "dark" ? (
      <Feather name="sun" size={30} color="white" />
    ) : (
      <Feather name="moon" size={30} color="black" />
    );
  };
  useEffect(() => {
    console.log("change");
    AsyncStorage.setItem("theme", theme);
  }, [theme]);

  return { toggleSwitch, ChangeThemeIcon };
};

export default useSwitchColorTheme;
