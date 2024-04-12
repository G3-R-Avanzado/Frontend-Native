import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import iconUser from '../../../assets/usuario-de-perfil.png'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const InputImage = () => {
    const [image, setImage] = useState(null) 

    const selectedImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
      
          if (!result.canceled) {
            setImage(result.assets[0].uri)  
          }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.container]} onPress={selectedImage}>
                <Image source={image != null ? {uri: image} : iconUser} style={styles.image}/>
                <Feather name="edit" size={30} color="black" style={styles.iconEdit}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        with: '100%',
        height: '100%',
        backgroundColor: '#D2D2D2'
    },
    image: {
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    iconEdit:{
        bottom: 0, 
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#D2D2D2',
        borderRadius: 3
    }

})

export default InputImage;