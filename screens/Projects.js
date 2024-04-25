//rnfe
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity ,Image, ScrollView, FlatList,Linking,Pressable} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Platform } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ProblemSolvingLogo, TeamWorkingLogo, UnityLogoProjects, UnrealEngineLogoProjects } from '../assets';
import * as Animatable from 'react-native-animatable';
import {CSharpLogoSkill, LatexLogoSkill, LaureaImage, TailwindCSSLogoSkill, UnityLogoSkill, UnrealEngineLogoSkill,PureProgrammingLanguageProjects} from '../assets';
import SocialSkillCard from '../components/SocialSkillCard';
import TitleGoBack from '../components/TitleGoBack';
import EngineProjects from '../components/EngineProjects';
import MyLinks from '../components/MyLinks';

const Projects = () => {
  const Navigation=useNavigation();

  useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);


  return (
    <SafeAreaView  className="flex-1 relative bg-black border-l-8 border-r-8 border-b-8 space-y-3">
 
      <View>
        <TitleGoBack 
        key={"SelectedProjects"}
        Title="Selected Projects">
      </TitleGoBack>
      </View>
 
<View className="flex-1 flex-col space-y-3 ">
    <View className="flex-1 flex-row border-l-8 border-r-8 space-y-3">
         <EngineProjects  key={"UnrealEngine"}
            title={"Unreal"} 
            imagesrc ={UnrealEngineLogoProjects} 
            pageToOpen ={"UnralEngineProjects"}>
          </EngineProjects>
          <EngineProjects  key={"UnityProject"}
            title={"Unity"} 
            imagesrc ={UnityLogoProjects} 
            pageToOpen ={"UnityProjects"}>
          </EngineProjects>
          <EngineProjects  key={"PureLanguageProjet"}
            title={"PureLanguage"} 
            imagesrc ={PureProgrammingLanguageProjects} 
            pageToOpen ={"PureProgrammingLanguageProjects"}>
          </EngineProjects>
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

      <View>
        <MyLinks key={"Links"}></MyLinks>
      </View>
    </SafeAreaView>

  )
}

export default Projects