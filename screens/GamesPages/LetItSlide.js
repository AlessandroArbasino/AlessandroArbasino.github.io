import { View, Text,SafeAreaView,Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import TitleGoBack from '../../components/TitleGoBack'
import { useNavigation } from '@react-navigation/native'
import MyLinks from '../../components/MyLinks'
import {LetItSlideVideo,CustomizeHead,CustomizeShoes,CustomizeSuit,CustomizeSnowBoard,CustomizeCharacterMain,DrawLine,PatternPrevieuw,LetIiSlideHome,DynamicBoostMenu} from '../../assets/index';
import ImageScroll from '../../components/ImageScroll'
import { ScrollView } from 'react-native-gesture-handler'
const LetItSlide = () => {

  const CustomizationImages= [ { Photo : CustomizeCharacterMain}, { Photo : CustomizeHead}, { Photo : CustomizeSuit}, { Photo : CustomizeShoes}, { Photo : CustomizeSnowBoard}];
  
  const PatternImages= [ { Photo : DrawLine}, { Photo : PatternPrevieuw}];

  const UIImages= [ { Photo : LetIiSlideHome}, { Photo : DynamicBoostMenu}];
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

<ScrollView>

<View className="items-center flex-wrap" >
      <video  width={Dimensions.get("window").width/2} height={(Dimensions.get("window").width * 2)/6} controls id="VideoGamePlay"  autoPlay></video>
      </View>

     <View className="flex-wrap flex-1">
     <Text className="text-white text-center">
      27/4/2023-11/7/23

      Third and final project of the first year of digital  bros. The concept was to create a sport online mobile game and outlet idea was to make a sort of subway surfer with skateboard.

<View className="flex-1">
      <ImageScroll key={"UI"} Title={"Dynamic UI" } FeatureImages={UIImages}></ImageScroll>
</View>
UI 
We had an espandibile idea for menus and sub menus and was great. Here i extend the main pattern for all the menus and did all layouts. 
I know that was to strict to maintain proportion on every device so it was hard to met the concept artist requirements. 

<View className="flex-1">
      <ImageScroll key={"PopUp"} Title={"Pop up System" } FeatureImages={CustomizationImages}></ImageScroll>
</View>

Pop up system 
The pop up was the same with 2 variation depending on how menu buttons it has. 
Every time a pop up opens has a custom title and description and also one or 2 different delegates for the buttons onclick methods 

<View className="flex-1">
      <ImageScroll key={"Customization"} Title={"Customization" } FeatureImages={CustomizationImages}></ImageScroll>
</View>

Customization system 
TODO

<View className="flex-1">
      <ImageScroll key={"Pattern"} Title={"Pattern system" } FeatureImages={PatternImages}></ImageScroll>
</View>

Pattern drawing system
Using a grid i create a UI mesh affinché tringles of a customizable thickness and adding a new tringle every time the line goes on a grid element. 
The preview pattern fallows the same logics but the grid elements (named using a Number) are connected after a random pattern was chosen among the one written in a json file. 
In this way they was to easily customizable and saved


      </Text>
     </View>

      <View className="flex-wrap ">
        <MyLinks key={"Links"}></MyLinks>
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default LetItSlide