import React from 'react';
import {View,Text,Image,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP } from '../screens/utility';
const EditProfile=()=>{
    return(
        <ImageBackground source={require('../assets/images/bckgrnd2.png')} style={{ height: '100%', width: '100%', }} >
        <View style={{ padding: 20 }}>
        <View style={styles.secondryview}>
                    <TouchableOpacity onPress={() => navigation.navigate('clearing')}>
                        <View style={styles.round}>
                            <Image source={require('../assets/images/round.png')} style={styles.imground} />
                            <Image source={require('../assets/images/back.png')} style={styles.cross} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.createtext}>MY PROFILE</Text>
                    </View>
                    {/* </TouchableOpacity> */}
                </View>
                <View style={{ alignSelf: 'center', }}>
                    <Image
                        source={require('../assets/images/drawerimg.png')} style={{ height: 106, width: 106 }} />
                                   <Image source={require('../assets/images/f.png')} style={styles.pencil} resizeMode='center' />
                         <View>
            </View>
                </View>
                <View style={{marginTop:heightPercentageToDP('7%')}}>
                <View style={{}}>
                    <Text style={{fontSize:12,lineHeight:28,color:'#818181',fontFamily:'RigSans-Regular'}}>Full Name</Text>
                    <TextInput
                    placeholder='vikas'
                    placeholderTextColor='#FFFFFF'
                    style={{borderTopWidth: 0, borderBottomWidth: 0.5, padding: 4, height: 30,
                        borderBottomColor:'#AAADB0',color:'#FFFFFF',fontSize:15,lineHeight:28,
                        fontFamily:'RigSans-Regular'
                    }}/>
                </View>
                
                </View>
                <View style={{marginTop:heightPercentageToDP('1%')}}>
                    <Text style={{fontSize:12,lineHeight:28,color:'#818181',fontFamily:'RigSans-Regular'}}>Gender</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TextInput
                    placeholder='Female'
                    placeholderTextColor='#FFFFFF'
                    style={{borderTopWidth: 0, borderBottomWidth: 0.5, padding: 4,width:'100%',
                        borderBottomColor:'#AAADB0',color:'#FFFFFF',fontSize:15,lineHeight:28,
                        fontFamily:'RigSans-Regular'
                    }}/>
                    <Image source={require('../assets/images/e.png')} style={{height:15,width:15,position:'relative',alignSelf:'center',right:widthPercentageToDP('5%')}} resizeMode='center' />
                </View>
                </View>
                <View style={{marginTop:heightPercentageToDP('1%')}}>
                <View style={{}}>
                    <Text style={{fontSize:12,lineHeight:28,color:'#818181',fontFamily:'RigSans-Regular'}}>Email</Text>
                    <TextInput
                    placeholder='abc@abc.com'
                    placeholderTextColor='#FFFFFF'
                    style={{borderTopWidth: 0, borderBottomWidth: 0.5, padding: 4, height: 30,
                        borderBottomColor:'#AAADB0',color:'#FFFFFF',fontSize:15,lineHeight:28,
                        fontFamily:'RigSans-Regular'
                    }}/>
                </View>
                </View>
                <View style={{marginTop:heightPercentageToDP('1%')}}>
                <Text style={{fontSize:12,lineHeight:28,color:'#818181',fontFamily:'RigSans-Regular'}}>DOB</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TextInput
                placeholder='22 Mar,1998'
                placeholderTextColor='#FFFFFF'
                style={{borderTopWidth: 0, borderBottomWidth: 0.5, padding: 4,width:'100%',
                    borderBottomColor:'#AAADB0',color:'#FFFFFF',fontSize:15,lineHeight:28,
                    fontFamily:'RigSans-Regular'
                }}/>
                <Image source={require('../assets/images/e.png')} style={{height:15,width:15,position:'relative',alignSelf:'center',right:widthPercentageToDP('5%')}} resizeMode='center' />
            </View>
            
            </View>
            <View style={{marginTop:heightPercentageToDP('1%')}}>
                <View style={{}}>
                    <Text style={{fontSize:12,lineHeight:28,color:'#818181',fontFamily:'RigSans-Regular'}}>Mobile No.</Text>
                    <TextInput
                    placeholder='000-000-0000'
                    placeholderTextColor='#FFFFFF'
                    style={{borderTopWidth: 0, borderBottomWidth: 0.5, padding: 4, height: 30,
                        borderBottomColor:'#AAADB0',color:'#FFFFFF',fontSize:15,lineHeight:28,
                        fontFamily:'RigSans-Regular'
                    }}/>
                </View>
                
                </View>
                <View style={styles.continueview}>
                <Text style={styles.continuetext}>SAVE</Text>
            </View>
        </View>
        </ImageBackground>
    )
};
const styles=StyleSheet.create({
    secondryview: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: heightPercentageToDP('6%')
    },
    continueview:{
        width:'100%',
          
        backgroundColor:'#FFFFFF',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        marginTop:heightPercentageToDP('9%')
        ,
    
    },
    continuetext:{
     color:'#000000',
            fontFamily:'RigSans-Semibold'
    },
    round: {
        width: '100%'
    },
    imground: {
        height: 30,
        width: 30,
    },
    pencil: {
        height: 16,
        width: 13,
        position: 'absolute',
        left: widthPercentageToDP('23%'),
        top:heightPercentageToDP('10%')
    },
    cross: {
        height: 18,
        position: 'relative',
        bottom: 25,
        left: 2,
        resizeMode: 'center'
    },

    createtext: {
        fontSize: 24,
        lineHeight: 30.83,
        color: '#FFFFFF',

        fontFamily: 'RigSolid-BoldFill',

        width: '100%',
        textAlign: 'center',
    },
})
export default EditProfile;