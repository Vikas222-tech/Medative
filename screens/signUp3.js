import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from './utility';
import axios from 'axios';

const colours = ['white'];
const signUp3 = ({ navigation }) => {
    const onClick = (name) => {
        setStyles(name)
    }
    const [setStyle2, setStyle21] = useState('');
    const onClicks = (name, navi) => {
        setStyle21(name)
        if(navi){
        setTimeout(() => {
            navigation.navigate(navi);
        }, 1000);
    }
    }
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    const setCHcek = (item) => {
        item["status"] = !item["status"];
        setChanges(!chnages);
    }
    const [setStyle1, setStyles] = useState('store');
    const [userName, setUserName] = useState('py601826@gmail.com');
    const login = async () => {
        navigation.navigate('signin')

    }
    return (
        <View style={styles.outerview}>
            
            <View style={styles.container}>
                <View style={styles.div}>
                    <Text style={styles.createtext}>CREATE YOUR ACCOUNT</Text>
                </View>
                <View style={styles.miv}>
                    <TouchableOpacity onPressOut={() => onClicks('block1', 'signin')}>
                        <View style={setStyle2 == 'block1' ? styles.border : { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 19.5, flexDirection: 'row',
                         justifyContent: 'space-evenly', width: '100%',height:39,borderColor:'rgba(170, 170, 170, 1)', }}>
                            <View style={{ width: '10%',position :'relative',alignSelf:'center' }}>
                               
                                {setStyle2 == "block1" ?
                                    <Image source={require('../assets/images/mesg2.png')} resizeMode='center' style={styles.imagea} /> :
                                    <Image source={require('../assets/images/mesg.png')} resizeMode='center' style={styles.imagea} />
                                }
                            </View>

                            <View style={{ width: '70%', alignSelf: 'center' }}>
                             
                                <TouchableOpacity onPress={() => login()}>

                                    <Text style={setStyle2 == 'block1' ? styles.textemail : styles.textemailc}>Continue with Email</Text>
                                </TouchableOpacity>
                               
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPressOut={() => onClicks('block2','signup')} style={{ marginTop: '5%' }}>
                        <View style={setStyle2 == 'block2' ? styles.border : { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 19.5, flexDirection: 'row',
                         justifyContent: 'space-evenly', width: '100%',height:39,borderColor:'rgba(170, 170, 170, 1)', }}>
                            <View style={{ width: '10%',position :'relative',alignSelf:'center' }}>


                                {setStyle2 == "block2" ?
                                    <Image source={require('../assets/images/google.png')} resizeMode='center' style={styles.imageb} /> :
                                    <Image source={require('../assets/images/google2.png')} resizeMode='center' style={styles.imageb} />
                                }

                                


                            </View>
                            <View style={{ width: '70%', alignSelf: 'center' }}>
                                <Text style={setStyle2 == 'block2' ? styles.textemail : styles.textemailc}>Continue with Google</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPressOut={() => onClicks('block3')} style={{ marginTop: '5%' }}>
                        <View style={setStyle2 == 'block3' ? styles.border : { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 19.5, flexDirection: 'row',
                         justifyContent: 'space-evenly', width: '100%',height:39,borderColor:'rgba(170, 170, 170, 1)', }}>
                            <View style={{ width: '10%',position :'relative',alignSelf:'center' }}>

                                {setStyle2 == "block3" ?
                                    <Image source={require('../assets/images/fcb.png')} resizeMode='center' style={styles.imagec} /> :
                                    <Image source={require('../assets/images/fcb2.png')} resizeMode='center' style={styles.imagec} />
                                }

                            
                            </View>
                            <View style={{ width: '70%', alignSelf: 'center' }}>
                                <Text style={setStyle2 == 'block3' ? styles.textemail : styles.textemailc}>Continue with Facebook</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPressOut={() => onClicks('block4')} style={{ marginTop: '5%' }}>
                        <View style={setStyle2 == 'block4' ? styles.border : { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 19.5, flexDirection: 'row'
                        ,height:39,borderColor:'rgba(170, 170, 170, 1)', justifyContent: 'space-evenly', width: '100%' }}>
                            <View style={{ width: '10%',position :'relative',alignSelf:'center' }}>

                                {setStyle2 == "block4" ?
                                    <Image source={require('../assets/images/ios.png')} style={styles.imaged} /> :
                                    <Image source={require('../assets/images/ios2.png')} style={styles.imaged} />
                                }

                               
                            </View>
                            <View style={{ width: '70%', alignSelf: 'center' }}>
                                <Text style={setStyle2 == 'block4' ? styles.textemail : styles.textemailc}>Continue with Apple</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.stanza}>
                <View style={styles.padding}>
                    <Text style={styles.ipsum}>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod <Text style={styles.conditions} onPress={()=>navigation.navigate('terms')}>Terms & Conditions  </Text>
                        labore et dolore magna aliquyam erat,</Text>
                </View>

            </View>
            <View style={styles.relativeview}>

                <Text style={styles.account}>Have an account? </Text>

                <View style={styles.parallel}>
                    <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                        <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    
    container: {
        padding: 20,
        osition: 'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: heightPercentageToDP('10%')
       
    },
   
   imageb:{
    width:21,
    height:15
   },
   imagea:{
    width:21,
  height:15
   },
   imagec:{
    width:20,
    height:20
   },
   imaged:{
    height:24,
    width:20,
   },
    div: {
        alignSelf: 'center',
    },
  
    createtext: {
        fontSize: 24,
        lineHeight: 31.8,
        color: '#000000',

        fontFamily: 'Calder-DarkShadow',

        width: '100%',
    },
    border: {
        borderWidth: 0.4,
        borderColor:'rgba(102, 102, 102, 1)',
        borderRadius: 19.5,
        width: '100%',
        padding: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: 'rgba(170, 170, 170, 1)',
        height:39
    },
   
    image: {
        height: 26,
        width: 20,
      


    },
    image1: {
        height: 23,
        width: 23,
        position: 'absolute',
        left: 26,
       
    },
    image2: {
        height: 20,
        width: 20,
        position: 'absolute',
        left: 26
    },
    image3: {
        height: 26,
        width: 25,
        position: 'absolute',
        left: 26
    },
    textemail: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        color: "#FFFFFF",



    },
    textemailc: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        color: "#000000",
        alignContent: 'center',
        width: '100%',
    },
    textgoogle: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        color: "#FFFFFF"
    },
    textfcb: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        color: "#FFFFFF",

    },
    textios: {
        fontSize: 15,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        color: "#FFFFFF",
        alignContent: 'center',

    },

    dva: {
        borderWidth: 1,
        borderRadius: 19.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        flexDirection: 'row'
    },
    dvb: {
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 19.5,
        alignSelf: 'center',
        width: '100%',
        height: 39,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    dvc: {
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 19.5,
        alignSelf: 'center',
        width: '100%',
        height: 39,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    dvd: {
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 19.5,
        alignSelf: 'center',
        width: '100%',
        height: 39,
        alignItems: 'center',
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    stanza: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: heightPercentageToDP('20%'),
        paddingLeft: '13%',
        paddingRight: '13%',
        width: '100%'


    },
    ipsum: {
        fontSize: 14,
        lineHeight: 15,
        
        color: '#000000',
        fontFamily: 'RigSans-Light',

        width: '100%',

        textAlign: 'center'
    },
    conditions: {
        fontSize: 14,
        lineHeight: 15,
        color: '#000000',
        fontFamily: 'RigSans-Bold',
        margin: 5,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
    },
    account: {
        fontSize: 14,
        lineHeight: 15,
        
        color: '#000000',
        fontFamily: 'RigSans-Medium ',
        textAlign: 'center'
    },
    login: {
        fontSize: 14,
     
        color: '#000000',
        fontFamily: 'RigSans-Bold ',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        justifyContent: 'center',
        position: 'absolute',
        top: -3,
        fontFamily: 'RigSans-Extrabold',

        textAlign: 'center'
    },


    padding: {
        width: '100%'
    },
    miv: {
        paddingTop: heightPercentageToDP('8%')
    },
    outerview: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    relativeview: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        top: heightPercentageToDP('5%'),
       
        paddingRight: '10%',
        width: '100%'

    }
})
export default signUp3;

