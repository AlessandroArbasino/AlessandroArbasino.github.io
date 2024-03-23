import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'

const ConventioLutheri = () => {

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
        key={"ConventioLutheri"}
        Title="Conventio Lutheri">
      </TitleGoBack>
      </View>

      <MyLinks></MyLinks>
    </SafeAreaView>
  )
}

export default ConventioLutheri