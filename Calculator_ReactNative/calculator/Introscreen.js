import React from 'react'
import { View,StyleSheet,Image } from 'react-native'
import logo from '/home/shree/REACT NATIVE/calculator/calculator/assets/balance-sheet.png'
function Introscreen() {
  return (
    <View style={style.container}>
        <View style={style.inner}>
            <Image source={logo} style={style.inner_img}></Image>
        </View>

    </View>
  )
}

const style=StyleSheet.create({
    container:
    {
        display:'flex',
        height:'100%',
        backgroundColor:'#FF5757',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',

    },
    inner:
    {
     width:100,
     height:100, 
    },
    inner_img:
{
    height:100,
    width:100
}
})

export default Introscreen
