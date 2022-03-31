import React,{useState} from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const firstSession=({navigation})=>{
    return(
        <View style={styles.mainview}>
            <TouchableOpacity onPressOut={()=>navigation.navigate('home')}>
            <View style={styles.round}>
            <Image source={require('../../assets/images/lessthan.png')} style={styles.imground} />
            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>PICK A FEELING</Text>
            </View>
            <View style={styles.sessionview}>
                <Text style={styles.sessiontext}>During this session I want to ...</Text>
            </View>
            <View style={styles.outerview}>
                <Image source={require('../../assets/images/sademoj.png')} resizeMode='center' style={styles.smileimage} />
                <Text style={styles.heavytxt}>Color HEAVY feelings</Text>
            </View>
            <View style={styles.lightview}>
                <Image source={require('../../assets/images/happyemoj.png')} resizeMode='center' style={styles.lightimage} />
                <Text style={styles.lighttxt}>Color LIGHT feelings</Text>
            </View>
           <View style={styles.continueview}>
           <TouchableOpacity onPressOut={()=>navigation.navigate('second')}>

                <Text style={styles.continuetext}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
};
const styles=StyleSheet.create({
    mainview:{
        padding:20,height:'100%'
    },
    imground:{
        height:30,
        width:30,
    },
    cross:{
        // width:13,
        height:18,
        position:'relative',
        bottom:25,
        left:2,
        resizeMode:'center'
    },
    div:{
        alignSelf:'center',
        paddingTop:20,
        marginBottom:"15%"
    },
    createtext:{
        fontSize:24,
        lineHeight:31.8,
        color:'#000000',
    
        fontFamily:'Calder-DarkShadow',
        
        width:'100%',
    },
    sessionview:{

    },
    sessiontext:{
        fontSize:20,
        lineHeight:24.56,
        fontFamily:'RigSans-Regular',
        color:'#000000',
        alignSelf:'center',
        paddingBottom:30,
       
    },
    outerview:{
        borderWidth:0.4,
        borderColor:'#AAAAAA',
        backgroundColor:'#F5F5F5',
        width:'100%',
        height:39,
       borderRadius:19.5,
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    smileimage:{
        height:21,
        width:21,
        width:'20%'
    },
    heavytxt:{
        color:'#000000',
        fontSize:12,
        lineHeight:14.76,
        fontFamily:'RigSans-SemiBold',
        width:'80%'
    },
    lightview:{
        width:'100%',
        height:39,
        backgroundColor:'#F5F5F5',
        borderRadius:19.5,
        flexDirection:'row',
        borderWidth:0.4,
        borderColor:'#AAAAAA',        alignItems:'center',
        marginTop:20
    },
    lightimage:{
        height:21,
        width:21,
        width:'20%'
    },
    lighttxt:{
        color:'#000000',
        fontSize:12,
        lineHeight:14.76,
        fontFamily:'RigSans-SemiBold',
        width:'80%'
    },
    continueview:{
        width:'100%',
      
        backgroundColor:'#000000',
        borderRadius:19.5,
        
       height:39,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        alignSelf:'center',
  bottom:0,
  marginBottom:heightPercentageToDP('1%')
    },
    continuetext:{
        color:'#FFFFFF',
        fontFamily:'RigSans-Semibold'
    }
})
export default firstSession; 