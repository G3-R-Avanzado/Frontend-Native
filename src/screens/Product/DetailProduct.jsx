import { View, ScrollView, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import mercadocredito from "../../../assets/tarjetas/mercadoCredito.png"
import amercanExpress from "../../../assets/tarjetas/americanExpress.png"
import cabalDebito from "../../../assets/tarjetas/cabalDebito.png"
import maestro from "../../../assets/tarjetas/maestro.png"
import mastercard from "../../../assets/tarjetas/mastercardd.png"
import mastercardDebito from "../../../assets/tarjetas/masterCardDebito.png"
import pagoFacil from "../../../assets/tarjetas/pagoFacil.png"
import rapipago from "../../../assets/tarjetas/rapipago.png"
import visa from "../../../assets/tarjetas/visa.png"
import visaDebito from "../../../assets/tarjetas/visaDebito.png"
import useAlert from '../../hooks/useAlert';


const DetailProduct = ({ route }) => {
    const { selectedItem } = route.params;
    const { showAlert } = useAlert();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{marginHorizontal:3}}>
            <Text style={styles.titulo}>{selectedItem.titulo}</Text>
            <Image style={{ width: "100%", height: 200 }} source={{ uri: selectedItem.image }} />
            <Text style={styles.precio}>${selectedItem.price}</Text>
            <Text style={{ color: "#6CA6FB", marginLeft: 10 }}>Ver los medios de pago</Text>
            <Text style={{ marginLeft: 10 }}>Stock disponible</Text>
            <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                <Button title='Agregar al carrito' />
            </View>
            <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                <Button title='Preguntar' />
            </View>
            <Text style={{ marginLeft: 10 }}>Vendido por el usuario {selectedItem.user.name}</Text>
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
            <View style={{ marginVertical: 5, marginHorizontal: 5 }}>
                <Button
                    title="Guardar en una lista"
                    onPress={() => showAlert({ messageTitle: "¡Guardado Exitosamente!", messageBody: "Se guardó en su lista exitósamente" })}
                />
            </View>
            <View>
                <Text>Lo que tenés que saber de este producto:</Text>
                <Text>{selectedItem.Description}</Text>
            </View>
            <View>
                <Text>Productos relacionados</Text>
            </View>
            <View style={styles.container}>
                <Text>Medios de pago</Text>
                <Text>Hasta 12 cuotas sin tarjeta</Text>
                <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={mercadocredito} />
                <Text>Tarjetas de crédito</Text>
                <Text>¡Mismo precio en cuotas con bancos seleccionados!</Text>
                <View style={styles.contenedorTarjetas}>
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={visa} />
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={amercanExpress} />
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={mastercard} />
                </View>
                <Text>Tarjetas de débito</Text>
                <View style={styles.contenedorTarjetas}>
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={visaDebito} />
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={maestro} />
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={mastercardDebito} />
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={cabalDebito} />
                </View>
                <Text>Efectivo</Text>
                <View style={styles.contenedorTarjetas}>
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={pagoFacil} />
                    <Image style={{ width: 50, height: 50, marginLeft: 5, objectFit: "contain" }} source={rapipago} />
                </View>
                <Button title="Conocé otros medios de pago" />
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginHorizontal:1,
        paddingVertical: 20,
    },
    contenedorTarjetas:{
        flex:1,
        flexDirection:"row",
        marginVertical:5
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