import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { heightPercentageToDP } from '../screens/utility';

const ripScreen=({navigation})=>{
    const [ripImage,setRipImage]=useState(false);


    useEffect(()=>{
        console.log("rim imag status....");
    },[ripImage])
    
    return(
        <ScrollView>
        <View style={{padding:20 ,backgroundColor:'#FFFFFF',flex:1}}>
           
            <TouchableOpacity onPress={()=>navigation.navigate('clearing')}>
             <View style={styles.round}>
             <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
            
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>RIP OR SAVE?</Text>
            </View>
           
            <View style={styles.stanzaview}>
                <Text style={styles.stanzatext}>Would you like to rip up your coloring (delete it) 
                or save it? Each drawing holds the feeling(s) you colored.
                 If you colored heavy feelings, it’s recommended you rip the coloring up
                  in order to fully release all of the heaviness.
</Text>
            </View>
            <View style={{alignSelf:'center',marginTop:heightPercentageToDP('10%')}}>
                {ripImage?<Image source={require('../assets/images/birdb.png') } resizeMode='contain' style={{height:300,width:300}}></Image>:
                <Image source={require('../assets/images/ripimage.png') } resizeMode='contain' style={{height:300,width:300}}></Image>}
            </View>
        
            
            <TouchableOpacity onPress={()=>setRipImage(!ripImage)}>
            <View style={styles.ripview}>
                <Text style={styles.riptext}>RIP IT UP</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('guided')}>
            <View style={styles.saceview}>
                <Text style={styles.savetext}>SAVE IT</Text>
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};
const styles=StyleSheet.create({
    secondryview:{
        flexDirection:'row',
        width:'75%',
        justifyContent:'space-between'
    },
    round:{
        width:'100%'
    },
    imground:{
        height:30,
        width:30,
    },
    cross:{
       height:18,
        position:'relative',
        bottom:25,
        left:2,
        resizeMode:'center'
    },
    stanzaview:{
        // alignSelf:'center',
        paddingTop:20,
        width:'100%'
    },
    stanzatext:{
    fontSize:14,
    lineHeight:19,
    color:'#000000',
    fontFamily:'RigSans-Regular',
    width:'80%',
    textAlign:'center',
    alignSelf:'center'
    },
    createtext:{
        fontSize:24,
        lineHeight:31.8,
        color:'#000000',
    
        fontFamily:'Calder-DarkShadow',
        
        width:'100%',
        textAlign:'center'
     },
     ripview:{
        width:'100%',
          
        backgroundColor:'#00CB20',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        
        marginTop:heightPercentageToDP('15%'),
        marginBottom:heightPercentageToDP('3%')
     },
     riptext:{
        color:'#FFFFFF',
            fontFamily:'RigSans-Semibold',
            fontSize:15,
            lineHeight:18.45
     },
     saceview:{
        width:'100%',
          
        backgroundColor:'#000000',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
     },
     savetext:{
        color:'#FFFFFF',
            fontFamily:'RigSans-Semibold',
            fontSize:15,
            lineHeight:18.45
     }
})
export default ripScreen;

