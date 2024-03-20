import { View, Text, Pressable,Image,Linking} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import {CSharpLogoSkill, LatexLogoSkill, LaureaImage, TailwindCSSLogoSkill, UnityLogoSkill, UnrealEngineLogoSkill} from '../assets';

const SkillCard = ({title,imagesrc,documentationURL}) => {
  return (
    <Pressable className="items-center justify-center px-1  aspect-square"  onPress={()=>Linking.openURL(documentationURL)}>
        <View className=" w-full h-full rounded-lg ">
            <Image source={imagesrc} style= {{flex:1 ,width: '100%',height: '100%', resizeMode: 'contain'}}></Image >
        </View>
    </Pressable>
  )
}

export default SkillCard