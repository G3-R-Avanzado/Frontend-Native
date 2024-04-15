import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from "react-native";
import { globalStyles } from '../../styles/globalStyles';
import Register  from '../Auth/Register';


import { convertImageToBase64, convertBase64ToImage } from '../../helpers/Helpers';



const DetailUser = () => {
    return (
        <View style={[globalStyles.container]}>
            <View style={{flex:4, width: '100%'}}>
                <Register
                    showLogo={false}
                    textConfirm={'Actualizar Datos'}   
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    imgTitle:{
        flex:2,
    },
    detailTitle:{
        flex:3,
        paddingLeft: 4,
        justifyContent: 'center'
    },
})

export default DetailUser;