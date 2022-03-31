import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,Pressable,TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { heightPercentageToDP } from 'react-native-responsive-screen';
const PropersignUp=({navigation})=>{
    

    const [eyeCheck,setEyeCheck]=useState(false);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
const setCHcek=(item)=>{
    item["status"]=!item["status"];
    setChanges(!chnages);
}
const [password,setPassword]=useState('');
const [isSelected, setSelection] = useState(false);
    return(
        <View style={styles.outerview}>
            <Pressable onPress={()=>navigation.navigate('signin')}>
            <View style={styles.round}>
            <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />
            </View>
            </Pressable>
            <View style={styles.div}>
                <Text style={styles.createtext}>LOG IN TO YOUR ACCOUNT</Text>
            </View>
            <View style={styles.container}>
            
        </View>
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
            <View style={{width:'80%'}}>
            <TextInput
            placeholder=''
            secureTextEntry={eyeCheck}
            placeholderTextColor='#000000'
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
                 <View >
                     <TouchableOpacity onPress={()=>setEyeCheck(!eyeCheck)}>
              <Image source={require('../assets/images/eyeicon.png')} 
               style={{height:20,width:25,position:'relative',top:8,right:3}}/>
             </TouchableOpacity>
             </View>
             }
             </View>
            </View>
            <View style={{paddingBottom:30}}>
        <View style={styles.passwordpadding}>
            <Text style={styles.txb}>Password</Text>
        </View>
        <View style={styles.input2}>
            <View style={{width:'80%'}}>
            <TextInput
            placeholder=''
            secureTextEntry={eyeCheck}
            placeholderTextColor='#000000'
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
                 <View >
                     <TouchableOpacity onPress={()=>setEyeCheck(!eyeCheck)}>
              <Image source={require('../assets/images/eyeicon.png')} 
              style={{height:20,width:25,position:'relative',top:8,right:3}}/>
             </TouchableOpacity>
             </View>
             }
             </View>
            </View>
            </View>
            </View>
           
      <View style={styles.checkboxContainer}>
          <View style={{width:'15%'}}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          tintColors={{ true: '#000000' }}
        />
        </View>
        <View style={{width:'100%'}}>
        <Text style={styles.label}>Lorem ipsum dolor sit amet, consetetur sadipscing{'\n'}
elitr, sed <Text style={{fontSize:13,lineHeight:14.76,fontFamily:'RigSans-Bold',color:'#000000'}}> Terms & Conditions </Text>labore et.</Text>
      </View>
   
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('signup2')}>
      <View style={styles.viewcontinue}>
                <Text style={styles.textcontinue}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
};
const styles=StyleSheet.create({
    round:{
        position:'relative',
        top:heightPercentageToDP('5')
    },
    checkboxContainer: {
        flexDirection: "row",
       
      },
      checkbox: {
        alignSelf: "center",
        height:14,
        width:14,
        
      },
      viewcontinue:{
        borderWidth:1,
        // width:"100%",
        backgroundColor:'#000000',
        // height:50,
        borderRadius:19.5,
        alignSelf:'center',
        width:'100%',
        height:39,
        justifyContent:'center',
        marginTop:heightPercentageToDP('5%')
    },
    textcontinue:{
        fontSize:15,
       lineHeight:18.42,
       fontFamily:'RigSans-SemiBold',
       color:"#FFFFFF",
       alignSelf:'center',
       
    },
      label: {
        fontSize:13,
        fontFamily:'RigSans-Light',
        lineHeight:14.76,
        color:'#000000',
        
      }
    ,
    outerview:{
        padding:20,
        backgroundColor:'#FFFFFF',
        flex:1
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
    div:{
        alignSelf:'center',
        paddingTop:20,
        marginBottom:"13%",
        marginTop:'10%'
    },
    createtext:{
        fontSize:24,
        lineHeight:30.83,
        color:'#000000',
    
        fontFamily:'Calder-DarkShadow',
        width:'100%',
     },
     emailpadding:{
        marginVertical:10
     },
     txa:{
        fontFamily:'RigSans-Regular',
        fontSize:14,
        marginTop:10,
        color:'#000000',
     },
     txb:{
        fontFamily:'RigSans-Regular',
        fontSize:14,
        marginTop:10,
        color:'#000000',
        
     },
     input1:{
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
       
       
        width:'100%',
        height:39,
        alignSelf:'center',
      
        
    },
    input2:{
        borderWidth:0.4,
        borderColor:'rgba(170, 170, 170, 1)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
       
        width:'100%',
        height:39,
        alignSelf:'center',
        marginTop:-5,
    },
    textinput1:{
        marginLeft:10,
        fontSize:15,
       
        fontFamily:'RigSans-Regular',
        width:'85%',
        paddingLeft:10,
        opacity: 0.5
     },
     textinput2:{
        marginLeft:10,
        fontSize:15,
        fontFamily:'RigSans-Medium',
        width:'100%',
        paddingLeft:10,
        opacity: 0.5
     },
     img1:{
        height:18,
        width:18,
        position:'relative',
             top:10,
       
        
    },
    passwordpadding:{
        marginVertical:10
     },
})
export default PropersignUp;