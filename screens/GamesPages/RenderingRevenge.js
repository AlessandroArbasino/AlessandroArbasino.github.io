import { View, Text, SafeAreaView ,Image} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import ImageScroll from '../../components/ImageScroll'
import { ScrollView } from 'react-native-gesture-handler'
import {AiBasedEnemy,BulletHellBoss,EnemyDrop,ShieldThrowing} from '../../assets/index';

const RenderingRevenge = () => {

  const Navigation=useNavigation();

  const BulletHellBossImages= [{ Photo : BulletHellBoss}];
  const AiBasedEnemyImages= [ { Photo : AiBasedEnemy}, { Photo : EnemyDrop}];
  const ShieldThrowingImages= [{ Photo : ShieldThrowing}];

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

    <ScrollView>
      <View className="flex-wrap">
    <Text className="text-white text-center">
      Marzo 2023/Aprile 2023 

      First ever game jam ever made 
      <View className="flex-1">
      <ImageScroll key={"Aienemybased"} Title={"Ai enemy based" } FeatureImages={AiBasedEnemyImages}></ImageScroll>
    </View>
Ai enemy based
I Made some work on enemies unfortunately the beginning structure was good but during the process not everything goes well 
Some enemies follows those structure but not every one. 
<View className="flex-1">
      <ImageScroll key={"BulletHellBoss"} Title={"Bullet Hell Boss" } FeatureImages={BulletHellBossImages}></ImageScroll>
    </View>
One single level with at the end a bullet nell boss with some different attack pattern 

<View className="flex-1">
      <ImageScroll key={"ShieldThrowing"} Title={"Shield throwing" } FeatureImages={ShieldThrowingImages}></ImageScroll>
    </View>

You can unlock a shield throwing abilità 
Lounching it in different direction and after a certain period of time it returns to t

      </Text>
     </View>
      
      <View className="flex-wrap ">
        <MyLinks key={"Links"}></MyLinks>
      </View>
      </ScrollView>
  </SafeAreaView>
  )
}

export default RenderingRevenge