import { View,
  TouchableOpacity,
  Text, 
  Image,
  ImageBackground} from "react-native";

const App = ()=>{
  const handelPress = ()=>{
    console.log("111")
    alert("test")
  }
  return (
    <View style={{overflow:"scroll"}}>
      <Text>TouchableOpacity组件</Text>
      <TouchableOpacity onPress={handelPress}>
        <Text>hello world</Text>
      </TouchableOpacity>
      <View>
        <Text>Image组件</Text>
        <Image  source={require('./images/test.png')}/>
      </View>
      <View>
        <Text>背景图片</Text>
        <ImageBackground 
          source={require('./images/test.png')} 
          style={{width:"100%",height:400}}/> 
      </View>
    </View>
    
  )
}
export default App