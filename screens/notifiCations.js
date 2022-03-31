import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { heightPercentageToDP } from '../screens/utility';
const notifiCations=({navigation})=>{
    return(

        <View style={{padding:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
             <View style={styles.round}>
             <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
            
            <View style={{width:'100%'}}>
            <Text style={styles.createtext}>Notifications</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:heightPercentageToDP('5%'),marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/bstar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/xcancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/bstar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/xcancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/bstar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/xcancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,marginBottom:20}} >
            <View style={{width:'9%',position:'relative',top:5}}>
                <Image source={require('../assets/images/bstar.png')} style={styles.image} />
             </View>  
             
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
                    Lorem ipsum dolor sit amet, conse.
                 </Text>
              
                 <View style={{width:'10%',position:'relative',top:12,right:'5%'}}>
                 <Image source={require('../assets/images/xcancel.png')}  style={styles.image2}/>
                 </View>
            </View>
            <TouchableOpacity>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CLEAR ALL</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
};
const styles=StyleSheet.create({
    secondryview:{
        flexDirection:'row',
        width:'75%',
        justifyContent:'space-between'
    },
    round:{
        width:'100%',
        
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

    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#000000',
    
        fontFamily:'RigSolid-BoldFill',
        
        width:'100%',
        textAlign:'center'
     },
     continueview:{
        width:'100%',
          
        backgroundColor:'#000000',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        marginTop:heightPercentageToDP('33%')
        ,
    
    },
    continuetext:{
     color:'#FFFFFF',
            fontFamily:'RigSans-Semibold',
            fontSize:15,
            lineHeight:18.45,
            
    },
     image:{
        height:10,
        width:10,
     },
     text:{
        fontSize:14,
        lineHeight:17.19,
        color:'#000000',
        width:'85%'
     },
     image2:{
        height:10,
        width:10,
     }
})
export default notifiCations;