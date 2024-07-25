import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabs } from "./topTabs";
import React from "react";
import { Info } from "../screens/Info";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../constants/colors";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
       
      screenOptions={{ headerShown: false, 
        tabBarLabel: () => null,
        tabBarInactiveTintColor : '#1c3352',
        tabBarStyle: { backgroundColor: colors.black,borderTopWidth: 0},
        
      }}
      
    >
      <Tab.Screen name="Расписание" component={MyTabs} options={{tabBarIcon: ({focused}) => {
        return (
          <MaterialCommunityIcons name="calendar-text-outline" size={30} color={focused ? colors.purple : '#88889D'}/>
        )
      }}}/>
      <Tab.Screen name="Info" component={Info}  options={{tabBarIcon: ({focused}) => {
        return (
          <MaterialCommunityIcons name="account-circle-outline" size={30} color={focused ? colors.purple : '#88889D'} />
        )
      }}}/>
    </Tab.Navigator>
  );
}
