import React,{useState} from 'react';
import { View,Image,StyleSheet,Text, TextInput,TouchableOpacity,Switch,Pressable} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from './utility';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
const colours = ['white'];
const signIn=({navigation})=>{
    const onClick = (name) => {
        setStyles(name)
    }
    const [setStyle2,setStyle21]=useState('');
    const onClicks=(name,navi)=>{
        setStyle21(name)
        navigation.navigate(navi);
    }
const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const [eyeCheck,setEyeCheck]=useState(false);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
const setCHcek=(item)=>{
    item["status"]=!item["status"];
    setChanges(!chnages);
}
    const [setStyle1, setStyles] = useState('store');
    const [toggle, setToggle] = useState(false);
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const login = async()=>{
            try{
                let response=await axios.post('https://nidhii.co.in/api/login',{    
                "email":userName,
                "password":password,
                "role":"customer"
            })
                if(response.status==200){
                    navigation.navigate('plans')
                }
                console.log("api...",response.data);
            }catch(error){
                console.log(error)
            }
    }
    return(
        <ScrollView>
        <View style={styles.outerview}>
            <Pressable onPress={()=>navigation.navigate('signup')}>
            <View style={styles.round}>
                <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />
            </View>
            </Pressable>
            <View style={styles.div}>
                <Text style={styles.createtext}>LOG IN TO YOUR ACCOUNT</Text>
            </View>
            
        <View style={{margin:10}}>
        <View style={styles.emailpadding}>
            <Text style={styles.txa}>Your Email</Text>
        </View>
        
        <View style={styles.input1}>
            <TextInput
            placeholder='abc@abc.com'
            placeholderTextColor='#000000'
            onChangeText={(e)=>setUserName(e)}
            style={styles.textinput1}/>
            <View style={{width:'100%'}}>
           <Image source={require('../assets/images/emailimage.png')} style={styles.img1} 
           resizeMode='center' />
           </View>
        </View>
        <View style={{paddingBottom:30}}>
        <View style={styles.passwordpadding}>
            <Text style={styles.txb}>Password</Text>
        </View>
        <View style={styles.input2}>
            <View style={{width:'85%'}}>
            <TextInput
            placeholder=''
            
            secureTextEntry={eyeCheck}
            onChangeText={(e)=>setPassword(e)}
            style={styles.textinput2}/>
            </View>
            <View style={{width:'12%'}}>
            { 
            eyeCheck==true?
            <View>
                <TouchableOpacity onPress={()=>setEyeCheck(!eyeCheck)}>
            <Image source={require('../assets/images/eyehide.png')} 
             resizeMode='center'  style={{height:17.68,width:18.03, position:'relative',
             top:10,
             }} />
             </TouchableOpacity>
             </View>:
                 <View
                >
                     <TouchableOpacity onPress={()=>setEyeCheck(!eyeCheck)}>
              <Image source={require('../assets/images/eyeicon.png')} 
               style={{height:20,width:25,position:'relative',top:8,right:3
               }}
             />
             </TouchableOpacity>
             </View>
             }
             </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',position:'relative',bottom:'8%'}}>
                <View style={{flexDirection:"row"}}>
            <Switch
        trackColor={{false: ' rgba(0, 0, 0, 0.16)', true: ' rgba(0, 0, 0, 0.16)'}}
        thumbColor="#000000"
        ios_backgroundColor="gray"
        onValueChange={(value) => setToggle(value)}
        value={toggle}
    />
     <Text style={{fontSize:13,lineHeight:14.76,color:'#000000',position:'relative',top:5,fontFamily:'RigSans-Regular'}}>Remember me</Text>
     </View>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <Text style={{fontSize:13,fontFamily:'RigSans-Regular',lineHeight:14.76,color:'#000000',position:'relative',top:5,}}>Forgot Password</Text>
</View>
    </View>


            <View style={{paddingBottom:20}}>
            <Pressable onPressOut={()=>navigation.navigate('signup2')}>
                <TouchableOpacity onPress={()=>login()}>
            <View style={styles.viewcontinue}>
                <Text style={styles.textcontinue}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
            </Pressable>
            <View style={{paddingTop:15}}>
            <View style={styles.viewor}>
                <Text style={styles.textor}>or</Text>
            </View>
            </View>
            </View>
            <View style={styles.miv}>
                
            <TouchableOpacity onPressOut={() => onClicks('block2')} style={{ marginTop: '5%' }}>
                        <View style={setStyle2 == 'block2' ? styles.border : { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 19.5, flexDirection: 'row', justifyContent: 'space-evenly', width: '100%',height:39,borderColor:'rgba(170, 170, 170, 1)', }}>
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
                        <View style={setStyle2 == 'block3' ? styles.border : { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 19.5, flexDirection: 'row', justifyContent: 'space-evenly', width: '100%',height:39,borderColor:'rgba(170, 170, 170, 1)', }}>
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
                        <View style={setStyle2 == 'block4' ? styles.border : { padding: 10, backgroundColor: '#F5F5F5', borderRadius: 19.5, flexDirection: 'row', justifyContent: 'space-evenly', width: '100%',height:39,borderColor:'rgba(170, 170, 170, 1)', }}>
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
  
<View style={styles.mainaccount}>
            
                <Text style={styles.account}>Don’t Have an account?</Text>
           
            
            <Pressable onPressOut={()=>navigation.navigate('propersignup')}>
                <View style={styles.parallel}>
                <Text style={styles.login}> Sign up</Text>
                </View>
                </Pressable>
               
 </View>
 </View>
        </View>
        </ScrollView>
    )
};
const styles= StyleSheet.create({
    round:{
        position:'relative',
        top:heightPercentageToDP('5')
    },
    imageb:{
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
    miv:{
        paddingTop:heightPercentageToDP('0%')
    },
    parallel:{
        paddingBottom:heightPercentageToDP('10%')
    },
    border:{
        borderWidth: 0.4,
        borderColor:'#AAAAAA',
        borderRadius: 19.5,
       
        width: '100%',
        padding: 10,
        justifyContent: 'space-evenly',
     
        flexDirection: 'row',
        backgroundColor: '#666666'
    },
    image:{
        height: 26,
        width: 20,
    },
    textemail:{
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        color: "#FFFFFF",
     },
     textemailc:{
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        color: "#000000",
        alignContent: 'center',
        width: '100%',
     },
     
    image1:{
        height:21.7,
        width:21.7,
        position:'absolute',
        left:26,
       
    },
    imground:{
        height:30,
        width:30,
    },
    mainaccount:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:heightPercentageToDP('7%'),
        marginBottom:heightPercentageToDP('3%')
        // 
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
    
        fontFamily:'Calder-DarkShadow',
        marginTop:heightPercentageToDP('8%'),
        width:'100%',
     },
     div:{
        alignSelf:'center',
        marginBottom:"7%",
       
    },
    input1:{
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        backgroundColor:'rgba(255, 255, 255, 1)',
      
        width:'100%',
        height:39,
        alignSelf:'center',
        marginBottom:10
        
    },
    input2:{
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        backgroundColor:'rgba(255, 255, 255, 1)',
      
        width:'100%',
        height:39,
        alignSelf:'center',
        marginBottom:10
    },
    img1:{
        height:18,
        width:18,
        position:'relative',
             top:10,
        
        
    },
    
     textinput1:{
        marginLeft:10,
        fontSize:14,
       color:'#000000',
        fontFamily:'RigSans-Regular',
       lineHeight:14.76,
        width:'85%',
        paddingLeft:10,
        
     },
     textinput2:{
        marginLeft:10,
        fontSize:14,
        lineHeight:18,
    
        fontFamily:'Poppins-Medium',
        color:'#000000',
        width:'100%',
        paddingLeft:10,
        position:'absolute',
        top:-3
     },
     txa:{
        fontFamily:'RigSans-Regular',
        fontSize:14,
        lineHeight:14.74,
        // marginBottom:10,
        marginTop:10,
        color:'#000000',
     },
     txb:{
        fontFamily:'RigSans-Regular',
        fontSize:14,
        lineHeight:14.74,
        marginTop:10,
        color:'#000000',
        
     },
     outerview:{
         padding:20,
         backgroundColor:'#FFFFFF',
         flex:1
     },
     emailpadding:{
        marginVertical:10
     },
     passwordpadding:{
        marginVertical:10
     },
     
 
  
    viewcontinue:{
        borderWidth:1,
        backgroundColor:'#000000',
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
        
        justifyContent:'center',
        height:39
    },
    textcontinue:{
        fontSize:15,
       lineHeight:18.42,
       fontFamily:'RigSans-Regular',
       color:"#FFFFFF",
       alignSelf:'center',
       
    },
    viewor:{
        marginBottom:-10,
    },
    textor:{
        alignSelf:'center',
        fontSize:12,
        lineHeight:14.74,
        color:'#000000',
        fontFamily:'RigSans-Regular'
    },
   
    
    account:{
        fontSize:14,
        lineHeight:15,
  
        color:'#000000',
        fontFamily:'RigSans-Medium ',
        textAlign:'center'
    },
    login:{
        fontSize:14,
        lineHeight:15,
    
        color:'#000000',
        fontFamily:'RigSans-Bold ', 
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
      
        fontFamily:'RigSans-Extrabold',
       
        textAlign:'center'
    }
})

export default signIn; 