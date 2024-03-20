import { View, Text,Image } from 'react-native'
import React from 'react'
import { ProblemSolvingLogo, TeamWorkingLogo } from '../assets';

const SocialSkillCard = ({title,imagesrc,description}) => {
  return (
    <View className="w-32 h-32 flex-col">

        <View className="w-24 h-24 rounded-full ">
            <Image source={imagesrc} className="h-full w-full object-contain bg-black rounded-full "></Image >
        </View>

        <View className="flex-auto">
            <Text className="text-black">{description}</Text>
        </View>

    </View>
  )
}

export default SocialSkillCard