import { View, Text,Pressable,Linking } from 'react-native'
import React from 'react'
import cv from "../assets/Files/AlessandroArbasinoCVEuropass.pdf"

const DownloadButton = ({DonloadFilePath,Buttontext}) => {
  return (
    <View className="flex-1 bg-white rounded-lg">
     <Pressable className="flex-1 justify-center" onPress={()=> Linking.openURL(src="/AlessandroArbasino.github.io/assets/Files/AlessandroArbasinoCVEuropass.pdf") }>
        <Text  style={{textAlignVertical: 'center'}}  className="text-black">{Buttontext}</Text>
     </Pressable>
    </View>
  )
}

export default DownloadButton