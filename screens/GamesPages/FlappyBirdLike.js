import { View, Text,SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'

const FlappyBirdLike = () => {

  const Navigation=useNavigation();

  useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);

  return (
    <SafeAreaView className="bg-black flex-1">
    <View>
      <TitleGoBack 
      key={"FlappyBirdLike"}
      Title="Flappy Bird Like">
    </TitleGoBack>
    </View>
  </SafeAreaView>
  )
}

export default FlappyBirdLike