import { View, Text,Pressable } from 'react-native'
import React from 'react'


const DownloadButton = ({DonloadFilePath,Buttontext}) => {
  return (
      <Pressable href={DonloadFilePath}
        download="CVPdf"
        target="_blank"
        rel="noreferred">
            <View className="flex-row h-3 w-10">
                <Text className="text-white">{Buttontext}</Text>
            </View>
      </Pressable>
  )
}

export default DownloadButton