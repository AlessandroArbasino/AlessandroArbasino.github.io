import { View, Text ,Pressable,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

const EngineProjects = ({title,imagesrc,pageToOpen}) => {
    const Navigation=useNavigation();
  return (
    <View className="rounded-lg flex-1 border-l-8 border-r-8 space-y-4">
       <View className="rounded-lg flex-1">
          <Pressable className="flex-1"onPress={()=> Navigation.navigate(pageToOpen)}>
              <Animatable.Image style= {{ width: '100%',height: '100%'}} source={imagesrc} className="rounded-lg" animation="fadeIn"></Animatable.Image>
          </Pressable>
        </View>
        
        <View className="rounded-3xl" style={{alignItems : 'baseline'}}>
          <Pressable className="bg-green-400 rounded-lg px-3" onPress={()=> Navigation.navigate("UnralEngineProjects")}>
          <Text className="text-white font-semibold">For more information</Text>
          </Pressable>
        </View>
    </View>
  )
}

export default EngineProjects