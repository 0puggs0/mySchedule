import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { MyStack } from "./src/navigation/mainStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { setupStore } from "./src/store/store";
import {useFonts} from 'expo-font'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const store = setupStore();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  })

  if(!fontsLoaded){
    return undefined
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GestureHandlerRootView>
        
          <View style={styles.container}>
            <MyStack></MyStack>
          </View>
          
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#131418",
  },
});
