import { View, Text } from 'react-native'
import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import DownloadButton from '../components/DownloadButton';
import {EuropassCv,LatexCv} from '../assets';

const MyLinks = () => {
  return (
    <View className=" flex-row space-x-4 right-2 left-2">
      <View>
        <SocialIcon url="https://github.com/AlessandroArbasino" ></SocialIcon>
      </View>
      <View>
        <SocialIcon url="https://it.linkedin.com/in/alessandro-arbasino" ></SocialIcon>
      </View>

      <View>
        <DownloadButton  key={"DownloadEuropass"}title={"DownloadEuropassCV"} Buttontext={"Open Europass CV"} DonloadFilePath="../assets/Files/AlessandroArbasinoCVEuropass.pdf"></DownloadButton>
      </View>

      <View>
        <DownloadButton key={"DownloadLatex"} title={"DownloadLatexCV"}  Buttontext={"Open Latex CV"} DonloadFilePath="../assets/Files/AlessandroArbasinoCVLatex.pdf"></DownloadButton>
      </View>
    </View>
  )
}

export default MyLinks