import { View, Text ,SafeAreaView} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'

const LostPlanetMaze = () => {
  
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
        key={"LostPlanetMaze"}
        Title="Lost Planet Maze">
      </TitleGoBack>
      </View>
    </SafeAreaView>
  )
}

export default LostPlanetMaze