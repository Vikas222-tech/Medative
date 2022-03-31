import React from 'react';
import { View,Text,TouchableOpacity,Image,StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP } from '../utility';

const forthSession=({navigation})=>{
    return(
        <ScrollView style={styles.outerview}>
        <View >
           <TouchableOpacity onPress={()=>navigation.navigate('third')}>
            <View style={styles.round}>
            <Image source={require('../../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>SET YOU INTENTION</Text>
            </View>
            <View style={styles.sessionview}>
                <Text style={styles.sessiontext}>After naming your session, 
                use the space below to type what has been on your mind recently.
                 Be as specific as you would like.
</Text>
            </View>
            <View style={styles.nameview}>
                <Text style={styles.nametext}>Today's date</Text>
            </View>
            <View style={styles.lastview}>
                <TextInput
                placeholder="today's date"
                placeholderTextColor='#888888'
                style={styles.input}/>
            </View>
           
            <View style={styles.nameviewa}>
                <Text style={styles.nametexta}>Name your coloring session (optional)</Text>
            </View>
            <View style={styles.lastviewa}>
                <TextInput
                placeholder="session name"
                placeholderTextColor='#888888'
                style={styles.inputa}/>
           
            </View>
            <View style={styles.coloringview}>
                <Text style={styles.coloringtext}>What do you want to color about?</Text>
            </View>
            <View style={styles.andview}>
                <TextInput
                placeholder='type here'
                placeholderTextColor='#000000'
                
                style={styles.input2}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('fifth')}>
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
        height:'100%',
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
    div:
    {alignSelf:'center',
    paddingTop:20,
    marginBottom:"15%"
},

sessionview:{

},
createtext:{
    fontSize:24,
    lineHeight:31.8,
    color:'#000000',

    fontFamily:'Calder-DarkShadow',
    
    width:'100%',
},
sessiontext:{
    fontSize:15,
    lineHeight:18.42,
    fontFamily:'RigSans-Regular',
    color:'#000000',
    // alignSelf:'center',
    paddingBottom:30,
    width:'100%',
    textAlign:'center'
},
nameview:{
paddingTop:10,
paddingBottom:10
},
nametext:{
    fontSize:12,
    lineHeight:14.74,
    color:'#000000',
    fontFamily:'RigSans-SemiBold'
},
nameviewa:{
// paddingTop:10,
paddingBottom:10
},
nametexta:{
    fontSize:12,
    lineHeight:14.74,
    color:'#000000',
    fontFamily:'RigSans-SemiBold'
},
input:{
    fontSize:12,
    lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold',
width:'100%',
height:'100%',
paddingLeft:20,

},
inputa:{
    fontSize:12,
    lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold',
width:'100%',
height:'100%',
paddingLeft:20,

},
lastview:{
    borderWidth:0.4,
    borderColor:'rgba(170, 170, 170, 1)',
    borderRadius:5,
    height:39,
    width:'100%',
    backgroundColor:'#FFFFFF',
   
   
    marginBottom:20
},
lastviewa:{
    borderWidth:0.4,
    borderColor:'rgba(170, 170, 170, 1)',
    borderRadius:5,
    height:39,
    width:'100%',
    backgroundColor:'#FFFFFF',
   
   
    marginBottom:20
},
coloringview:{
    paddingBottom:10
},
coloringtext:{
    fontSize:12,
lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold'
},
andview:{
    borderRadius:5,
    borderWidth:0.4,
    
    backgroundColor:'#FFFFFF',
    borderColor:'rgba(170, 170, 170, 1)',
   
    justifyContent:'flex-start'
},
input2:{
    fontSize:12,
    lineHeight:14.74,
color:'#000000',
fontFamily:'RigSans-SemiBold',
textAlignVertical: "top",
width:'100%',
height:329,
paddingtop:0,
paddingBottom:0,
opacity: 0.5,
padding:20

},
continueview:{
    width:'100%',
      
    backgroundColor:'#000000',
    borderRadius:19.5,
    height:39,
    
   
    alignItems:'center',
    justifyContent:'center',
    marginTop:heightPercentageToDP('2%')
    

},
continuetext:{
 color:'#FFFFFF',
        fontFamily:'RigSans-Semibold'
}
})
export default forthSession; 