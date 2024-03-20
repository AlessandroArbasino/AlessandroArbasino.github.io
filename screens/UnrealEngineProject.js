import { View, Text,ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleGoBack from '../components/TitleGoBack';
import GameHorizScrollView from '../components/GameHorizScrollView';
import { Platform } from 'react-native';

const UnrealEngineProject = () => {

  const Navigation=useNavigation();

  const DigitalBrossGames = [];
  const SelfDevelopedGames = [];
  const GameJamGames = [];

  useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);

  return (
    <SafeAreaView  className="flex-1 relative bg-black border-l-8 border-r-8">
    <View>
      <TitleGoBack 
      key={"UnrealEngineProject"}
      Title="Unreal Engine Project">
    </TitleGoBack>
    </View>

    <View className="flex-row flex-1 space-y-7">
    if (Platform.OS === 'web') {
          <View className="flex-2"></View>
      }

    <View className="flex-1 ">
      <GameHorizScrollView className="flex-1"  key={"DigitalBrossGameAcademyProjects"} title="Digital Bross Game Academy Projects" games={DigitalBrossGames}></GameHorizScrollView>
      <GameHorizScrollView className="flex-1"  key={"IndividualProjects"} title="Individual Projects" games={SelfDevelopedGames}></GameHorizScrollView>
      <GameHorizScrollView className="flex-1"  key={"GameJam"} title="Game Jam" games={GameJamGames}></GameHorizScrollView>
    </View>

          if (Platform.OS === 'web') {
          <View className="flex-2"></View>
      }
  </View>
  </SafeAreaView>
  )
}

export default UnrealEngineProject