import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { RootStackParamList } from "../API/apiInterface";

const useModalInfo = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showModal, setShowModal] = useState(false);

  const handleExit = () => {
    setShowModal(true);
  };

  const handleConfirmExit = async () => {
    setShowModal(false);
    await AsyncStorage.clear();
    navigation.navigate("Login");
  };

  const handleCancelExit = () => {
    setShowModal(false);
  };
  return {
    showModal,
    handleCancelExit,
    handleConfirmExit,
    handleExit,
  };
};
export default useModalInfo;
