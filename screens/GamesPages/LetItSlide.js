import { View, Text,SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
const LetItSlide = () => {

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
        key={"LetItSlide"}
        Title="Let It Slide">
      </TitleGoBack>
      </View>

      <video width="750" height="500" src="/AlessandroArbasino.github.io/assets/Unity/LetItSlide/Team02_Trailer_Letitslide_Release.mp4" controls id="VideoGamePlay"></video>

     <View className="flex-wrap">
     <Text className="text-white">
      27/4/2023-11/7/23

Durante questo progetto ho potuto affrontare e approfondire vari argomenti legati alla costruzione di figure a run time da codice 
salvataggi e letture tramite json 
Mi sono occupato di:
-Del sistema di pattern nella sua interezza dall evento di inizio rampa fino alla scomparsa e relativo bonus
integrandolo nel istema di lettura del file dei dati di gioco contenente tutta la lista adei possibili pattern
-Della UI del menu nella parte di organizzazione e presentazione e integrandola per renderla dinamica con i file dei dati di gioco
-Della realizzazione della pit ottenuta tramite sottrazione di collider 2D e successiva creazione di una mesh che presenta il buco nel 
punto corretto 
-Del sistema di personalizzazione del personaggio dove ho potuto comprendere il funzoinamento di un rig e come mantenerlo 
funzionante pur modificando la mesh al quale e collegato 
-Dello shader per la curvatura della pista 
-Della neve (Seppur lasciata in una maniera moolto primitiva)

Ad oggi cosa potrei fare meglio 
Il sistema di pattern che pur essendo stato affrontato con abbastanza cognizione di capusa per qunato riguarda la struttutura
pecca in alcuni movimenti facendo risultare la linea "disegnata" non del tutto omogenea.
Avendo piu tempo e conoscienze a dispososizione affronterei rifarei sicuramente da capo la personalizzazione del personaggio 
Facendo un tool per la "registrazione" delle ossa connesse alla parte da modificare con la successiva ceazione di un file di testo 
che successivamente verra letto durante il gioco anziche fare tutto questo a gioco avviato (non ottimale con prestazioni).
      </Text>
     </View>

      <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
    </SafeAreaView>
  )
}

export default LetItSlide