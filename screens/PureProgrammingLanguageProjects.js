import { View, Text,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import GameCard from '../components/GameCard';
import { ConventioLutheriLogo, EclipseExodusLogo, FlappyBirdLikeLogo, LetItSlideLogo, LostPlanetMazeLogo, PonganLogo, RenderingRevengeLogo } from '../assets';
import TitleGoBack from '../components/TitleGoBack';
import GameHorizScrollView from '../components/GameHorizScrollView';
import { Platform } from 'react-native';
import MyLinks from '../components/MyLinks';

const PureProgrammingLanguageProjects = () => {

  const Navigation=useNavigation();

  const C89Projects = [];
  const CppProjects= [
    <GameCard 
      key={"CppTextAdventure"}
      title={"CppTextAdventure"}
      imagesrc={RenderingRevengeLogo}
      gamePagePath={"CppTextAdventureGamePage"}>
    </GameCard>];
  const CSharpProjects = [];

  useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);

  return (
    <SafeAreaView  className="flex-1 relative bg-black border-l-8 border-r-8">
      <View>
        <TitleGoBack 
        key={"PureProgrammingLanguageProgects"}
        Title="Pure Programming Language Progects">
      </TitleGoBack>
      </View>

      <View className="flex-row flex-1 space-y-7">
   

      <View className="flex-1 ">
        <GameHorizScrollView key={"C89 Projects"} title="C89 Projects" games={C89Projects}></GameHorizScrollView>
        <GameHorizScrollView key={"C# Projects"} title="C# Projects" games={CSharpProjects}></GameHorizScrollView>
        <GameHorizScrollView key={"C++ Projects"} title="C++ Projects" games={CppProjects}></GameHorizScrollView>
      </View>

    </View>
    <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
    </SafeAreaView>
  )
}

export default PureProgrammingLanguageProjects