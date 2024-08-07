import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabs } from "./topTabs";
import React from "react";
import { Info } from "../screens/Info";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, lightColors } from "../constants/colors";
import { News } from "../screens/news";
import {  useAppSelector } from "../hooks/redux";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  const theme = useAppSelector(state => state.theme.theme)
  return (
    <Tab.Navigator
       
      screenOptions={{ headerShown: false, 
        tabBarLabel: () => null,
        tabBarStyle: { backgroundColor: theme === 'dark' ? colors.black : lightColors.black,
          borderTopWidth: 0},
        
      }}
      
    >
      <Tab.Screen name="Расписание" component={MyTabs} options={{tabBarIcon: ({focused}) => {
        return (
          <MaterialCommunityIcons name="calendar-text-outline" size={30} color={focused ? colors.purple : '#88889D'}/>
        )
      }}}/>
      <Tab.Screen name="News" component={News}  options={{tabBarIcon: ({focused}) => {
        return (
          <MaterialCommunityIcons name="newspaper-variant-outline" size={30} color={focused ? colors.purple : '#88889D'} />
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
