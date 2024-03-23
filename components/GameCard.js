import { View, Text,Image ,Pressable,ani} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ConventioLutheriLogo, EclipseExodusLogo, FlappyBirdLikeLogo, LetItSlideLogo, LostPlanetMazeLogo, PonganLogo, RenderingRevengeLogo } from '../assets';
import * as Animatable from 'react-native-animatable';

const GameCard = ({title,imagesrc,gamePagePath}) => {
  const Navigation=useNavigation();
  return (
    <Pressable className="items-center justify-center" onPress={()=> Navigation.navigate(gamePagePath)}>
        <View className="w-24 h-24 rounded-lg ">
        <Animatable.Image style= {{ width: '100%',height: '100%'}} source={imagesrc} className="rounded-lg" animation="fadeIn"></Animatable.Image>
        </View>

        <View>
          <Text>{title}</Text>
        </View>
    </Pressable>
  )
}

export default GameCard