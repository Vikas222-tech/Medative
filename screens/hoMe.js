import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from './utility';
const hoMe = ({ navigation }) => {
    const [setStyle2, setStyle21] = useState('');
    const onClicks = (name, navi) => {
        setStyle21(name)
        if (navi) {
            setTimeout(() => {
                navigation.navigate(navi);
            }, 1000);
        }
    }
    
    return (
        <ScrollView style={styles.container}>
            <View >
                <View style={styles.outer}>
                    <Image source={require('../assets/images/cont.png')} style={styles.contimage} />
                    <View style={styles.inervw}>
                        <Text style={styles.welcometext}>WELCOME</Text>
                        <Text style={styles.csndratext}>Cassandra</Text>
                    </View>
                </View>
                <View style={styles.secondouter}>
                    <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                        <Image source={require('../assets/images/ntf.png')} style={styles.ntfimage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Image source={require('../assets/images/lst.png')} style={styles.lstimg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputview}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor='#000000'
                        style={styles.textinput} />
                    <Image source={require('../assets/images/srch.png')} style={styles.srchimg} />
                </View>
                <View style={styles.miv}>
                    <TouchableOpacity onPressOut={() => onClicks('block1', 'first')}>
                        <View style={setStyle2 == 'block1' ? styles.border : {
                            borderWidth: 0.4,
                            borderColor: '#AAAAAA',
                            backgroundColor: '#F5F5F5',
                            borderRadius: 12,
                            height: 100,
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ width: '20%' }}>

                                {setStyle2 == "block1" ?
                                    <Image source={require('../assets/images/pen.png')} resizeMode='center' style={styles.image} /> :
                                    <Image source={require('../assets/images/blackpen.png')} resizeMode='center' style={styles.image} />
                                }
                            </View>

                            <View style={{ width: '60%', alignSelf: 'center' }}>

                                <TouchableOpacity>

                                    <Text style={setStyle2 == 'block1' ? styles.textemail : styles.textemailc}>Begin Coloring{'\n'} Sessions</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPressOut={() => onClicks('block2', 'seventh')} style={{ marginTop: '5%' }}>
                        <View style={setStyle2 == 'block2' ? styles.border : {
                            borderWidth: 0.4,
                            borderColor: '#AAAAAA',
                            backgroundColor: '#F5F5F5',
                            borderRadius: 12,
                            height: 100,
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ width: '20%' }}>

                                {setStyle2 == "block2" ?
                                    <Image source={require('../assets/images/ntpd.png')} resizeMode='center' style={styles.image} /> :
                                    <Image source={require('../assets/images/blackntpd.png')} resizeMode='center' style={styles.image} />
                                }




                            </View>
                            <View style={{ width: '60%', alignSelf: 'center' }}>
                                <Text style={setStyle2 == 'block2' ? styles.textemail : styles.textemailc}>Review Past{'\n'} Sessions</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPressOut={() => onClicks('block3')} style={{ marginTop: '5%' }}>
                        <View style={setStyle2 == 'block3' ? styles.border : {
                            borderWidth: 0.4,
                            borderColor: '#AAAAAA',
                            backgroundColor: '#F5F5F5',
                            borderRadius: 12,
                            height: 100,
                            width: '100%',
                            
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ width: '20%' }}>

                                {setStyle2 == "block3" ?
                                    <Image source={require('../assets/images/book.png')} resizeMode='center' style={styles.image} /> :
                                    <Image source={require('../assets/images/blackbook.png')} resizeMode='center' style={styles.image} />
                                }


                            </View>
                            <View style={{ width: '60%', alignSelf: 'center' }}>
                                <Text style={setStyle2 == 'block3' ? styles.textemail : styles.textemailc}>Meditative Coloring{'\n'} Ebook</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPressOut={() => onClicks('block4', 'rip')} style={{ marginTop: '5%' }}>
                        <View style={setStyle2 == 'block4' ? styles.border : {
                            borderWidth: 0.4,
                            borderColor: '#AAAAAA',
                            borderRadius: 12,
                            height: 100,
                            width: '100%',
                            // marginTop:heightPercentageToDP('1%'),
                            backgroundColor: '#F5F5F5',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ width: '20%' }}>

                                {setStyle2 == "block4" ?
                                    <Image source={require('../assets/images/ddg.png')} style={styles.image} /> :
                                    <Image source={require('../assets/images/blackddg.png')} style={styles.image} />
                                }


                            </View>
                            <View style={{ width: '60%', alignSelf: 'center' }}>
                                <Text style={setStyle2 == 'block4' ? styles.textemail : styles.textemailc}>Breathing{'\n'} Excercise</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    border: {
        borderWidth: 0.4,
        borderRadius: 12,
        borderColor: '#666666',
        height: 100,
        width: '100%',
        backgroundColor: '#AAAAAA',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        alignItems: 'center'

    },
    textemail: {
        fontSize: 18,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'RigSans-SemiBold',
        color: "#FFFFFF",
    },
    textemailc: {
        fontSize: 18,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'RigSans-SemiBold',
        color: "#000000",
        alignContent: 'center',
        width: '100%',
    },
    image: {
        height: 40,
        width: 49,
    },
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 20
    },
    outer: {
        flexDirection: 'row',
    },
    miv: {
        marginTop: heightPercentageToDP('8%')
    },
    contimage: {
        height: 46,
        width: 46
    },
    smsimage: {
        height: 34.52,
        width: 34.52,

    },
    fcbimage: {
        height: 34.52,
        width: 34.52
    },
    wtzappimage: {
        height: 34.52,
        width: 34.52
    },
    skypeimage: {
        height: 34.52,
        width: 34.52
    },
    welcometext:
    {
        fontSize: 13,
        lineHeight: 18,
        color: '#979797',
        fontFamily: 'RigSans-Medium'
    },
    csndratext: {
        fontSize: 22,
        lineHeight: 28,
        color: '#000000',
        fontFamily: 'RigSans-Medium'
    },
    secondouter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'relative',
        bottom: hp('4.5%')
    },
    ntfimage: {
        height: 24.28,
        width: 22.06,
        position: 'relative',
        right: 15
    },


    lstimg: {
        height: 17,
        width: 21.86,
        alignSelf: 'center'
    },
    inervw: {
        width: '100%',
        paddingLeft: 10
    },
    inputview: {
        borderWidth: 0.4,
        backgroundColor: '#FFFFFF',
        borderColor: '#AAAAAA',
        borderRadius: 5,
        width: '100%',
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textinput: {
        fontSize: 15,
        lineHeight: 14.76,
        fontFamily: 'RigSans-Medium',
        width: '100%',
    },
    srchimg: {
        height: 15,
        width: 15,
        position: 'relative',
        top: 15,
        right: 33
    },
    bottomborder: {
        borderBottomWidth: 0.5,
        borderEndColor: ' #454545',
        opacity: 0.5,

    },
    invitetext: {
        fontSize: 15,
        lineHeight: 18.45,
        width: '100%',
        paddingLeft: '5%',
        color: '#000000',
        fontFamily: 'RigSans-Bold',
    },

})
export default hoMe; 