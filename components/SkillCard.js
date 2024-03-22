import { View, Text, Pressable,Image,Linking} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import {CSharpLogoSkill, LatexLogoSkill, LaureaImage, TailwindCSSLogoSkill, UnityLogoSkill, UnrealEngineLogoSkill} from '../assets';

const SkillCard = ({title,imagesrc,documentationURL}) => {
  return (
    <View className="w-32 h-32 flex-col">
    <Pressable className="items-center justify-center px-1  aspect-square"  onPress={()=>Linking.openURL(documentationURL)}>
        <View  className="h-full w-full object-contain rounded-lg">
            <Image source={imagesrc} style= {{flex:1 ,width: '100%',height: '100%', resizeMode: 'contain'}}></Image >
        </View>
    </Pressable>
    </View>
  )
}

export default SkillCard