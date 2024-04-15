import { View, Text, SafeAreaView ,Image} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import ImageScroll from '../../components/ImageScroll'
import {AiBasedEnemy,BulletHellBoss,EnemyDrop,ShieldThrowing} from '../../assets/index';

const RenderingRevenge = () => {

  const Navigation=useNavigation();

  const GameImages= [ { Photo : AiBasedEnemy}, { Photo : BulletHellBoss}, { Photo : EnemyDrop}, { Photo : ShieldThrowing}];

  useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);

  return (
    <SafeAreaView className="bg-black flex-1">
    <View>
      <TitleGoBack 
      key={"RenderingRevenge"}
      Title="Rendering Revenge">
    </TitleGoBack>
    </View>

    <View className="flex-1">
      <ImageScroll key={"GameImages"} Title={"GameImages" } FeatureImages={GameImages}></ImageScroll>
    </View>
    <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
  </SafeAreaView>
  )
}

export default RenderingRevenge