import { View, Text,ScrollView,Dimensions,Image } from 'react-native'
import {  useRef } from "react";
import React from 'react'
import Carousel from "react-native-reanimated-carousel";

export default function ImageScroll({Title,FeatureImages}) {

		const RenderItem = ({ item }) => {
      return (
        <View className="items-center justify-center ">
          <Image source={item.Photo} className="w-80 h-96"></Image>
        </View>
      );
    };

  return (
    <View className="flex-1 items-center">
      <h2 className="text-white text-center">{Title}</h2>
    
      <View className="flex-1 items-center justify-center">
      <Carousel
					data={FeatureImages}
					mode={"parallax"}
          ref={useRef(null)}
					renderItem={RenderItem}
					loop
					width={Dimensions.get("window").width}
					height={Dimensions.get("window").height / 3.5}
					autoPlay={true}
					scrollAnimationDuration={2500}
					panGestureHandlerProps={{
						activeOffsetX: [-10, 10],
					}}
				/>
     </View>
    </View>

  
  )
};
