import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP } from '../screens/utility';
const MyProfile = ({navigation}) => {
    return (
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
                </View>
                <View style={{ alignSelf: 'center', }}>
                    <Image
                        source={require('../assets/images/drawerimg.png')} style={{ height: 106, width: 106 }} />
                    <Text style={{ fontSize: 22, lineHeight: 28, color: '#FFFFFF', fontFamily: 'RigSans-Medium', alignSelf: "center" }}>Federica</Text>

                </View>


            </View>
            <View style={{ borderBottomWidth: 0.5, position: 'relative', marginTop: heightPercentageToDP('4%'), borderBottomColor: '#FFFFFF' }}>

            </View>
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row',position:'relative',top:heightPercentageToDP('1%') }}>
                        <View style={{padding:5,width:'15%'}}>
                            <Image source={require('../assets/images/a.png')} style={{ width: 16, height: 16 }} />
                        </View>
                        <View style={{width:'50%'}}>
                        <Text style={{ fontFamily: 'RigSans-Regular', fontsize: 15, lineHeight: 28, color: '#FFFFFF' }}>Phone Number</Text>
                        </View>
                    </View>
                <TextInput
                placeholder='000 000 0000'
                placeholderTextColor='#818181'
                style={{fontSize:15,lineHeight:28,color:'#818181'}}
                />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row',position:'relative',top:heightPercentageToDP('1%') }}>
                        <View style={{padding:5,width:'15%',position:'relative',marginTop:4}}>
                            <Image source={require('../assets/images/b.png')} style={{ width: 16, height: 11 }} />
                        </View>
                        <View style={{width:'50%'}}>
                        <Text style={{ fontFamily: 'RigSans-Regular', fontsize: 15, lineHeight: 28, color: '#FFFFFF' }}>Email</Text>
                        </View>
                    </View>
                <TextInput
                placeholder='abc@abc.com'
                placeholderTextColor='#818181'
                style={{fontSize:15,lineHeight:28,color:'#818181'}}
                />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row',position:'relative',top:heightPercentageToDP('1%') }}>
                        <View style={{padding:5,width:'15%',position:'relative',marginTop:1}}>
                            <Image source={require('../assets/images/c.png')} style={{ width: 13.5, height: 15 }} />
                        </View>
                        <View style={{width:'50%'}}>
                        <Text style={{ fontFamily: 'RigSans-Regular', fontsize: 15, lineHeight: 28, color: '#FFFFFF' }}>DOB</Text>
                        </View>
                    </View>
                <TextInput
                placeholder='22 Mar,1998'
                placeholderTextColor='#818181'
                style={{fontSize:15,lineHeight:28,color:'#818181'}}
                />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row',position:'relative',top:heightPercentageToDP('1%') }}>
                        <View style={{padding:5,width:'15%',position:'relative',marginTop:1}}>
                            <Image source={require('../assets/images/d.png')} style={{ width:12, height: 16 }} />
                        </View>
                        <View style={{width:'50%'}}>
                        <Text style={{ fontFamily: 'RigSans-Regular', fontsize: 15, lineHeight: 28, color: '#FFFFFF' }}>Gender</Text>
                        </View>
                    </View>
                <TextInput
                placeholder='Female'
                placeholderTextColor='#818181'
                style={{fontSize:15,lineHeight:28,color:'#818181'}}
                />
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('editprofile')}>
                <View style={styles.continueview}>
                <Text style={styles.continuetext}>EDIT PROFILE</Text>
            </View>
            </TouchableOpacity>
            </View>


        </ImageBackground>
    )
};
const styles = StyleSheet.create({
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
    secondryview: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: heightPercentageToDP('6%')
    },
    round: {
        width: '100%'
    },
    imground: {
        height: 30,
        width: 30,
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
export default MyProfile;