import { View, Text ,SafeAreaView} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import ImageScroll from '../../components/ImageScroll'
import MyLinks from '../../components/MyLinks'
import { ScrollView } from 'react-native-gesture-handler'

const Pongan = () => {

  const GameImages= [ ];

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

      <ScrollView>
      <View className="flex-wrap">
      <Text className="text-white text-center">
      21 Novembre-21 Dicembre 2022

      This was my first game developed using unity and the main concept was to create a pong like game. 
The main struggle was thinking for the first time of a sort of structure to make make programming this game easily. 
I see every feature of this game and it wasnt too complex. 
I think that this game needs a total refactor for gameplay mad refactor.
Gameplay: less use of singleton pattern that makes easier to access something from every part of the game but (ne risente la struttura del progetto). 
Ui: we had a lot of problem disabling all the widget and what is needed is to makes a better panel strutture to enable just the active panel. 
<View className="flex-1">
      <ImageScroll key={"Game"} Title={"Game" } FeatureImages={GameImages}></ImageScroll>
</View>
This game has one bug that we cannot resolve . In some cases the ball was too fast and goes outisde the walls. 
Now i think that i can fix this in this way… TODO
      </Text>
     </View>

      <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Pongan