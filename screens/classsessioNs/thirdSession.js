import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP } from '../utility';
const thirdSession=({navigation})=>{
    return(
        <ScrollView>
        <View style={styles.outerview}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
            <View style={styles.round}>
            <Image source={require('../../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>TAKE A BREATH</Text>
            </View>
            <View style={styles.sessionview}>
                <Text style={styles.sessiontext}>Before you color, take a moment to{'\n'} activate your</Text>
                <View style={{width:'20%',alignSelf:'center',position:'absolute',
                  left:widthPercentageToDP('38%'),borderBottomWidth:2,bottom:heightPercentageToDP('4%') }}>
            <TextInput
       
                placeholder=''
                selectionColor='#000000'
                              
                style={{fontSize:15,
                    width:'100%',
                lineHeight:25,
                fontFamily:'RigSans-Regular',
                color:'#000000',
                alignSelf:'center',
                
                position:'relative',
                top:heightPercentageToDP('2%')
                }}/>
               
              </View>
              
            </View>
            <View style={{position:'relative',marginLeft:widthPercentageToDP('58%'),bottom:heightPercentageToDP(6)}}>
                <Text style={{fontSize:15,lineHeight:25,fontFamily:'RigSans-Regular',color:'#000000'}}>brainwaves.</Text>
              </View>  
            <View style={styles.lastview}>
                <Text style={styles.lasttext}>Take 5 deep{'\n'} breaths in{'\n'}through your</Text>
            </View>
            <View style={{borderBottomWidth:2,width:'55%',alignSelf:'center',position:'relative',bottom:heightPercentageToDP('3%')
                 }}>
                <TextInput
                clearButtonMode='always'
                placeholder=''
                selectionColor='#000000'
                textAlignVertical={"top"}
                style={{fontSize:36,
                    width:'100%',
                    lineHeight:50,
                    fontFamily:'RigSans-SemiBold',
                    color:'#000000',
                    alignSelf:'center',
                    paddingLeft:5,
                    paddingRight:5,
                    position:'relative',
                    top:heightPercentageToDP('2%'),
                }}
                />
            </View>
            <View style={styles.outview}>
                <Text style={styles.outertext}>and out{'\n'} through your</Text>
            </View>
            <View style={{borderBottomWidth:2,width:'55%',alignSelf:'center',position:'relative',bottom:heightPercentageToDP('3%')
                 }}>
                <TextInput
                selectionColor='#000000'
                placeholder=''
                textAlignVertical={"top"}
                style={{fontSize:36,
                    lineHeight:44.28,
                    fontFamily:'RigSans-SemiBold',
                    color:'#000000',
                    alignSelf:'center',
                    paddingLeft:5,
                    paddingRight:5,
                    width:'100%',
                    position:'relative',
                    top:heightPercentageToDP('2%')
                    
                }}
                />
            </View>
            <View style={styles.dotview}>
                <Text style={styles.dot}>.</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('forth')}  >
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};
const styles=StyleSheet.create({
    outerview:{
        padding:20,
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
    div:
    {alignSelf:'center',
    paddingTop:20,
    marginBottom:"15%"
},
sessiontext:{
    fontSize:15,
    lineHeight:25,
    fontFamily:'RigSans-Regular',
    color:'#000000',
    alignSelf:'center',
    paddingBottom:30,
},
createtext:{
    fontSize:24,
    lineHeight:31.8,
    color:'#000000',

    fontFamily:'Calder-DarkShadow',
    
    width:'100%',
},
lastview:{

},
lasttext:{
    fontSize:36,
    lineHeight:50,
    fontFamily:'RigSans-SemiBold',
    color:'#000000',
    alignSelf:'center',
    textAlign:'center'
},
outview:{
marginTop:heightPercentageToDP(-2)
},
outertext:{
    fontSize:36,
    lineHeight:50,
    fontFamily:'RigSans-SemiBold',
    color:'#000000',
    alignSelf:'center',
    textAlign:'center'
},
continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    height:39,
    alignItems:'center',
    justifyContent:'center',
    marginTop:heightPercentageToDP('13%'),
   alignSelf:'center',

},
continuetext:{
    color:'#FFFFFF',
    fontFamily:'RigSans-Semibold',
},
dotview:{
    },
    dot:{
        fontSize:36,
        lineHeight:50,
        fontFamily:'RigSans-SemiBold',
        color:'#000000',
        alignSelf:'center',
        position:'relative',
       marginLeft:widthPercentageToDP('55%'),
        bottom:heightPercentageToDP('9%')       
    }
})
export default thirdSession; 