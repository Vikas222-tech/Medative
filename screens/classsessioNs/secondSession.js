import React,{useState} from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const secondSession=({navigation})=>{
    return(
        <View style={styles.mainview}>
            <TouchableOpacity onPress={()=>navigation.navigate('first')}>
            <View style={styles.round}>
            <Image source={require('../../assets/images/lessthan.png')} style={styles.imground} />
             </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>SELECT A FOCUS</Text>
            </View>
            <View style={styles.sessionview}>
                <Text style={styles.sessiontext}>What would you like to focus on?</Text>
            </View>
            <View style={styles.outerview}>
                <Image source={require('../../assets/images/v.png')} resizeMode='center' style={styles.smileimage} />
                <Text style={styles.heavytxt}>Feeling more present</Text>
            </View>
            
            <View style={styles.lightview}>
                <Image source={require('../../assets/images/i.png')} resizeMode='center' style={styles.lightimage} />
                <Text style={styles.lighttxt}>Quieting my mind</Text>
            </View>
            <View style={styles.laneview}>
                <Image source={require('../../assets/images/k.png')} resizeMode='center' style={styles.laneimage} />
                <Text style={styles.lanetxt}>Shifting my perspective</Text>
            </View>
                <View style={styles.atrview}>
                <Image source={require('../../assets/images/s.png')} resizeMode='center' style={styles.atrimage} />
                <Text style={styles.atrtext}>Healing myself</Text>
            </View>
           

            <View style={styles.continueview}>
            <TouchableOpacity onPress={()=>navigation.navigate('third')}>   

                <Text style={styles.continuetext}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
};
const styles=StyleSheet.create({
    mainview:{
        padding:20,
        backgroundColor:'#FFFFFF',
        flex:1
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
        borderWidth:0.4,
        borderColor:'#AAAAAA',
        backgroundColor:'#F5F5F5',
        borderRadius:19.5,
        flexDirection:'row',
        alignItems:'center',
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
    laneview:{
        width:'100%',
        height:39,
        borderWidth:0.4,
        borderColor:'#AAAAAA',
        backgroundColor:'#F5F5F5',
        borderRadius:19.5,
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    laneimage:{
        height:21,
        width:21,
        width:'20%'
    },
    lanetxt:{
        color:'#000000',
        fontSize:12,
        lineHeight:14.76,
        fontFamily:'RigSans-SemiBold',
        width:'80%'
    },
    atrview:{
        width:'100%',
        height:39,
        borderRadius:19.5,
        flexDirection:'row',
        borderWidth:0.4,
        borderColor:'#AAAAAA',
        backgroundColor:'#F5F5F5',     
        alignItems:'center',
        marginTop:20
    },
    atrimage:{
        height:21,
        width:21,
        width:'20%'
    },
    atrtext:{
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
export default secondSession; 