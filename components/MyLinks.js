import { View, Text } from 'react-native'
import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import DownloadButton from '../components/DownloadButton';
import {EuropassCv,LatexCv} from '../assets';

const MyLinks = () => {
  return (
    <View className="flex-1 flex-row space-x-4 right-2 left-2">

      <View className="text-white flex-wrap justify-center">
        <Text className="text-white ">Social Media Accounts :</Text>
      </View>
      <View>
        <SocialIcon url="https://github.com/AlessandroArbasino" ></SocialIcon>
      </View>
      <View>
        <SocialIcon url="https://it.linkedin.com/in/alessandro-arbasino" ></SocialIcon>
      </View>
      <View>
        <SocialIcon url="https://discord.com/users/598926671956934666" ></SocialIcon>
      </View>

      <View className="text-white flex-wrap justify-center">
        <Text className="text-white">Curriculum Vitae :</Text>
      </View>
      <View>
        <DownloadButton  key={"DownloadEuropass"}title={"DownloadEuropassCV"} Buttontext={"Open Europass CV"} DonloadFilePath="https://github.com/AlessandroArbasino/AlessandroArbasino.github.io/blob/main/assets/Files/AlessandroArbasinoCVEuropass.pdf"></DownloadButton>
      </View>

      <View>
        <DownloadButton key={"DownloadLatex"} title={"DownloadLatexCV"}  Buttontext={"Open Latex CV"} DonloadFilePath="https://github.com/AlessandroArbasino/AlessandroArbasino.github.io/blob/main/assets/Files/AlessandroArbasinoCVLatex.pdf"></DownloadButton>
      </View>
    </View>
  )
}

export default MyLinks