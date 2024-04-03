import { View, Text ,SafeAreaView} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'

const LostPlanetMaze = () => {
  
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
        key={"LostPlanetMaze"}
        Title="Lost Planet Maze">
      </TitleGoBack>
      </View>

      <View className="flex-wrap">
      <Text className="text-white">
      23/6/23-9/7/23

Gioco sviluppato interamente da me con l aiuto di carola bonamico pe rla relaizzazine degli sprite in game per una borsa 
di studio messa in palio da nacon milano

Bisognava creare un gioco con le seguenti caratteristiche 
// file

Ho inizato lo sviluppo con la chiara idea di programmare ogni voce della lista con il chiaro scopo di riuscire ad affrontare 
la parte di multiplayer.
Il gioco é realizzato interamente con tileMap mantenenedo una rappresentazione dei dati di gioco via codice (non utilizzando posizioni nella scena di unity)
La richiesta di una partita in multiplayer mi ha dato finalmente la possibilita di capire meglio come poterla sviluppare, 
dopo ave ascoltato vari pareri sui provider di questo servizio ho poatato per photon e i suoi eventi sono stati perfetti per 
il sistema di dati su cui si fondava il gioco.

Cosa ho migliorato
Un unica pecca grafica aveva penalizzato la prima verione del gioco ovvero la rotazione della freccia una volta sparat,
infatti essa manteneva sempre la punta della direzione originaria senza adattarla al percorso che stava facendo.
Dopo averci dedicato qualche tempo e aver compreso piu a fondo l uso delle tile map sono riuscito a sviluppare questa feature
facendo adattare la direzione in cui punta la freccia al peercorso che sta facendo

Cosa posso migliorare
In alcuni punti la gerarchia di classi lascia a dediderare a fronte di una arichittettura non molto chiara a inizio progetto
a causa dell integrazione della modalita multiplayer che non sapevo cosa avrebbe richiesto.
La generazione randomica della mappa di gioco aggiungendoci ulteriori gradi di complessita 

// link git
      </Text>
     </View>

      <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
    </SafeAreaView>
  )
}

export default LostPlanetMaze