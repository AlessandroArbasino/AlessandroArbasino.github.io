import { View, Text } from 'react-native'
import React from 'react'
import GoBackButton from '../components/GoBackButton';

const TitleGoBack = ({Title}) => {
  return (
    <View className=" flex-1 flex-row ">
      <View>
        <GoBackButton key={"Goback"}></GoBackButton>
      </View>
      <View className=" flex-1 justify-center items-center">
        <Text style={{textAlign: "center"}} className="font-semibold text-xl text-white">{Title}</Text>
      </View>
  </View>
  )
}

export default TitleGoBack