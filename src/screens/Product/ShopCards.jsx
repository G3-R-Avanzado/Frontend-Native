import {FlatList, Image,Button, Text, View, StyleSheet } from "react-native";
import { imagesSVG } from "../../styles/globalStyles";

const ShopCards = () => {
    return (
        <View>
                <View style={styles.container}>
                <Text>Medios de pago</Text>
                <Text>Hasta 12 cuotas sin tarjeta</Text>
                <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.mercadoCredito }} />
                <Text>Tarjetas de crédito</Text>
                <Text>¡Mismo precio en cuotas con bancos seleccionados!</Text>
                <View>
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.creditoInternacionales.visa }} />
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.creditoInternacionales.americanExpress }} />
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.creditoInternacionales.masterCard }} />
                </View>
                <Text>Tarjetas de débito</Text>
                <View>
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.debitoInternacionales.visa }} />
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.debitoInternacionales.maestro }} />
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.debitoInternacionales.mastercard }} />
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.cabal }} />
                </View>
                <Text>Efectivo</Text>
                <View>
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.efectivo.pagoFacil }} />
                    <Image style={{width:"100%",height:"10%"}} source={{ uri: imagesSVG.efectivo.rapipago }} />
                </View>
                <Button title="Conocé otros medios de pago" />
            </View>
        </View>
    );
};
const styles=StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor:"white",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    imagen: {
        width: "100%",
        height:"50%",
        marginHorizontal:5,
        flex: 1,
        objectFit: "contain",
        justifyContent: "center"
    },
})
export default ShopCards;