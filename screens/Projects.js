//rnfe
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity ,Image, ScrollView, FlatList,Linking,Pressable} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Platform } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ProblemSolvingLogo, TeamWorkingLogo, UnityLogoProjects, UnrealEngineLogoProjects } from '../assets';
import * as Animatable from 'react-native-animatable';
import {CSharpLogoSkill, LatexLogoSkill, LaureaImage, TailwindCSSLogoSkill, UnityLogoSkill, UnrealEngineLogoSkill} from '../assets';
import SocialSkillCard from '../components/SocialSkillCard';
import TitleGoBack from '../components/TitleGoBack';

const Projects = () => {
  const Navigation=useNavigation();

  useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);


  return (
    <SafeAreaView  className="flex-1 relative bg-black border-l-8 border-r-8">
 
      <View>
        <TitleGoBack 
        key={"SelectedProjects"}
        Title="Selected Projects">
      </TitleGoBack>
      </View>
 
<View className="flex-1 flex-row">

if (Platform.OS === 'web') {
            <View className="flex-2"></View>
        }
<View className="flex-1 space-y-3">
         {/* unreal engine projects*/}
        <View className="rounded-lg flex-1 border-l-8 border-r-8">
          <Pressable className="flex-1"onPress={()=> Navigation.navigate("UnralEngineProjects")}>
              <Animatable.Image style= {{flex:1 ,width: undefined,height: '100%', resizeMode:'stretch'}} source={UnrealEngineLogoProjects} className="rounded-lg" animation="fadeIn"></Animatable.Image>
          </Pressable>
        </View>
        
        <View className="rounded-3xl" style={{alignItems : 'baseline'}}>
          <Pressable className="bg-green-400 rounded-lg px-3" onPress={()=> Navigation.navigate("UnralEngineProjects")}>
          <Text className="text-white font-semibold">For more information</Text>
          </Pressable>
        </View>
 {/* unity projects*/}
        <View className="rounded-lg flex-1 border-l-8 border-r-8">
          <Pressable  className="flex-1"onPress={()=> Navigation.navigate("UnityProjects")}>
              <Animatable.Image style= {{flex:1 ,width: undefined,height: '100%', resizeMode:'stretch'}} source={UnityLogoProjects} className=" rounded-lg" animation="fadeIn"></Animatable.Image>
          </Pressable>
        </View>

        <View className="rounded-3xl" style={{alignItems : 'baseline'}}>
          <Pressable  className="bg-green-400 rounded-lg px-3" onPress={()=> Navigation.navigate("UnityProjects")}>
             <Text className=" text-white font-semibold">For more information</Text>
          </Pressable>
        </View>
        <View className="bg-white rounded-lg">

          <View className="flex-row flex-wrap">
            <View className="flex-1 py-3">
              <Text className=" px-2 text-lg">Interested in working with me</Text>
            </View>

            <View className="flex-wrap py-2 px-2">
              <Pressable className=" bg-green-400 rounded-lg flex-1" onPress={()=> Linking.openURL('mailto:alessandroarbasino99@gmail.com')}>
                <Text className="text-center px-3" style={{textAlign: "center"}}>Email me</Text>
              </Pressable>
            </View>

          </View>
 
      </View>

      <View className="items-center">
        <Text className="text-white text-xl">Why hire me ?</Text>
      </View>

      <View className=" flex-wrap bg-white flex-row px-4 py-3 rounded-lg" >

        <SocialSkillCard key={"ProblemSolving"}
          title={"ProblemSolving"} 
          imagesrc ={ProblemSolvingLogo} 
          description ={"Problem solving"}>
        </SocialSkillCard>

        <SocialSkillCard key={"TeamWorking"}
          title={"TeamWorking"} 
          imagesrc ={TeamWorkingLogo} 
          description ={"Team Working"}>
        </SocialSkillCard>
      </View>

      
      </View>
      if (Platform.OS === 'web') {
            <View className="flex-2"></View>
        }
      </View>
    </SafeAreaView>

  )
}

export default Projects