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


const HomeScreen = () => {
    const Navigation=useNavigation();

useLayoutEffect(()=> {
    Navigation.setOptions({
        headerShown: false,
    });
},[]);

  return (
    <SafeAreaView className="flex-1 relative bg-black">

        
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

if (Platform.OS === 'web') {
            <View className="flex-2"></View>
        }
        
        <View className="flex-1 space-y-5">
            <View className=" flex-1 flex-row flex-wrap">
                {/* presentation view*/}
                <View className="flex-1">
                    {/* preesentaton*/}
                    <View className="space-y-2">
                        {/* preesentaton text view*/}
                        <Text className="text-green-400 font-semibold text-xl">Hi,i'm Alessandro Arbasino</Text>
                        <Text className="text-white">I'm a videogame programmer</Text>
                        <Text className="text-white text-xs">I'm from italy and iì'been start studing at digital bross game academy since 1 year</Text>
                    </View>
                    <View>
                        {/* contact buttons view*/}
                    </View>
                </View>
                
                <View className="flex-1">
                     {/* image*/}
                     <Animatable.Image source={LaureaImage} style= {{flex:1 ,width: '100%',height: '100%', resizeMode: 'contain'}}className="rounded-lg" animation="fadeIn"></Animatable.Image>
                </View>
        </View>

{/* skills*/}
        <View className="flex-1">
             {/* skills title*/}
             <View className="h-16 items-center">
                <Text className="text-white text-2xl font-semibold">Tools and Skills</Text>
             </View>

            {/* skills cards*/}
            <View className="flex-1 bg-white border-l-8 border-r-8 rounded-xl space-y-1">
                <View className="mt-3 px-3 flex-1">
                    <View className="flex-row flex-1">
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
                            </View>
                            <View className="flex-row flex-1">
                            
                            <SkillCard key={"TailwindCSS"}
                                title={"TailwindCSS"} 
                                imagesrc ={TailwindCSSLogoSkill}
                                documentationURL ="https://v2.tailwindcss.com/docs">
                            </SkillCard>

                            <View className="flex-1"></View>
                            <View className="flex-1"></View>
                            <View className="flex-1"></View>
                            </View>
                            </View>
            </View>
        </View>

        <View className="h-10 items-center flex-row">
             {/* cv download*/}
             <DownloadButton  key={"DownloadEuropass"}title="Download europass CV" DonloadFilePath={EuropassCV}></DownloadButton>
             <DownloadButton key={"DownloadLatex"} title="Download Latex CV" DonloadFilePath={EuropassCV}></DownloadButton>
             <Text className="text-white">download CV</Text>
        </View>
        </View>
        if (Platform.OS === 'web') {
            <View className="flex-2">

            </View>
}
</View>
    </SafeAreaView>
  );
};

export default HomeScreen