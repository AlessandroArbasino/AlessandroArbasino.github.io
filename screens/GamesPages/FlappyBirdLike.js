import { View, Text,SafeAreaView,Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import ImageScroll from '../../components/ImageScroll'
import {GameScene,GameSimulator,Menu,Standings} from '../../assets/index';

const FlappyBirdLike = () => {

  const GameImages= [ { Photo : GameScene}, { Photo : GameSimulator}, { Photo : Menu}];

   const StandingsImages= [{ Photo : Standings}];

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

    

    <View className="flex-wrap">
    <Text className="text-white text-center">
      Marzo 2023/Aprile 2023 

      I started developing this game to better understand the usage of delegates and try to do the better architecture i can made. 

      <View className="flex-1">
      <ImageScroll key={"Standings"} Title={"Dynamic leaderboard" } FeatureImages={StandingsImages}></ImageScroll>
    </View>
Dynamic leaderboard
During the development of let it slide i learnt how to do a structure to read and write json file. 
So i put this structure into this project to store every game played into a json and sort them to create a leaderboard. 
You can add a nickname to recognize your score and also delete the existing leaderboard 

<View className="flex-1">
      <ImageScroll key={"GameImages"} Title={"Dinamic difficultues" } FeatureImages={GameImages}></ImageScroll>
    </View>

Dinamic difficultues 
Also read from json theres the difficulties values.
Every aspect of the game, tube x and u separation, max bird speed and tube offett depends on the current player points.
As the game continue also the difficulty change reading values from a json file without any in engine values

// link git
      </Text>
     </View>

   

  

    <View className="flex-wrap">
        <MyLinks key={"Links"}></MyLinks>
      </View>
  </SafeAreaView>
  )
}

export default FlappyBirdLike