import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import { globalStyles } from '../../styles/globalStyles';
import InputImage from '../../components/ui/InputImage';
import { useSelector } from 'react-redux'
import Register  from '../Auth/Register';

const DetailUser = () => {
    const {user} = useSelector((store)=>store.auth)

    console.log(user);

    return (
        <View style={[globalStyles.container]}>
            <View style={{flex:1, flexDirection: 'row', width: '100%', padding: 2}}>
                <View style={style.imgTitle}>
                    <InputImage/>
                </View>
                <View style={style.detailTitle}>
                    <Text style={globalStyles.title}>{user.name}</Text>
                </View>
            </View>
            <View style={{flex:4, width: '100%'}}>
                <Register
                    user={user}
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