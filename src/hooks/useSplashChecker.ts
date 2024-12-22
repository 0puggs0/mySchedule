import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../API/apiInterface";
import themeStore from "../store/themeStore";

const useSplashChecker = () => {
  const { setTheme } = themeStore;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const groupChecker = async () => {
    const group = await AsyncStorage.getItem("group");
    if (group) {
      navigation.navigate("Schedule" as never);
    } else {
      navigation.navigate("Login" as never);
    }
  };

  const themeChecker = async () => {
    const asyncStorageTheme = await AsyncStorage.getItem("theme");
    if (asyncStorageTheme) {
      console.log(asyncStorageTheme);
      setTheme(asyncStorageTheme);
    }
  };
  return { themeChecker, groupChecker };
};
export default useSplashChecker;
