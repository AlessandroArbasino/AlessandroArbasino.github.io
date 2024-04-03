import { View, Text ,SafeAreaView} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'

const Pongan = () => {

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
        key={"Pongan"}
        Title="Pongan">
      </TitleGoBack>
      </View>

      <View className="flex-wrap">
      <Text className="text-white">
      21 Novembre-21 Dicembre 2022

Primo gioco mai sviluppato con idea di ricreare un gioco pong like.
Gli aspetti del gioco non sono molti quindi non ho potuto sviluppare interamente nessun aspetto del gioco a favore di aver messo mano su ongi aspetto del progetto 

Cosa ho fatto
Ho aggiunto una scia grafica alla pallina per una resa mmigliore

Cosa posso fare
Ristrutturare il progetto con una visone di insieme piu approfondita con l utivizzo maggiore degli eventi e una ui piu scalabile con la risolzione dello schermo 
Risolvere unico bug riscontrato (Incastrare la pallina tra il muro e il pad ne causava un aumento di velocita che non la rendevapiu gestibile dalle collisioni di unity) 
      </Text>
     </View>

      <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
    </SafeAreaView>
  )
}

export default Pongan