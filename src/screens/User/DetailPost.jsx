import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const DetailPost = ({item}) => {
    const [producto, setProducto] = useState("")
    const [carga, setCarga] = useState(false)
    
    
    useEffect(()=>{
        //cargar producto
    },[])

    return (
        <View>
            <Text>HOLA</Text>
        </View>
    );
};

export default DetailPost;