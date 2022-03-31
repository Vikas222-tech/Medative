import React from 'react';
import {View,Text,ImageBackground,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from './utility';

const guidedScreen=({navigation})=>{
   
    return(
        <View style={{padding:20 ,flex:1}}>
       
            <TouchableOpacity onPress={()=>navigation.navigate('rip')}>
             <View style={styles.round}>
             <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
       
            
            <View style={{width:'100%',paddingTop:heightPercentageToDP('3%'),paddingBottom:heightPercentageToDP('3%')}}>
            <Text style={styles.createtext}>GUIDED MEDITATION</Text>
            </View>
           
           <View>
               <Text style={{fontFamily:"RigSans-Regular",fontSize:14,lineHeight:19,color:'#000000',width:'80%',textAlign:'center',alignSelf:'center'}}>Listen to this meditation to help your mind, heart, and gut integrate with the work you have done during your coloring session.</Text>
           </View>
        
      
        <TouchableOpacity onPress={()=>navigation.navigate('note')}>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        
       
       </View>
    )
};
const styles=StyleSheet.create({

secondryview:{
    flexDirection:'row',
    width:'90%',
    justifyContent:'space-between'
},
play:{
height:34,
width:34
},
round:{
    width:'80%'
},

createtext:{
    width:'100%',
    fontSize:24,
    lineHeight:31.8,
    color:'#000000',
    fontFamily:'Calder-DarkShadow',
    textAlign:'center'
 },
 continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    height:39,
     alignItems:'center',
    justifyContent:'center',
   marginTop:heightPercentageToDP('50%')
    },
continuetext:{
 color:'#FFFFFF',
        fontFamily:'RigSans-Semibold',
        fontSize:15,
        lineHeight:18.45

},
imground:{
    height:30,
    width:30,
},





})
export default guidedScreen;