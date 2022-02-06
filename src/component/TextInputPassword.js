import { View, TextInput } from 'react-native';
import React from 'react';
import { color } from './Colors';

export default function TextInputPassword({ placeholder, value, onchangetext, borderWidth, borderColor }) {

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                elevation: 5,
                shadowColor: color.black,
                borderRadius: 10,
                marginTop: 20,



            }}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={color.grey}
                    value={value}
                    onChangeText={onchangetext}
                    style={{
                        backgroundColor: color.white, width: '100%', borderRadius: 10, paddingLeft: 15,

                        borderColor: borderColor ,
                        borderWidth:borderWidth
                    }}
                />

            </View>
        </View>
    );
}
