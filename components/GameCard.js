import { View, Text,Image ,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ConventioLutheriLogo, EclipseExodusLogo, FlappyBirdLikeLogo, LetItSlideLogo, LostPlanetMazeLogo, PonganLogo, RenderingRevengeLogo } from '../assets';

const GameCard = ({title,imagesrc,gamePagePath}) => {
  const Navigation=useNavigation();
  return (
    <Pressable className="items-center justify-center" onPress={()=> Navigation.navigate(gamePagePath)}>
        <View className="w-24 h-24 rounded-lg ">
            <Image source={imagesrc} className="h-full w-full"></Image >
        </View>

        <View>
          <Text>{title}</Text>
        </View>
    </Pressable>
  )
}

export default GameCard