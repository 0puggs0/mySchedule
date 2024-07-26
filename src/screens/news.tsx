import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { colors } from '../constants/colors';
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface Props {
    image: string,
    title: string,
    date: string,
    url: string
}

export function News(props: Props){
    const data = [
        {image: 'https://mmp38.ru/upload/iblock/21a/21a6b5cf803071605b7f74c2c4f33d48.jpg', title: 'В колледже связи компания нефоров была замечена на рассвете, были привлечены спец. службы и всех выгнали...', date: '10.08.2024'},
        {image: 'https://avatars.dzeninfra.ru/get-zen_doc/1705212/pub_5dde5e09ac2c13220551a62a_5dde758f416f067d9b432607/scale_1200', title: 'В колледже связи компания нефоров была замечена на рассвете, были привлечены спец. службы и всех выгнали...', date: '10.08.2024'},
        {image: 'https://www.km.ru/sites/default/files/img/news/2020/4/29/school-2051712_1920.jpg?1588134804', title: 'В колледже связи компания нефоров была замечена на рассвете, были привлечены спец. службы и всех выгнали...', date: '10.08.2024'},
        {image: 'https://ksu.edu.ru/images/NEWS%202020/9/profobuch.jpg', title: 'В колледже связи компания нефоров была замечена на рассвете, были привлечены спец. службы и всех выгнали...', date: '10.08.2024'},
    ]
    const insets = useSafeAreaInsets();
    return (
        
        <View
      style={{ flex: 1, paddingTop: insets.top, backgroundColor: colors.black }}
    >
      <View style={styles.topHeading}>
        <Text style={styles.topHeadingText}>Новости</Text>
      </View>
      <View style={styles.contentBlock}>
        <FlatList style = {{overflow: 'hidden', borderRadius: 16, marginBottom: 15}} showsVerticalScrollIndicator = {false} data = {data} renderItem={({item}) => {
            return (
            <View style = {styles.card}>
                <Image style={styles.image} source={{uri: item.image}}></Image>
                <Text style = {styles.cardTitle}>{item.title}</Text>
                <Text style = {styles.cardDate}>{item.date}</Text>
                <TouchableOpacity>
                    <View style ={{alignItems: 'center'}}><Text style = {styles.cardButton}>Подробнее</Text></View>
                </TouchableOpacity>
            </View>)
        }} />
            
      </View>

      </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    contentBlock: {
        backgroundColor: colors.semiBlack,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        flex: 1,
        
      },
      topHeading: {
        height: 115,
        alignItems: "center",
        justifyContent: "center",
      },
      topHeadingText: {
        textAlign: "center",
        color: colors.white,
        fontFamily: "Poppins-Medium",
        fontSize: 30,
      },
      card: {
        backgroundColor: colors.gray,
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 10,
        
        justifyContent: 'center',
        marginTop: 17
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
        fontFamily: 'Poppins-Medium',
        color: colors.semiBlack
      },
      cardDate: {
        fontFamily: 'Poppins-SemiBold',
        color: colors.purple,
        fontSize: 15
      },
      cardButton: {
        overflow: 'hidden',
        textAlign: 'center',
        width: 110,
        padding: 10,
        color: colors.gray,  
        backgroundColor: colors.purple,
        borderRadius: 8
      }
})