import { View, Text, SafeAreaView,Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import ImageScroll from '../../components/ImageScroll'
import {ConventioLutheriVideo,ChiselViolin,DrawRope,RopeAdded,RopeTaken,SandPaper,TakeViolinNeck,ViolinBuilt,ViolinPainted} from '../../assets/index';

const ConventioLutheri = () => {

  const GameImages= [ { Photo : ChiselViolin}, { Photo : DrawRope}, { Photo : RopeAdded}, { Photo : RopeTaken},
    { Photo : SandPaper}, { Photo : TakeViolinNeck}, { Photo : ViolinBuilt}, { Photo : ViolinPainted}
  ];
 

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

      <video width="750" height="500" source={ConventioLutheriVideo} controls id="VideoGamePlay"></video>

     <View className="flex-wrap">
     <Text className="text-white">
      23/01/23-2/3/23

Durante lo sviluppo di questo titolo ho potuto constatare la difficolta del ruolo ricoperto dal lead programmer in quanto mi 
sono occupato del montaggio del gioco dopo una prima fase di test e comunicare le tempistiche con i vari reparti 
-inoltre mi sono occupato completamente della parte di riparazione e malus nel quale si incorre 
-Bug fixing 

Ad oggi cosa potrei fare meglio 
Questo gioco e stato affrontato con idee di struttura quasi inesistenti e senza una chiara visione di insieme 
per questo ho rifatto quasi interamente tutta la parte di codice utilizzando una struttura pensata fin dall inizio 
//link git?
      </Text>
     </View>

     <View className="flex-1">
      <ImageScroll key={"GameImage"} Title={"GameImage" } FeatureImages={GameImages}></ImageScroll>
    </View>

      <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
    </SafeAreaView>
  )
}

export default ConventioLutheri