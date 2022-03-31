import React, { useEffect, useState } from 'react';
import {View,Image, StyleSheet,Text} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from './utility';
import Loader from "react-native-three-dots-loader"
const splashScreen =({navigation})=>{
  const [ visible, Setvisible ] = useState('') 
  useEffect(()=>{
     timeOutHandle=setTimeout(()=>{
       nextScreen()
     },2000)
  },[]);
  const nextScreen=()=>{
    navigation.navigate('onboarding')
  }
  return(
    <View style={styles.container}>
      <View style={{}}>
       <Text style={styles.txt1}>MEDITATIVE</Text>
      <Text style={styles.txt2}>COLORING</Text>
      </View>
      <View style={{position:'absolute',bottom:0,marginBottom:heightPercentageToDP('10%'),
    marginBottom:heightPercentageToDP('10%')}}>
    
       <Loader />
       
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
  },
  txt1:{
    fontSize:43.2,
    lineHeight:57.24,
    color:'#000000',
 
    fontFamily:'Calder-DarkShadow'
    
  },
  txt2:{
    fontSize:50.4,
    lineHeight:66.78,
    color:'#000000',
    fontFamily:'Calder-DarkShadow'
  }
  
})
export default splashScreen;