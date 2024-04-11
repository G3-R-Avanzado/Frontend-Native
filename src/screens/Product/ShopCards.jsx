import {FlatList, Image, Text, View } from "react-native";
import { imagesSVG } from "../../styles/globalStyles";

const ShopCards = () => {
    return (
        <View>
            <View>
                <Text>Medios de pago</Text>
                <Text>Hasta 12 cuotas sin tarjeta</Text>
                <Image source={imagesSVG.mercadoCredito} />
                <Text>Tarjetas de crédito</Text>
                <Text>¡Mismo precio en cuotas con bancos seleccionados!</Text>
                <View>
                    <Image source={imagesSVG.creditoInternacionales.visa} />
                    <Image source={imagesSVG.creditoInternacionales.americanExpress} />
                    <Image source={imagesSVG.creditoInternacionales.masterCard} />
                </View>
                <Text>Tarjetas de débito</Text>
                <View>
                    <Image source={imagesSVG.debitoInternacionales.visa} />
                    <Image source={imagesSVG.debitoInternacionales.maestro} />
                    <Image source={imagesSVG.debitoInternacionales.mastercard} />
                    <Image source={imagesSVG.cabal} />
                </View>
                <Text>Efectivo</Text>
                <View>
                    <Image source={imagesSVG.efectivo.pagoFacil} />
                    <Image source={imagesSVG.efectivo.rapipago} />
                </View>
                <Button>Conocé otros medios de pago</Button>
            </View>
        </View>
    );
};

export default ShopCards;