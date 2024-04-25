import { View, Text, SafeAreaView,Image,Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import ImageScroll from '../../components/ImageScroll'
import {ConventioLutheriVideo,ChiselViolin,DrawRope,RopeAdded,RopeTaken,SandPaper,TakeViolinNeck,ViolinBuilt,ViolinPainted,InteractionBasedStoryLine,Interaction,Malus} from '../../assets/index';
import { ScrollView } from 'react-native-gesture-handler'

const ConventioLutheri = () => {

  const ReparationImages= [ { Photo : ChiselViolin}, { Photo : DrawRope}, { Photo : RopeAdded}, { Photo : RopeTaken},
    { Photo : SandPaper}, { Photo : TakeViolinNeck}, { Photo : ViolinBuilt}, { Photo : ViolinPainted}
  ];

  const Interaction= [ { Photo : InteractionBasedStoryLine}, { Photo : Interaction}];


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
      <ScrollView>

      <View className="items-center flex-wrap" >
      <video  width={Dimensions.get("window").width/2} height={(Dimensions.get("window").width * 2)/6} source={ConventioLutheriVideo} controls id="VideoGamePlay"></video>
      </View>
     <View className="flex-wrap">
     <Text className="text-white text-center">
      23/01/23-2/3/23

      Second Developed game at digital bros game academy and first as lead of the programming department. 
The concept was to make a first person similation game simulatong the liutaio job. 
It was a difficult concept and try to do a horror game ha resto everything harder to do. 
It was a sort of story game and the most important think was to do a solid state machine for the interaction between player and environment. 

    <View className="flex-1">
      <ImageScroll key={"Interaction"} Title={"State machine interaction storyline" } FeatureImages={Interaction}></ImageScroll>
    </View>
State machine: 
Every object has an array of references to the other game object to enable interaction ad a frase to display. 
Every game object can appear into the state machine multiple times for this reason i choss an array. 
I can inprove this error prone state machine using a manager with an array of structure (gameobject ref and frase) 

    <View className="flex-1">
      <ImageScroll key={"Reparation"} Title={"Reparation" } FeatureImages={ReparationImages}></ImageScroll>
    </View>
Reparation
The other pare i Made during the develpmrnt of this game was the reparation. 
This was more complex and i try to do my best without the knowing of delegates (now i can do it better using delegates)
      </Text>
     </View>

      <View className="flex-wrap">
        <MyLinks key={"Links"}></MyLinks>
      </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default ConventioLutheri