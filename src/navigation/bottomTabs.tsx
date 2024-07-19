import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabs } from "./topTabs";
import { Info } from "../screens/Info";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
       
      screenOptions={{ headerShown: false, 
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor : '#1c3352',
        tabBarStyle: { backgroundColor: '#436A9F', borderColor: 'red' },
        
      }}
      
    >
      <Tab.Screen name="Расписание" component={MyTabs} />
      <Tab.Screen name="Информация" component={Info} />
    </Tab.Navigator>
  );
}
