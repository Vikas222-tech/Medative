import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ImageBackground,alert} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../utility';

const interpreTation=({navigation})=>{
    return(
        <View style={{padding:20}}>
             <View style={styles.secondryview}>
                <TouchableOpacity onPress={()=>navigation.navigate('fifth')}>
            
            <View style={styles.round}>
            <Image source={require('../../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            
            </TouchableOpacity>
            <View style={{}}>
            <Text style={styles.createtext}>INTERPRETATION</Text>
            </View>
            </View>
        <View style={{ borderWidth:2,height:308,width:251,borderColor:'#AAAAAA',borderRadius:10,alignSelf:'center',marginTop:heightPercentageToDP('8%'),}}>
            <Image source={require('../../assets/images/ebird.png')} style={{height:166.13,width:189.98
             ,marginTop:heightPercentageToDP('8%'),alignSelf:'center'}}/>
        </View>
            
            <View style={{borderWidth:1,borderRadius:19,backgroundColor:'#000000',height:39,marginTop:heightPercentageToDP('29%'),
            marginBottom:heightPercentageToDP('10%'),justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('sixth')}>

                <Text style={{fontSize:15,lineHeight:18.45,color:'#FFFFFF',fontFamily:'RigSans-Bold',alignSelf:'center'}}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    mainview:{
        padding:20
    },
    secondryview:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between'
    },
    round:{
        width:'20%'
    },
    imground:{
        height:30,
        width:30,
    },
   
    createtext:{
        fontSize:24,
        lineHeight:31.8,
        color:'#000000',
    
        fontFamily:'Calder-DarkShadow',
        
        width:'100%',
        textAlign:'center'
     },
})
export default interpreTation;