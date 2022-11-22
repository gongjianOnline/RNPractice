import {View,Text,TouchableOpacity} from "react-native"
import {useState,useEffect} from "react"
import axios from "axios"
const App = ()=>{
  const [count,setCount] = useState(0)
  const handelPress = ()=>{
    console.log("1111")
    setCount(count+1)
  }
  useEffect(()=>{
    console.log("1111")
    // axios("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata").then((res)=>{
    //   console.log("res",data)
    // })
  },[])
  return (
    <View>
      <Text>事件</Text>
      <TouchableOpacity
        style={{backgroundColor:"red"}}
        onPress={()=>handelPress()}>
        <Text style={{fontSize:18,fontWeight:"700",color:"#fff"}}>count++</Text>
        <Text>{count}</Text>
      </TouchableOpacity>
    </View>
  )
}
export  default App