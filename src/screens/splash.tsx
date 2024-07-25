import { View, Image} from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../API/apiInterface'

export type Props = StackScreenProps<RootStackParamList, 'Splash'>
const Splash = ({navigation}: Props) => {
    const groupChecher = async () => {
        const group = await AsyncStorage.getItem('group')
        if (group){
            navigation.navigate('Schedule' as never)
        } else {
            navigation.navigate('Login' as never)
        }
    }
    useEffect(() => {
        groupChecher()
    }, [])
  return (
    <View style = {{width: '100%', height: '100%', backgroundColor: '#1B1D24', justifyContent: 'center', alignItems: 'center'}}>
      <Image style = {{height: 170, width: 170}} source={require('../../assets/bob1.png')}></Image>
    </View>
  )
}

export default Splash

