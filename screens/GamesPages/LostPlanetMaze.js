import { View, Text ,SafeAreaView,Image} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import ImageScroll from '../../components/ImageScroll'
import { ScrollView } from 'react-native-gesture-handler'
import {BeginningMatch,JoinLobby,LobbyCreation,
  MultiplayerGame,WaitingRoom,CustomGridDimension,CustomGridDimension2} from '../../assets/index';

const LostPlanetMaze = () => {

  const MultiplayerImage= [ { Photo : BeginningMatch}, { Photo : JoinLobby}, { Photo : LobbyCreation}, { Photo : MultiplayerGame}, { Photo : WaitingRoom}];
  const CustomGridDimensionImages= [ { Photo : CustomGridDimension}, { Photo : CustomGridDimension2}];

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


    <ScrollView>
      <View className="flex-wrap">
      <Text className="text-white">
      23/6/23-9/7/23

      I Developer this project all by myself using some asset Made by carola bonamico. 
This project was a test give by nacon studio Milan some main feature was 

<View className="flex-1">
      <ImageScroll key={"CustomGridDimension"} Title={"CustomGridDimension" } FeatureImages={CustomGridDimensionImages}></ImageScroll>
    </View>

Map genration
Using tilemps and knowing how each room is connected to the other i make a random grid genration with a customizable dimension 

<View className="flex-1">
      <ImageScroll key={"Multiplayer"} Title={"Multiplayer" } FeatureImages={MultiplayerImage}></ImageScroll>
    </View>

Online Multiplayer 
My first ever approach to a multiplayer game. I use Photon api to send events and sync the 2 player position, map, game state and turn. 
To easy tale party in a match there is a lobby and if a lobby is already active the 2 player directly goes into the match. 
You can decide to access into a certain match with a given code or just a random one. 

<View className="flex-1">
      <ImageScroll key={"Multiplayer"} Title={"Multiplayer" } FeatureImages={MultiplayerImage}></ImageScroll>
    </View>

Tunnel 
A tunnel is a room with 2 exit 
One of the feature was a tunnel system where a player goes directly at the room with 3 or more exits. 
With a iterable method called every x seconds the player (with no movements available) goes from every cell of the tunnel and ends its movement when there is a room with at least 3 door

<View className="flex-1">
      <ImageScroll key={"Multiplayer"} Title={"Multiplayer" } FeatureImages={MultiplayerImage}></ImageScroll>
    </View>

Arrow
Arrows follows the same tunnel Logic as player they goes in one direction and disapper of the find a monster or a wall
Each player has 3 arrows and the first one that use all 3 lose the game 

<View className="flex-1">
      <ImageScroll key={"Multiplayer"} Title={"Multiplayer" } FeatureImages={MultiplayerImage}></ImageScroll>
    </View>

Holes and monster preview
Everithing that can kill the player has a preview generated with the map that allows him to see if a movement end near one of them (they can stuck in the same cell) 


<View className="flex-1">
      <ImageScroll key={"Multiplayer"} Title={"Multiplayer" } FeatureImages={MultiplayerImage}></ImageScroll>
    </View>

Fog of war 
During a match the player has to discover the map 
He can see just the path he made 
I did this by using a tilemap and delete the cell the player discover

// link git
      </Text>
     </View>


  

      <View className="flex-wrap">
        <MyLinks key={"Links"}></MyLinks>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LostPlanetMaze