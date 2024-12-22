import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Day } from "../types/schedule";
import { useEffect, useState } from "react";
import useColors, { Colors } from "../constants/colors";
import themeStore from "../store/themeStore";
import dayjs from "dayjs";
import dateStore from "../store/dateStore";
import { days } from "../constants/days";

export function MyTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  const colors = useColors();
  const { theme } = themeStore;
  const { date } = dateStore;
  const styles = createStyle(colors);

  return (
    <View style={styles.customTabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name as Day;

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const [animationValue] = useState(new Animated.Value(0));
        useEffect(() => {
          Animated.timing(animationValue, {
            toValue: isFocused ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }, [isFocused, animationValue]);
        const animatedStyle = {
          transform: [
            {
              scale: animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0.95, 1],
              }),
            },
          ],
          backgroundColor: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.semiBlack, colors.purple],
          }),
        };
        return (
          <Animated.View
            key={route.name}
            style={[styles.customTabBarAnimatedItem, animatedStyle]}
          >
            <TouchableOpacity
              style={styles.customTabBarItem}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Text
                style={{
                  color: isFocused
                    ? theme === "dark"
                      ? colors.topTabsWhite
                      : colors.topTabsWhite
                    : theme === "dark"
                      ? colors.topTabsTabBarGray
                      : "#3F3E3E",
                  fontFamily: "Poppins-Medium",
                  fontSize: 15,
                }}
              >
                {label}
              </Text>
              <Text
                style={{
                  color: isFocused
                    ? theme === "dark"
                      ? colors.topTabsWhite
                      : colors.topTabsWhite
                    : theme === "dark"
                      ? colors.topTabsTabBarGray
                      : "#3F3E3E",
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 19,
                }}
              >
                {dayjs(date)
                  .startOf("week")
                  .add(days[label], "day")
                  .format("DD")
                  .toString()}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
}
const createStyle = (colors: Colors) =>
  StyleSheet.create({
    customTabBar: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 10,
      paddingHorizontal: 20,
      backgroundColor: colors.semiBlack,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
    },
    customTabBarAnimatedItem: {
      flex: 1,
      height: 65,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 10,
      borderRadius: 10,
      margin: 10,
    },
    customTabBarItem: {
      gap: 4,
      alignItems: "center",
    },
  });
