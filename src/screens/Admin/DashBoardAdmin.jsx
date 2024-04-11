import React from 'react';
import { View,Text,Image } from 'react-native';

const DashBoardAdmin = ({item}) => {
    return (
        <View>
            <Text>{item.nombre}</Text>
            <Image source={item.image}/>
            <Text>{item.precio}</Text>
            <Text>Ver los medios de pago</Text>
            <Text>Stock disponible</Text>
            <Button></Button>
            <Button>Comprar ahora</Button>
            <Button>Agregar al carrito</Button>
            <hr />
            <Button>Preguntar</Button>
            <Text>Vendido por {item.vendedor}</Text>
            <Text>
            <Text></Text>
            <Text> Devolucion gratis.</Text>
            <Text>Tenes 30 dias desde que lo recibís.</Text>
            </Text>
            <Text>
                <Text></Text>
                <Text>Compra Protegida,</Text>
                <Text>recibí el producto que esperabas o te devolvemos tu dinero.</Text>
            </Text>
            <Button>Guardar en una lista</Button>
            <View>
                <Text>Lo que tenés que saber de este producto</Text>
                <Text>{item.descripcion}</Text>
            </View>
            <View>
                <Text>Productos relacionados</Text>
                <FlatList>
                
                </FlatList>
            </View>
            <View>
                <Text>Medios de pago</Text>
                <Text>Hasta 12 cuotas sin tarjeta</Text>
                <Image/>
                <Text>Tarjetas de crédito</Text>
                <Text>¡Mismo precio en cuotas con bancos seleccionados!</Text>
                <View>
                    <Image source={}/>
                    <Image source={}/>
                    <Image source={}/>
                </View>
                <Text>Tarjetas de débito</Text>
                <View>
                    <Image source={}/>
                    <Image source={}/>
                    <Image source={}/>
                    <Image source={}/>
                    <Image source={}/>
                    <Image source={}/>
                </View>
                <Text>Efectivo</Text>
                <View>
                    <Image source={}/>
                    <Image source={}/>
                </View>
                <Button>Conocé otros medios de pago</Button>

            </View>
        </View>
    );
};

export default DashBoardAdmin;