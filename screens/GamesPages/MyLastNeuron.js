import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import { ScrollView } from 'react-native-gesture-handler'
import ImageScroll from '../../components/ImageScroll'

const MyLastNeuron = () => {

  const PlayerChargeImages= [];

  const HookImages= [];

  const invisibleWallImages= [];

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
        key={"EclipseExodus"}
        Title="Eclipse Exodus">
      </TitleGoBack>
      </View>

<ScrollView>
      <View className="flex-wrap">
    <Text className="text-white text-center">
      Marzo 2023/Aprile 2023 

      My second global game jam 
This time the structure was followed during all the process

<View className="flex-1">
      <ImageScroll key={"PlayerCharge"} Title={"Player Charge" } FeatureImages={PlayerChargeImages}></ImageScroll>
    </View>

During the game the player can charge the Character interacting with some charge items. 
Some object take che electricity from the player to procede with the puzzle

    <View className="flex-1">
      <ImageScroll key={"Hook"} Title={"Hook" } FeatureImages={HookImages}></ImageScroll>
    </View>

Unfortunately with not enouth time this feature was not polished and its not too natural 


<View className="flex-1">
      <ImageScroll key={"InvisibileWall"} Title={"Invisibile wall" } FeatureImages={invisibleWallImages}></ImageScroll>
    </View>
Invisibile wall
A wall that can let the player pass only if it is charged. This was developed by using a custom collision profile. The player when is charged or not has a different profil
      </Text>
     </View>
      
      <View className="flex-wrap ">
        <MyLinks key={"Links"}></MyLinks>
      </View>
      </ScrollView>
    </SafeAreaView>
    )
  }
  

export default MyLastNeuron