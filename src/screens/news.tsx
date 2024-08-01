import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
} from "react-native";
import { colors, lightColors } from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import dayjs from "dayjs";
import vkPosts from "../data/vk_posts.json";
import { useAppSelector } from "../hooks/redux";
import { InsetsInterface } from "../API/apiInterface";

interface VkPost {
  text: string;
  date: string;
  image: string;
  url: string;
}

export function News() {
  const insets = useSafeAreaInsets();
  const theme = useAppSelector((state) => state.theme.theme);
  const styles = createStyles(theme, insets);

  const data1: VkPost[] = vkPosts;
  data1.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? colors.black : lightColors.black,
      }}
    >
      <View style={styles.topHeading}>
        <Text style={styles.topHeadingText}>Новости</Text>
      </View>
      <View style={styles.contentBlock}>
        <FlatList
          style={{ overflow: "hidden", borderRadius: 16, marginBottom: 15 }}
          showsVerticalScrollIndicator={false}
          initialNumToRender={7}
          data={data1}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      item.image !== ""
                        ? item.image
                        : "https://t-bike.ru/images/products/no-image.jpg",
                  }}
                ></Image>
                <Text numberOfLines={4} style={styles.cardTitle}>
                  {item.text}
                </Text>
                <Text style={styles.cardDate}>
                  {dayjs(item.date).format("DD.MM.YYYY")}
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.cardButton}>Подробнее</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const createStyles = (theme: string, insets: InsetsInterface) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentBlock: {
      backgroundColor:
      theme === "dark" ? colors.semiBlack : lightColors.semiBlack,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 32,
      flex: 1,
    },
    topHeading: {
      height: 150,
      alignItems: "center",
      justifyContent: "center",
    },
    topHeadingText: {
      textAlign: "center",
      color: theme === "dark" ? colors.white : lightColors.white,
      fontFamily: "Poppins-Medium",
      fontSize: 30,
      paddingTop: insets.top,
    },
    card: {
      backgroundColor: theme === "dark" ? colors.gray : lightColors.gray,
      borderRadius: 16,
      paddingVertical: 15,
      paddingHorizontal: 10,
      justifyContent: "center",
      marginTop: 17,
    },
    image: {
      width: 375,
      height: 160,
      borderRadius: 16,
      marginBottom: 10,
    },
    cardTitle: {
      marginBottom: 7,
      fontSize: 16,
      width: 356,
      fontFamily: "Poppins-Medium",
      color: colors.newsCardTitle,
    },
    cardDate: {
      fontFamily: "Poppins-SemiBold",
      color: colors.purple,
      fontSize: 15,
    },
    cardButton: {
      overflow: "hidden",
      textAlign: "center",
      width: 110,
      padding: 10,
      color: theme === "dark" ? colors.gray : lightColors.gray,
      backgroundColor: colors.purple,
      borderRadius: 8,
    },
  });
