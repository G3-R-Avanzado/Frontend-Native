import { View, Text, Image, FlatList } from 'react-native';

const AllCards = () => {
    return (
        <View>
            <Text>Podés pagar tus compras con cualquiera de estos medios. Es rápido y seguro, siempre.</Text>
            <Text>Tarjetas de crédito</Text>
            <Text>Acreditación instantánea.</Text>
            <Text>Mismo precio en hasta 6 cuotas con estos bancos</Text>
            <FlatList>
            </FlatList>
            <Text>O hasta 12 cuotas con interés</Text>
            <FlatList>
            </FlatList>
            <Text>Dinero disponible en Mercado Pago</Text>
            <Text>Al finalizar tu compra, pagás con el dinero disponible en tu cuenta. Podés ingresar dinero a Mercado Pago por el Débito inmediato, transferencia bancaria o en efectivo.</Text>
            <Text>Acreditación instantánea.</Text>
            <Image source={imagesSVG.mercadoPago} />
            <Text>Tarjetas de débito</Text>
            <Text>Acreditación instantánea</Text>
            <FlatList>

            </FlatList>
            <Text>Efectivo</Text>
            <FlatList>

            </FlatList>
        </View>
    );
};

export default AllCards;