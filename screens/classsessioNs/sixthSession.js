import React from 'react';
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native'; 
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const sixthSession=({navigation})=>{
    return(
        <ScrollView>
        <View style={{backgroundColor:'#FFFFFF',flex:1,padding:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('interpret')}>
             <View style={styles.round}>
             <Image source={require('../../assets/images/lessthan.png')} style={styles.imground} />

            </View>  
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.createtext}>RELEASE + RECEIVE LIST</Text>
            </View>
            
            <View style={styles.ipsumview}>
                <Text style={styles.ipsumtext}>Lorem ipsum dolor sit amet, conseteturle{'\n'}
Lorem ipsum dolor sit amet, conse.
</Text>
            </View>
            <View style={{ paddingTop:heightPercentageToDP('3%')}}>
                <Text style={{fontSize:15,lineHeight:18.42,color:'#000000',fontFamily:'RigSans-Regular'}}>RELEASE LIST</Text>
            </View>
            <View style={{paddingTop:heightPercentageToDP('1%'),paddingBottom:heightPercentageToDP('2%')}}>
                <Text style={{color:'#000000',fontSize:12,lineHeight:14.76}}>Type 3 things that you would like to let go of. For example,<Text style={{lineHeight:14.74,fontStyle:'italic'}}> Worrying about what’s next.</Text> Be as specific as you’d like.</Text>
            </View>
            <View style={styles.container}>
                
            <View style={{flexDirection:'row',width:'100%',}}>
             <Text style={styles.textstyling}>1</Text>
             <TextInput 
             style={{position:'absolute',left:widthPercentageToDP('9%'),width:'85%',color:'#888888',borderBottomWidth:1,borderColor:'#000000',fontSize:12,lineHeight:14.76}}
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
            <View style={{ paddingTop:heightPercentageToDP('3%')}}>
                <Text style={{fontSize:15,lineHeight:18.42,color:'#000000',fontFamily:'RigSans-Regular'}}>RECEIVE LIST</Text>
            </View>
            <View style={{paddingTop:heightPercentageToDP('1%'),paddingBottom:heightPercentageToDP('2%')}}>
                <Text style={{color:'#000000',fontSize:12,lineHeight:14.76}}>Type 3 things that you would like more of. For example,<Text style={{lineHeight:14.74,fontStyle:'italic'}}> Trusting the process of life. Be as specific as you’d like.</Text></Text>
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
            <TouchableOpacity onPress={()=>navigation.navigate('clearing')}>
            <View style={styles.continueview}>
                <Text style={styles.continuetext}>CONTINUE</Text>
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    imground:{
        height:30,
        width:
        30,
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
    round:{
        marginBottom:heightPercentageToDP('1%'),
        marginTop:heightPercentageToDP('1%')
    },
    container:{
        borderWidth:0.4,
        borderColor:'#AAAAAA',
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        width:'100%',
        height:220,
        
    },
   
    inputtext:{
        color:'#000000',
        fontfamily:'RigSans-Medium',
        fontSize:18,
        lineHeight:22.14,
       width:'5%'
    },
    inputborderline:{
        borderBottomWidth:1,
        width:'85%',
        position:'relative',
        bottom:25,borderBottomWidth:0.5,
        opacity:0.5
    },
   
    ipsumview:{

    },
    ipsumtext:{
        color:'#000000',
        fontfamily:'RigSans-Regular',
        fontSize:15,
        line:18.45,
        textAlign:'center',
        width:'100%',
        paddingTop:heightPercentageToDP('1%')
    },
    
    
    div:
    {alignSelf:'center',
 
    width:'90%'
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
    ,

},
continuetext:{
 color:'#FFFFFF',
        fontFamily:'RigSans-Semibold'
},
createtext:{
    fontSize:21,
    lineHeight:31.8,
    color:'#000000',

    fontFamily:'Calder-DarkShadow',
    
},
})
export default sixthSession;