import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import GameCard from './GameCard'

const GameHorizScrollView = ({title,games}) => {

    const result = [];

    games.forEach(CurrentGamecard => {
                result.push( CurrentGamecard);
            })

  return (
    <View className="flex-wrap">
    <View>
        <Text className="text-white font-semibold">{title}</Text>
    </View>

        <ScrollView className="px-3 py-3 bg-white" horizontal={true}>
         {result}
        </ScrollView>
    </View>
  )
}

export default GameHorizScrollView