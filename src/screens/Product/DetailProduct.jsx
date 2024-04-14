import { View, ScrollView, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
import { imagesSVG } from '../../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import ShopCards from "./ShopCards"


import mercadocredito from "../../../assets/tarjetas/mercadoCredito.png"
import amercanExpress from "../../../assets/tarjetas/americanExpress.png"
import argencard from "../../../assets/tarjetas/argencard.png"
import cabalDebito from "../../../assets/tarjetas/cabalDebito.png"
import cencosud from "../../../assets/tarjetas/cencosud.png"
import corrientes from "../../../assets/tarjetas/corrientes.png"
import dinnersClub from "../../../assets/tarjetas/DinnersClub.png"
import falabella from "../../../assets/tarjetas/falabella.png"
import hsbc1 from "../../../assets/tarjetas/hsbc1.png"
import hsbc2 from "../../../assets/tarjetas/hsbc2.png"
import maestro from "../../../assets/tarjetas/maestro.png"
import mastercard from "../../../assets/tarjetas/mastercardd.png"
import mastercardDebito from "../../../assets/tarjetas/masterCardDebito.png"
import mercadoPago from "../../../assets/tarjetas/Mercadopago.png"
import mexico from "../../../assets/tarjetas/mexico.png"
import pagoFacil from "../../../assets/tarjetas/pagoFacil.png"
import rapipago from "../../../assets/tarjetas/rapipago.png"
import shopping from "../../../assets/tarjetas/shopping.png"
import visa from "../../../assets/tarjetas/visa.png"
import visaDebito from "../../../assets/tarjetas/visaDebito.png"
const DetailProduct = ({ route }) => {
    const { selectedItem } = route.params;
    return (
        <ScrollView  contentContainerStyle={styles.container}>
                <Text style={styles.titulo}>{selectedItem.titulo}</Text>
                <Image style={{width: "100%", height: 200}} source={{ uri: selectedItem.image }} />
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
                
                <View style={styles.container}>
                <Text>Medios de pago</Text>
                <Text>Hasta 12 cuotas sin tarjeta</Text>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={mercadocredito}/>
                <Text>Tarjetas de crédito</Text>
                <Text>¡Mismo precio en cuotas con bancos seleccionados!</Text>
                <View>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={visa}/>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={amercanExpress}/>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={mastercard}/>
                </View>
                <Text>Tarjetas de débito</Text>
                <View>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={visaDebito}/>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={maestro}/>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={mastercardDebito}/>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={cabalDebito}/>
                </View>
                <Text>Efectivo</Text>
                <View>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={pagoFacil}/>
                <Image style={{ width: 50, height: 50,marginLeft:5,objectFit:"contain" }} source={rapipago}/>
                </View>
                <Button title="Conocé otros medios de pago" />
                </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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