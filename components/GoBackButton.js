import { View, Text,Image ,Pressable} from 'react-native'
import React from 'react'
import {GoBackArrow} from '../assets';
import { useNavigation } from '@react-navigation/native'

const GoBackButton = () => {
    const Navigation=useNavigation();
  return (
    <Pressable className="items-center justify-center" onPress={()=> Navigation.goBack()}>
    <View className=" w-14 h-14  ">
        <Image source={GoBackArrow} className="h-full w-full"></Image >
    </View>
</Pressable>
  )
}

export default GoBackButton