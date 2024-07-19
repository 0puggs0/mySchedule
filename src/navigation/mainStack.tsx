import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../screens/login";
import {BottomTabs} from "../navigation/bottomTabs";
import Splash from "../screens/splash";
import { RootStackParamList } from "../API/apiInterface";
import { MyTabs } from "./topTabs";
import { ProfessorSchedule } from "../screens/professorSchedule";

const Stack = createStackNavigator<RootStackParamList>();
export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen options={{gestureEnabled: false}} name="Schedule" component={BottomTabs}/>
        <Stack.Screen key = '123' name="ProfessorSchedule" component={ProfessorSchedule}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
