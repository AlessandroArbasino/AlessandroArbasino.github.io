import { View, Text ,SafeAreaView,Image} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import ImageScroll from '../../components/ImageScroll'
import {EclipseExodusImage,Overlay,SunMode,Take} from '../../assets/index';
import { ScrollView } from 'react-native-gesture-handler'

const EclipseExodus = () => {
  const SunAndMoonPuzzlesImages= [  { Photo : SunMode}];
  const DayPartBasedCluesImages= [ { Photo : EclipseExodusImage}];
  const PlacingObjectPuzzlesImages= [  { Photo : Overlay}, { Photo : Take}];

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

      First Experience with root motion animation 


Taking object with animation and parenting them to the bone so it remains with the player.
The game is based on day part unloking puzzles. 
Everhing that dipends on the part of the day listen a delegate on a manager knowing that the state is changed

<View className="flex-1">
      <ImageScroll key={"SunAndMoonPuzzles"} Title={"Sun and moon puzzles" } FeatureImages={SunAndMoonPuzzlesImages}></ImageScroll>
    </View>

Changing the day condition unlock different part of the puzzle by intercat with a lever. 

<View className="flex-1">
      <ImageScroll key={"DayPartBasedClues"} Title={"Day part based clue" } FeatureImages={DayPartBasedCluesImages}></ImageScroll>
    </View>

Across the map are spread some clues to solve the escape room. Those are visibile just during a given part of the day 

<View className="flex-1">
      <ImageScroll key={"PlacingObjectPuzzles"} Title={"Placing object puzzles" } FeatureImages={PlacingObjectPuzzlesImages}></ImageScroll>
    </View>

Placing object puzzles
Some puzzles to ne solved need a specify element to be placed into a box collider. 
When an object is placed an event is rised to the puzzle manager sending a reference of the placed object.
The manager check if is the correct one and if the puzzle is complete

      </Text>
     </View>
      
      <View className="flex-wrap ">
        <MyLinks key={"Links"}></MyLinks>
      </View>
      </ScrollView>
  </SafeAreaView>
  )
}

export default EclipseExodus