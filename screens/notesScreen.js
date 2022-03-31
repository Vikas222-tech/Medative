import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP } from '../screens/utility';
const notesScreen=({navigation})=>{
    return(
        <View style={{padding:20 ,flex:1}}>
            <TouchableOpacity onPress={()=>navigation.navigate('clearing')}>
             <View style={styles.round}>
             <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
            
            <View style={{width:'100%',paddingBottom:heightPercentageToDP('2%')}}>
            <Text style={styles.createtext}>SESSION NOTES</Text>
            </View>
            <View>
                <Text style={{fontSize:14,lineHeight:17.19,fontFamily:'RigSans-Regular'
            ,color:'#000000',textAlign:'center'}}>lorem ipsom</Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.btext}>B</Text>
                <Image source={require('../assets/images/ahlh.png')} style={styles.img}/>
                <Text style={styles.atext}>Aa</Text>
            </View>
            </View>
    )
};                      
const styles=StyleSheet.create({
    
    round:{
        width:'100%'
    },
    border:{
        height:140,
        width:40,
        alignItems:'center',
        justifyContent:'center',
        
        backgroundColor:'rgba(0, 0, 0, 0.1)',
       justifyContent:'center',
       position:'relative',
       marginLeft:widthPercentageToDP('83%'),
        top:heightPercentageToDP('25%')
    },
    btext:{
        color:'#000000',
        fontSize:20,
        lineHeight:22.5,
        fontFamily:'RigSans-Bold',
        marginBottom:4,
        marginTop:8
     
    },
  
    atext:{
        color:'#000000',
        marginBottom:20,
        fontFamily:'RigSans-Semibold',
        marginBottom:8,
        fontSize:15,
        lineHeight:18.45,
        color:'#000000',
    },
    img:{
        height:12,
        width:18,
        marginBottom:25,
        marginTop:25
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
export default notesScreen;

