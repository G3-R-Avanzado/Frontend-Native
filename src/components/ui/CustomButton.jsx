import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export const CustomButton = ({
    text,
    btnColor = '#0080FF',
    marginH = 0,
    marginV = 10,
    borderR = 10,
    paddingV = 10,
    onClick,
    color='#000000'
}) => {

    return (
        <View>
            <TouchableOpacity 
            style={[style.btn, {
                backgroundColor: btnColor,
                marginHorizontal: marginH,
                marginVertical: marginV,
                borderRadius: borderR,
                paddingVertical: paddingV
            }]}
            onPress={onClick}  
            >
                <Text style={[style.btnText, {color: color}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({ 
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4
    },
    btnText: { 
        fontWeight: 'bold',
        fontSize: 18,
    }
})