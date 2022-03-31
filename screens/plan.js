import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from './utility';
const plan = ({ navigation }) => {

 
    return (
    <View style={styles.outerview}>
            <View style={styles.round}>
                <Image source={require('../assets/images/cancl.png')} style={styles.imground} />
            </View>
           
            <View style={styles.div}>
                <Text style={styles.createtext}>SELECT YOUR PLAN</Text>
            </View>
            
           <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{paddingTop:heightPercentageToDP('7.5%')}}>
                    <Text style={{fontSize:24,lineHeight:31.8,color:'#000000',fontFamily:'Calder-DarkShadow',paddingBottom:heightPercentageToDP('3%'),textAlign:"center",paddingTop:heightPercentageToDP('1.5%')}}>FREE</Text>
                    <Text style={{fontSize:18,lineHeight:22.14,fontFamily:'RigSans-Extrabold',
                color:'#000000',textAlign:'center',paddingBottom:heightPercentageToDP('3%'),bottom:10}}>$0 per year</Text>
                    <Text style={{fontSize:12,lineHeight:14.76,fontFamily:'RigSans-Bold',color:'#000000',width:'100%',textAlign:'center',paddingBottom:heightPercentageToDP('15%')}}>Monthly Coloring{'\n'} Sessions:{'\n'}
                    <Text style={{}}>1</Text></Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('triala')}>
                    <View style={{}}>
                        <Text style={{fontSize:10,lineHeight:9.84,color:'#888888',fontFamily:'RigSans-SemiBold',textDecorationLine:'underline'}}>CONTINUE WITH FREE ACCOUNT</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{position:'relative',right:heightPercentageToDP('1%')}}>
                    <Image source={require('../assets/images/divideline.png')} style={{height:heightPercentageToDP('50%')}} />
                </View>
                 <View style={{paddingTop:heightPercentageToDP('2%')}}>
                     <View style={{height:22,width:107,justifyContent:'center',
                    backgroundColor:'#666666'}}>
                    <Text style={{fontSize:12,lineHeight:14.74,fontFamily:'RigSans-Bold',color:'#FFFFFF',alignSelf:'center'}}>Most Helpful</Text>
                    </View>
                    
                        <Text style={{fontSize:24,lineHeight:31.8,color:'#000000',fontFamily:'Calder-DarkShadow',paddingBottom:heightPercentageToDP('2%'),paddingTop:heightPercentageToDP('4%'),}}>PREMIUM</Text>
                    <Text style={{fontSize:18,lineHeight:22.14,fontFamily:'RigSans-Extrabold',
                color:'#000000',paddingBottom:heightPercentageToDP('6%')}}>$40 per year</Text>
                <View>
                  <Text style={{textAlign:'center',fontSize:12,lineHeight:14.76,fontFamily:'RigSans-Bold'}}>Monthly Coloring</Text>
                  <Text style={{textAlign:
                'center',fontSize:12,lineHeight:14.76,fontFamily:'RigSans-Bold'}}>Sessions</Text>
                  <Text style={{textAlign:
                'center',fontSize:12,lineHeight:14.74,fontFamily:'RigSans-Regular',paddingBottom:heightPercentageToDP('2%')}}>Unlimited</Text>
                 </View>
                <View>
                    <Text  style={{textAlign:
                'center',fontSize:12,lineHeight:14.74,fontFamily:'RigSans-Regular'}}>✔️ Meditative Coloring</Text>
                    <Text style={{textAlign:
                'center',fontSize:12,lineHeight:14.74,fontFamily:'RigSans-Regular',paddingBottom:heightPercentageToDP('2%')}}>eBook</Text>
                </View>
                <View>
                    <Text style={{textAlign:
                'center',fontSize:12,lineHeight:14.74,fontFamily:'RigSans-Regular'}}>✔️ Breathing Exercises</Text>
                </View>
                </View>
               
            </View> 
           
              <View style={{height:39,backgroundColor:'rgba(0, 0, 0, 1)',borderRadius:19.5,width:'100%',justifyContent:'center',position:'absolute',bottom:0,alignSelf:'center',marginBottom:heightPercentageToDP('1%')}}>
              <TouchableOpacity onPress={()=>navigation.navigate('home')}>
               <Text style={{fontFamily:'RigSans-SemiBold',fontSize:15,lineHeight:18.45,color:'rgba(255, 255, 255, 1)',textAlign:'center'}}>SET UP PREMIUM PAYMENT</Text>
               </TouchableOpacity>
             </View>
           
    </View>



    )
};
const styles = StyleSheet.create({
     round: {
        width: '18%'
    },
    imground: {
        height: 30,
        width: 30,
    },
    outerview:{
        padding:20,
        backgroundColor:'#FFFFFF',
        flex:1,
       
    },
    div:{
        alignSelf:'center',
        paddingTop:20,
        marginBottom:"13%",
    },
    createtext: {
        fontSize:24,
        lineHeight:30.83,
        color:'#000000',
    
        fontFamily:'Calder-DarkShadow',
        width:'100%',
    },
})
export default plan;



