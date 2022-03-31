import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../screens/constant/index';
import data from '../screens/constant/data';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from './utility';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const onboarding = ({ navigation }) => {
    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])
    const IndexofMatch = 2;
    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems)
    })
    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index)
            return;
        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])



    const renderFlatlistItem = ({ item }) => {
        return (

            <View style={{
                width: SIZES.width,
            }}>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:heightPercentageToDP('15%') }}>
                    <Image source={item.img} style={{ height: 150, width: 150 }}></Image>
                </View>
                <View style={{ marginTop: hp('6%') }}>
                    <View style={{ alignSelf: 'center', }}>
                        <Text style={{ fontSize: 30, color: '#000000', lineHeight: 34, fontFamily:'Calder-DarkShadow' }}>
                            {item.title}
                        </Text>
                    </View>
                 
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center',}}>
                        {
                            [...Array(data.length)].map((_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: index == currentPage ? 22 : 11,
                                        height: index == currentPage ? 22 :11,
                                        borderRadius:20,
                                        padding:5,
                                        backgroundColor:'#000000',
                                        borderWidth:3,
                                        backgroundColor: index == currentPage
                                            ? COLORS.dots
                                            : COLORS.secondDots,
                                        marginLeft: 6,
                                        marginTop:heightPercentageToDP('42%')
                                    }} ></View>
                            ))
                        }
                    </View>
                </View>


            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground
                source={require('../assets/images/gallerybackground.png')}
                style={ {flex: 2, resizeMode: 'cover' }}>
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
                <FlatList
                    data={data}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item._id}
                    renderItem={renderFlatlistItem}
                    ref={flatlistRef}
                    onViewableItemsChanged={handleViewableItemsChanged.current}
                    viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                    initialNumToRender={1}
                    extraData={SIZES.width}
                />
                <View style={{ width: '100%' }}>
                    {currentPage == IndexofMatch ?
                        <TouchableOpacity onPressIn={() => navigation.navigate('signup')}>
                            <View style={{ backgroundColor: 'white', height: 39, borderRadius: 20, width: '90%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 50 }}>
                                <Text style={{ color: 'black', fontFamily: 'RigSans-Bold', fontSize: 15, lineHeight: 18.45 }}>GET STARTED</Text>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPressOut={() => navigation.navigate('signup3')}>
                            <View style={{ backgroundColor: '#000000', height: 39, borderRadius: 19.5, width: '90%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center',marginBottom:heightPercentageToDP('2%') }}>
                                <Text style={{ color: '#FFFFFF', fontFamily: 'RigSans-SemiBold', fontSize: 15, lineHeight: 18.45 }}>CONTINUE</Text>
                            </View>
                        </TouchableOpacity>}
                </View>
            </ImageBackground>

        </View>
    )
}
export default onboarding;