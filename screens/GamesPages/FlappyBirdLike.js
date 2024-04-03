import { View, Text,SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'

const FlappyBirdLike = () => {

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
    <Text className="text-white">
      Marzo 2023/Aprile 2023 

Per comprendere meglio l' uso di eventi e delegati nei quali mi ero reso conto di avere alcune lacune 
durante lo sviluppo di conventio lutheri ho deciso di svuluppare interamente da solo una copia di flappy bird. 
Il gioco prevede una randomizzazione di distanza di spawn dei tubi, della loro separazione,e dell loro offset rispetto al terreno
tutto cio randomizzato in un range di valori decrescenti a seconda della difficolta.
Una volta finita la partita c è la possibilita di salvare il prorpio punteggio con un nickname e vedere la leaderboard dei punteggi preceddenti 

Cosa ho migliorato
Ho reso piu scalabile i valori di difficolta e le difficolta stesse passando da una valorizzazione su unity tramite variabile a 
una lettura di un json con possibilita di aggiungere difficolta e modificare i valori associati ad esse.
Stessa cosa ho fatto per la classifica passando dall utilizzo dei player prefs a una classifica in formato json 

Cosa posso migliorare 
Utilizzare valori pesati "meglio" per una esperienza di gioco migliore e modificare cio che e relativo alla gestione dei tubi 
Rendendolo anche esse piu scalabile potendo aggiungere facilmente ulteriori livelli di randomizzazione 

// link git
      </Text>
     </View>

    <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
  </SafeAreaView>
  )
}

export default FlappyBirdLike