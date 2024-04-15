import React from 'react';
import { Text, View } from 'react-native';
import Spinner from './Spinner';
import VisualizadorProductos from './SliderProductos';

const Busqueda = ({ busqueda, carga }) => {
    return (
        <View>
            {busqueda == "" ?
                <></> :
                (<>
                    {carga ?
                        <Spinner /> :
                        (<VisualizadorProductos />)
                    }
                </>
                )
            }
        </View>
    );
};

export default Busqueda;