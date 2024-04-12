import { View, ScrollView, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
import { imagesSVG } from '../../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ShopCards from "./ShopCards"
const DetailProduct = ({ route }) => {
    const { selectedItem } = route.params;
    return (
        <ScrollView  contentContainerStyle={styles.container}>
            
                <Text style={styles.titulo}>{selectedItem.titulo}</Text>
                <Image style={styles.imagen} source={{ uri: selectedItem.image }} />
                <Text style={styles.precio}>${selectedItem.price}</Text>
                <Text style={{ color: "#6CA6FB", marginLeft: 10 }}>Ver los medios de pago</Text>
                <Text style={{ marginLeft: 10 }}>Stock disponible</Text>
                <Button title='Agregar al carrito/' />
                <Button title='Preguntar' />
                <Text style={{ marginLeft: 10 }}>Vendido por el usuario {selectedItem.user}</Text>
                <Text>
                    <Text><Ionicons name="return-down-back" size={24} color="#969696" /></Text>
                    <Text style={{ color: "#6CA6FB" }}> Devolucion gratis!.</Text>
                    <Text style={{ color: "#969696" }}>Tenes 30 dias desde que lo recibís.</Text>
                </Text>
                <Text>
                    <Text><Ionicons name="shield-checkmark-outline" size={24} color="#969696" /></Text>
                    <Text style={{ color: "#6CA6FB" }}>Compra Protegida,</Text>
                    <Text style={{ color: "#969696" }}>Recibí el producto que esperabas o te devolvemos tu dinero.</Text>
                </Text>
                <Button
                    title="Guardar en una lista"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <View>
                    <Text>Lo que tenés que saber de este producto:</Text>
                    <Text>{selectedItem.Description}</Text>
                </View>
                <View>
                    <Text>Productos relacionados</Text>
                    {/* Agregar SliderdeProductos */}
                </View>
                <ShopCards />
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        width: "100%",
        paddingVertical: 20,
    },
    titulo: {
        fontSize: 25,
        marginLeft: 10
    },
    precio: {
        fontSize: 25,
        marginLeft: 10
    },
    imagen: {
        width: "100%",
        marginHorizontal: 5,
        flex: 1,
        resizeMode: "contain",
    },
    ContenidoBoton: {
        color: "white",
        width: "70px",
        height: "10px",
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4285F4',
        padding: 10,
        borderRadius: 20
    },
    DescripcionTexto: {
        fontSize: 12,
        color: "gray",
    }
});


export default DetailProduct;