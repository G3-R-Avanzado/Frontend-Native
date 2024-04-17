import {FlatList, Image,Button, Text, View, StyleSheet } from "react-native";
import { imagesSVG } from "../../styles/globalStyles";
import { useEffect } from "react";
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

const ShopCards = () => {
    return (
        <View>
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