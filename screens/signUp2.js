import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView,PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import DateTimePicker from '@react-native-community/datetimepicker';
import { heightPercentageToDP, widthPercentageToDP } from './utility';

import axios from 'axios';
// import { widthPercentageToDP } from './utility';
const signUp2 = ({ navigation }) => {
    const [imageFile, setImageFile] = useState();
    const [userName,setUserName]=useState();
    const [email,setEMail]=useState();
    const [phone,setPhone]=useState();
    const [password,setPassword]=useState();
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
  
    const opneOk = () => {
        setShowModalok(!showModalok)
        setShowModal(!showModal);
    }
    useEffect(()=>{
        requestCameraPermission()
    },[])
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Cool Photo App Camera Permission",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };
    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImageFile(image.path)
            // console.log(image);
        });
    }
    const RegisterApi = async() => {
        let body = {
        "email":email,
        "role":"customer",
        "name":userName,
        "phone": phone,
        "password":password
    }
    try {
        let response=await axios.post('https://nidhii.co.in/api/register',body)
        console.log("data is..",response.data);
        console.log("code is ..jj",response.data.statusCode);
        if(response.data.success==true){
            navigation.navigate('signup')
        }
    }
    catch (error) {
        console.log(error);
    }
}
const showPicker = () => {
    setIsPickerShow(true);
  };
  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
return (
    <ScrollView style={styles.mainview}>
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
            <View style={styles.round}>
            <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />

            </View>
        </TouchableOpacity>
        <View style={styles.div}>
            <Text style={styles.createtext}>SET UP YOUR PROFILE</Text>
        </View>
        <View style={styles.imageview}>
            <TouchableOpacity onPress={() => uploadImage()}>
                {imageFile ? <Image source={{ uri: imageFile }} style={styles.image}></Image> :
                    <Image source={require('../assets/images/lg.png')} style={styles.image} />}
            </TouchableOpacity>
        </View>
        {imageFile ?
            <View style={{ alignSelf: 'center' }}>

            </View> :
            <View style={{ padding: 5 }}>
                <Image source={require('../assets/images/pencil.png')} style={styles.pencil} resizeMode='center' />
            </View>
        }
        <View style={styles.emailpadding}>
            <Text style={styles.txa}>First Name</Text>
        </View>
        <View style={styles.input1}>
            <TextInput
                placeholder='abc'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setUserName(e)}
                style={styles.textinput1} />
        </View>
        <View style={styles.emailpadding3}>
            <Text style={styles.txb}>Last Name</Text>
        </View>
        <View style={styles.input2}>
            <TextInput
                placeholder='xyz'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setPassword(e)}
                style={styles.textinput2} />
        </View>
        <View style={styles.passwordpadding}>
            <Text style={styles.txc}>Phone Number</Text>
        </View>
        <View style={styles.phoneview}>
            <TextInput
                placeholder='000-000-0000'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setPhone(e)}
                style={styles.textinput3} />
            <Image source={require('../assets/images/call.png')} style={styles.phoneimage} resizeMode='center' />
        </View>
        <View style={styles.addresspadding}>
            <Text style={styles.txd}> Email Address</Text>
        </View>
        <View style={styles.cview}>
           
            <TextInput
                placeholder='abc@abc.com'
                placeholderTextColor='#000000'
                onChangeText={(e)=>setEMail(e)}
                style={styles.textinput4} />
              
            <Image source={require('../assets/images/emailimage.png')} style={styles.emailimage} resizeMode='center' />
       
        </View>
        <View style={styles.emailpadding}>
            <Text style={styles.txe}> Date of Birth</Text>
        </View>
        <View style={styles.datebirth}>
            <View style={{width:'100%'}}>
            <TextInput
                placeholder='00/00/0000'
                placeholderTextColor='#000000'
                style={styles.textinput5} 
             />
                </View>
                <View styl={{width:'100%'}}>
                <TouchableOpacity onPress={()=>showPicker()}>
            <Image source={require('../assets/images/caldr.png')} style={styles.clndrimage}  />
            </TouchableOpacity>
            </View>
        </View>
        {isPickerShow?
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />:null
      }
        <Pressable onPress={() => navigation.navigate('plans')}>
            <TouchableOpacity onPress={() => RegisterApi()}>
                <View style={styles.submitview}>
                    <Text style={styles.submittext}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
        </Pressable>
    </View>
    </ScrollView>
)
};
const styles = StyleSheet.create({
    mainview: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        flex:1
    },
    round:{
        position:'relative',
        top:heightPercentageToDP('5')
    },
    imground: {
        height: 30,
        width: 30,
    },
   
   
    div: {
        alignSelf: 'center',
     
        marginBottom:heightPercentageToDP('3%'),
        marginTop:heightPercentageToDP('5%')
    },
    createtext: {
        fontSize:24,
        lineHeight:30.83,
        color:'#000000',
    
        fontFamily:'Calder-DarkShadow',
        width:'100%',
    },
    image: {
        height: 103,
        width: 103
    },
    lgview: {
        alignSelf: 'center',
        marginTop: '10%'
    },
    textinput2: {
        width: '100%',
        paddingLeft: 20,
        fontSize: 15,
        color:'#000000',
        opacity: 0.5,     
        fontFamily: 'RigSans-Medium',

    },
    textinput3: {

        fontSize: 15,
        opacity: 0.5,
        fontFamily: 'RigSans-Medium',
        color:'#000000',
        opacity: 0.5,
        width: '100%',
        paddingLeft: 20,
        },
    textinput4: {
        fontSize: 15,
        fontFamily: 'RigSans-Medium',
        color:'#000000',
        opacity: 0.5,
        width: '80%',
        paddingLeft: 20,
    },
    textinput1: {
        fontSize: 15,
        fontFamily: 'RigSans-Medium',
        color:'#000000',
        opacity: 0.5,
        width: '100%',
        paddingLeft: 20,
    },
    textinput5: {
        fontSize: 15,
       
        fontFamily: 'RigSans-Medium',

        width: '90%',
        paddingLeft: 20,
        color:'#000000',
        opacity: 0.5,
      
    },

    input1: {
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius: 5,
     
        alignSelf: 'center',
        
       
        width: '100%',
        height: 39,
    },
    txa: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        lineHeight: 14.74,
        marginBottom: 10,
        color: '#000000',

    },
    input2: {
        borderWidth: 0.4,
        alignSelf: 'center',
        borderRadius: 5,
        
        borderColor:'rgba(170, 170, 170, 1)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        width: '100%',
        height: 39,
        marginBottom: 10
    },
    txb: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        lineHeight: 14.74,
        marginBottom: 10,
        marginTop: 10,
        marginTop: 10,
        color: '#000000',
    },
    txe: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        lineHeight: 14.74,
        marginBottom: 10,
        marginTop: 10,
        color: '#000000',
    },
    passwordpadding: {
        width: '100%'
    },
    txc: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
        color: '#000000'
    },
    phoneimage: {
        height: 18,
        width: 18,
        alignSelf: 'center',
        position:'relative',
        right:widthPercentageToDP('10%')
        // width: '100%',

    },
    phoneview: {
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',

    
        width: '100%',
        height: 39,
        alignSelf: 'center',
        marginBottom: 10
    },
    cview: {
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
       
        width: '100%',
        height: 39,
        alignSelf: 'center',
        marginBottom: 10
    },
    emailpadding: {
        width: '100%'


    },
    txd: {
        fontFamily: 'RigSans-Medium',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
        color: '#000000',
    },
    emailimage: {

        
        height: 18,
        width: 18,
        alignSelf: 'center',
        position:'relative',
        right:widthPercentageToDP('5%')
    },
 
    clndrimage: {
        height: 18,
        width: 18,
        alignSelf: 'center',
        position:'relative',
        right:widthPercentageToDP('9%'),
        top:10
    },
    submitview: {
        borderWidth: 1,
        width: '100%',
        height: 39,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 19.5,
        marginTop: heightPercentageToDP('8%'),
        marginBottom:heightPercentageToDP('10%'),
        alignSelf: 'center'

    },
    submittext: {
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    pencil: {
        height: 22,
        width: 16,
        position: 'relative',
        left: '59%',
        bottom: 25
    },
    imageview: {
        alignSelf: 'center'
    },
    emailpadding3: {
        paddingTop: 12
    },
    addresspadding: {

    },
    datebirth: {
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius: 5,
        width: '100%',
        height: 39,
        alignSelf: 'center',
    
    }
})
export default signUp2; 