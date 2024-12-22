import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyTabs } from "./topTabs";
import React from "react";
import { Info } from "../screens/Info";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { News } from "../screens/news";
import useColors from "../constants/colors";
import { observer } from "mobx-react-lite";

const Tab = createBottomTabNavigator();

export const BottomTabs = observer(() => {
  const colors = useColors();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Расписание"
        component={MyTabs}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="calendar-text-outline"
                size={30}
                color={focused ? colors.purple : "#88889D"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                size={30}
                color={focused ? colors.purple : "#88889D"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={30}
                color={focused ? colors.purple : "#88889D"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
});
