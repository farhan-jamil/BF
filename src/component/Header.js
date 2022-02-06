import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from './Colors';
import { h2 } from './Texts';
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Header({ title, name,onpress }) {
    return (
        <View style={styles.header}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5)
            }}>
                <View style={{ width: 25 }}>

                </View>
                <View>
                    <Text style={h2}>{title}</Text>

                </View>
                <TouchableOpacity onPress={onpress}>
                    <View>
                        <AntDesign name={name} size={30} />

                    </View>
                </TouchableOpacity>
            </View>
        </View>


    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: hp(15),
        backgroundColor: color.primary,
        justifyContent: 'center',
        elevation: wp(10),
        shadowColor: color.black,


    }
});

