import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const clearingScreen=({navigation})=>{
    return(
        <ScrollView style={styles.outerview}>
        <View >
            <TouchableOpacity onPress={()=>navigation.navigate('sixth')}>
             <View style={styles.round}>
             <Image source={require('../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
            
            
            <View style={{width:'100%',paddingBottom:heightPercentageToDP('2%'),
            paddingTop:heightPercentageToDP('2%')}}>
            <Text style={styles.createtext}>CLEAR IT OUT</Text>
            </View>
            
            
         <View>
             <Text style={{fontSize:14,lineHeight:17.19,fontFamily:'RigSans-Regular',
            color:'#000000',textAlign:'center'}}>Read the script below (outloud or in your head).</Text>
         </View>
         <View style={{paddingTop:heightPercentageToDP('8%'),paddingBottom:heightPercentageToDP('4%'),}}>
                <Text style={{fontSize:16,lineHeight:19.68,color:'#000000'
            ,fontFamily:'RigSans-Bold',textAlign:'center'}}>I clear the heavy energies of:</Text>
            </View>
        
            <View style={styles.container}>
                
                <View style={{flexDirection:'row',width:'100%',}}>
                 <Text style={styles.textstyling}>1</Text>
                 <TextInput 
                 style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',
                 color:'#888888',borderBottomWidth:1,borderColor:'#000000',fontSize:12,}}
           placeholder='Lorem ipsum dolor sit amet, conseteturle
           Lorem ipsum dolor sit amet, conse.
           '
           fontSize={12}
           lineHeight={14.76}
           paddingBottom={2}
           multiline={true}
           selectionColor='#000000'
       numberOfLines={2}
        />
            </View>
    
            <View style={{flexDirection:'row',width:'100%',marginTop:heightPercentageToDP('8%')}}>
                 <Text style={styles.textstyling}>2</Text>
                 <TextInput 
                 style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',color:'#888888',borderBottomWidth:1,borderColor:'#000000',fontSize:12,}}
                 placeholder='Lorem ipsum dolor sit amet, conseteturle
                 Lorem ipsum dolor sit amet, conse.
                 '
                 fontSize={12}
                 lineHeight={14.76}
                 paddingBottom={2}
                 multiline={true}
                 selectionColor='#000000'
             numberOfLines={2}
        />
            </View>    
            <View style={{flexDirection:'row',width:'100%',marginTop:heightPercentageToDP('8%')}}>
                 <Text style={styles.textstyling}>3</Text>
                 <TextInput 
                 style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',color:'#888888',borderBottomWidth:1,borderColor:'#000000',fontSize:12,}}
                 placeholder='Lorem ipsum dolor sit amet, conseteturle
                 Lorem ipsum dolor sit amet, conse.
                 '
                 fontSize={12}
                 lineHeight={14.76}
                 paddingBottom={2}
                 multiline={true}
                 selectionColor='#000000'
             numberOfLines={2}
        />
            </View>    
    
               
                </View> 
                <View style={{marginTop:heightPercentageToDP('4%'),marginBottom:heightPercentageToDP('4%')}}>
                    <Text style={{fontSize:16,lineHeight:19.68,fontFamily:'RigSans-Bold',color:'#000000',textAlign:'center'}}>And cast them to the sun to be repoloarized into light energy. And I replace them with:</Text>
                </View>
                <View style={styles.container}>
                
                <View style={{flexDirection:'row',width:'100%',}}>
                 <Text style={styles.textstyling}>1</Text>
                 <TextInput 
                 style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',
                 color:'#888888',borderBottomWidth:1,borderColor:'#000000',fontSize:12,}}
                 placeholder='Lorem ipsum dolor sit amet, conseteturle
                 Lorem ipsum dolor sit amet, conse.
                 '
                 fontSize={12}
                 lineHeight={14.76}
                 paddingBottom={2}
                 multiline={true}
                 selectionColor='#000000'
             numberOfLines={2}
        />
            </View>
    
            <View style={{flexDirection:'row',width:'100%',marginTop:heightPercentageToDP('8%')}}>
                 <Text style={styles.textstyling}>2</Text>
                 <TextInput 
                 style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',color:'#888888',borderBottomWidth:1,borderColor:'#000000',fontSize:12,}}
                 placeholder='Lorem ipsum dolor sit amet, conseteturle
                 Lorem ipsum dolor sit amet, conse.
                 '
                 fontSize={12}
                 lineHeight={14.76}
                 paddingBottom={2}
                 multiline={true}
                 selectionColor='#000000'
             numberOfLines={2}
        />
            </View>    
            <View style={{flexDirection:'row',width:'100%',marginTop:heightPercentageToDP('8%')}}>
                 <Text style={styles.textstyling}>3</Text>
                 <TextInput 
                 style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',color:'#888888',borderBottomWidth:1,borderColor:'#000000',fontSize:12,}}
                 placeholder='Lorem ipsum dolor sit amet, conseteturle
                 Lorem ipsum dolor sit amet, conse.
                 '
                 fontSize={12}
                 lineHeight={14.76}
                 paddingBottom={2}
                 multiline={true}
                 selectionColor='#000000'
             numberOfLines={2}
        />
            </View>    
    
               
                </View> 
            <TouchableOpacity onPress={()=>navigation.navigate('rip')}>
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
        backgroundColor:'#FFFFFF',
        flex:1
    },
    secondryview:{
        flexDirection:'row',
        width:'75%',
        justifyContent:'space-between'
    },
    
    imground:{
        height:30,
        width:30,
    },
   
    
    createtext:{
        fontSize:24,
        lineHeight:31.8,
        color:'#000000',
    
        fontFamily:'Calder-DarkShadow',
        
        width:'100%',
        textAlign:'center'
     },
     container:{
        borderWidth:0.4,
        borderColor:'#AAAAAA',
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        width:'100%',
        height:220,
        
    },
    textstyling:{width:'100%',
    position:'absolute',
    top:heightPercentageToDP('2%'),
    left:widthPercentageToDP('2%'),
    fontSize:18,
    lineHeight:22.14,
    lineHeight:18,
    padding:5,
    color:'#000000',
    fontFamily:'RigSans-Extrabold'
},
     continueview:{
        width:'100%',
      
        backgroundColor:'#000000',
        borderRadius:19.5,
        height:39,
         alignItems:'center',
        justifyContent:'center',
        marginTop:heightPercentageToDP('1%'),
        marginBottom:heightPercentageToDP('3%')
        
    
    },
    continuetext:{
     color:'#FFFFFF',
            fontFamily:'RigSans-Semibold'
    },
})
export default clearingScreen;