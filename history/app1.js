import { transform } from "@babel/core"
import React from "react"
import { View,Text,Dimensions } from "react-native"
const screenWidth = Math.round(Dimensions.get("window").width)
const screenHeight = Math.round(Dimensions.get("window").height)
console.log("当前屏幕设备的宽高",screenWidth,screenHeight)

const Index = ()=>{
  return (
    <View style={{
      backgroundColor:'red',
      borderColor:"#000",
      borderWidth:1,
      borderStyle:"solid",
      flexDirection:"row",
      width:"100%", 
      // transform:[{scale:2}]
      }}>
      <Text>JSX hello world</Text>
      <Text>JSX hello world 111 </Text>
    </View>
  )
}
export default Index