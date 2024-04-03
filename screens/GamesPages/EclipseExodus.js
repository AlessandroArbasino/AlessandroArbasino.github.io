import { View, Text ,SafeAreaView} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'

const EclipseExodus = () => {

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

    <View className="flex-wrap">
    <Text className="text-white">
      Progetto in terza persona che mi ha fatto affrontare un argomento che fino a quel momento mi era stato avverso ossia le animazioni.
In questo titolo (Pur mancante della sua parte 3D completa) ho studiato meglio le animazioni con root motion e come raggoglirere e piazzare oggetti 
nella maniera piu verosimile possibile.

Cosa posso migliorare
Purtroppo il poco tempo a disposizione per sviluppare il progetto, la concomitanza di altri progetti e le animazioni prese da mixamo (e quidi non delv tutto adatte allo scopo)
hanno fatto rasggiungere un livello apprezzabile slo in ulcuni aspetti del gioco trlasciando altri.
Cio che posso migliorare e aggiungere vari livelli di anizmazioni per rendere la raccolta dell oggetto e la sua messa a terra 
smooth a ogni altezza.
Risoluzione di bug e finiture. 
      </Text>
     </View>

    <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
  </SafeAreaView>
  )
}

export default EclipseExodus