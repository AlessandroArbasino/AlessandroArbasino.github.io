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

const UnityProject = () => {
  const Navigation=useNavigation();

  const DigitalBrossGames = [
    <GameCard 
      key={"Pongan"}
      title="Pongan"
      imagesrc={PonganLogo}
      gamePagePath="PonganGamePage">
    </GameCard>,

    <GameCard 
      key={"ConventioLutheri"}
      title="Conventio Lutheri"
      imagesrc={ConventioLutheriLogo}
      gamePagePath="ConventioLutheriGamePage">
        </GameCard>,

<GameCard
      key={"LetItSlide"}
      title="Let It Slide"
      imagesrc={LetItSlideLogo}
      gamePagePath="LetItSlideGamePage">
        </GameCard>,

    <GameCard 
      key={"EclipseExodus"}
      title="EclipseExodus"
      imagesrc={EclipseExodusLogo}
      gamePagePath="EclipseExodusGamePage">
        </GameCard>,];

    const SelfDevelopedGames = [ 
      <GameCard 
      key={"LostPlanetMaze"}
      title="Lost Planet Maze"
      imagesrc={LostPlanetMazeLogo}
      gamePagePath="LostPlanetMazeGamePage">
        </GameCard>,

   <GameCard 
      key={"FlappyBirdLike"}
      title="Flappy Bird Like"
      imagesrc={FlappyBirdLikeLogo}
      gamePagePath="FlappyBirdLikeGamePage">
        </GameCard>,];


    const GameJamGames = [
    <GameCard 
      key={"RenderingRevenge"}
      title="RenderingRevenge"
      imagesrc={RenderingRevengeLogo}
      gamePagePath="RenderingRevengeGamePage">
    </GameCard>,
];

  useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);
  return (

    <SafeAreaView  className="flex-1 relative bg-black border-l-8 border-r-8">
      <View>
        <TitleGoBack 
        key={"Unity Projects"}
        Title="Unity Projects">
      </TitleGoBack>
      </View>

      <View className="flex-row flex-1 space-y-7">
 
      <View className="flex-1 ">
        <GameHorizScrollView key={"DigitalBrossGameAcademyProjects"} title="Digital Bross Game Academy Projects" games={DigitalBrossGames}></GameHorizScrollView>
        <GameHorizScrollView key={"IndividualProjects"} title="Individual Projects" games={SelfDevelopedGames}></GameHorizScrollView>
        <GameHorizScrollView key={"GameJam"} title="Game Jam" games={GameJamGames}></GameHorizScrollView>
      </View>

    </View>
    <View className="flex-wrap bottom-2">
        <MyLinks key={"Links"}></MyLinks>
      </View>
    </SafeAreaView>
  )
}

export default UnityProject