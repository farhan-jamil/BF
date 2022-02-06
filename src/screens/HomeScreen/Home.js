import { View, Text } from 'react-native';
import React from 'react';
import Buttons from '../../component/Buttons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function Home({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: wp(5) }}>

                <Buttons title='Navigate' onpress={()=>navigation.navigate('Logout')}/>
            </View>
        </View>
    );
}
