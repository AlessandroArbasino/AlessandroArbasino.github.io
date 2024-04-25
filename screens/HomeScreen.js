import { View, Text, Pressable ,Image, ScrollView, FlatList} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import {CSharpLogoSkill, LatexLogoSkill, LaureaImage, TailwindCSSLogoSkill, UnityLogoSkill, UnrealEngineLogoSkill} from '../assets';
import SkillCard from '../components/SkillCard';
import DownloadButton from '../components/DownloadButton';
import EuropassCV from '../assets/Files/AlessandroArbasinoCVEuropass.pdf'
import { Platform } from 'react-native';
import MyLinks from '../components/MyLinks';


const HomeScreen = () => {
    const Navigation=useNavigation();

useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);

  return (
    <SafeAreaView className="flex-1 relative bg-black space-y-3">

        
        <View className="px-6 bg-white h-16 ">

            <View className="flex-1">
                <View className="flex-row flex-1 space-x-2" >
                    <View className="flex-1 items-start justify-center"> 
                        <Text className="text-xl font-semibold">Arbasino</Text>
                    </View>

                        <View className=" flex-row space-x-2">
                            <Animatable.View animation="pulse" className="flex-wrap justify-center">
                                <Pressable onPress={()=> Navigation.navigate("HomeScreen")}>
                                    <Text className="text-xl font-semibold">Home</Text>
                                </Pressable>
                            </Animatable.View>
                            
                            <Animatable.View animation="pulse" className="flex-wrap  justify-center">
                                <Pressable onPress={()=> Navigation.navigate("Projects")}>
                                    <Text className="text-xl font-semibold justify-center">Projects</Text>
                                </Pressable>
                            </Animatable.View>
                        </View>
                    </View>
                </View>
            </View>

<View className="flex-1 flex-row space-y-5">

        <View className="flex-1 space-y-5">
            <View className=" flex-1 flex-row flex-wrap">
                <View className="flex-1">
                    <View className="space-y-2">
                        <Text className="text-green-400 font-semibold text-xl">Hi,i'm Alessandro Arbasino</Text>
                        <Text className="text-white">I'm a junior videogame programmer interested in making UI</Text>
                        <Text className="text-white text-xs">I'm from italy and i'll been start studing at digital bross game academy since 1 year
                        I love making games and see every aspect of a game. For this reason i want to make UI </Text>
                    </View>
                    <View>
                    </View>
                </View>
                
                <View className="flex-1">
                     <Animatable.Image source={LaureaImage} style= {{flex:1 ,width: '100%',height: '100%', resizeMode: 'contain'}}className="rounded-lg" animation="fadeIn"></Animatable.Image>
                </View>
        </View>

        <View className="flex-1">
             <View className="h-16 items-center">
                <Text className="text-white text-2xl font-semibold">Tools and Skills</Text>
             </View>

            <View className="flex-1 bg-white border-l-8 border-r-8 rounded-xl space-y-1 justify-items-center">
            <View className=" flex-wrap bg-white flex-row px-4 py-3 rounded-lg" >
                
                            <SkillCard key={"Unity"}
                                title={"Unity"} 
                                imagesrc ={UnityLogoSkill}
                                documentationURL ="https://docs.unity.com/">
                            </SkillCard>

                            <SkillCard key={"Unreal engine"}
                                title={"Unreal engine"} 
                                imagesrc ={UnrealEngineLogoSkill}
                                documentationURL ="https://docs.unrealengine.com/5.3/en-US/">
                            </SkillCard>
                    
                            <SkillCard key={"C#"}
                                title={"C#"} 
                                imagesrc ={CSharpLogoSkill}
                                documentationURL ="https://learn.microsoft.com/it-it/dotnet/csharp/">
                            </SkillCard>

                            <SkillCard key={"Latex"}
                                title={"Latex"} 
                                imagesrc ={LatexLogoSkill}
                                documentationURL ="https://www.latex-project.org/help/documentation/">
                            </SkillCard>
                        
                    
                            
                            <SkillCard key={"TailwindCSS"}
                                title={"TailwindCSS"} 
                                imagesrc ={TailwindCSSLogoSkill}
                                documentationURL ="https://v2.tailwindcss.com/docs">
                            </SkillCard>
                            </View>
            </View>
        </View>
<View>
    <MyLinks key={"Links"}></MyLinks>
</View>
        </View>
</View>
    </SafeAreaView>
  );
};

export default HomeScreen