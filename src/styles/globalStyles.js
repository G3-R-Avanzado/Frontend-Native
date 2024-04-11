import { StyleSheet } from "react-native"


export const stylesNavegation = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    SearchNavigator: {
        marginRight: 50,
        height: 40,
        width:"100%",
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: "white"
    },
    ButtonNavigator: {
        flex: 1,
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: '#FFE600',
    },
    TextButtonNavigator: {
        transform: [{ rotate: "90deg" }],
        alignContent: "center",
        width: 20,
        marginTop: 2,
        fontWeight: "bold",
        fontSize: 25
    },
    CarouselContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE600', 
        backgroundImage: 'linear-gradient(180deg, rgba(255,230,0,1) 0%, rgba(255,255,255,1) 100%)', 
    },
    CarouselItems: {
        flex: 1,
        objectFit: "contain",
        margin: 10,
        height: 200,
    },
    envio:{
        
        border:1,
        justifyContent:"center",
        alignItems:"top"
    },
    ButtonEnvios:{
        border:1,
        borderRadius:20,
    },
    navigatorContainer: {
        flexDirection: "row",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: "center",
    },
    inputContainer:{
        backgroundColor:"white",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        borderRadius: 50,
    }
});

export const imagesSVG={
    mercadoCredito:"https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg",
    creditoInternacionales:{
        visa:"https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg",
        americanExpress:"https://http2.mlstatic.com/storage/logos-api-admin/b4785730-c13f-11ee-b4b3-bb9a23b70639-m.svg",
        masterCard:"https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
    },
    debitoInternacionales:{
        visa:"https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg",
        maestro:"https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg",
        mastercard:"https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
    },
    efectivo:{
        pagoFacil:"https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg",
        rapipago:"https://http2.mlstatic.com/storage/logos-api-admin/87664240-ec62-11ee-a3f2-6d259ea642f1-m.svg"
    },
    credito6Cuotas:{
        bancoCorrientes:"https://http2.mlstatic.com/storage/logos-api-admin/bb3f73f0-b3e3-11ee-a371-7b13a46506eb-m.svg",
        americanExpressMexico:"https://http2.mlstatic.com/storage/logos-api-admin/eeafda50-f3be-11eb-826e-6db365b9e0dd-m.svg",
        hsbc1:"https://http2.mlstatic.com/storage/logos-api-admin/fe827370-f3be-11eb-8e0d-6f4af49bf82e-m.svg",
        hsbc2:"https://http2.mlstatic.com/storage/logos-api-admin/6e4d1e10-1230-11eb-bbd0-1f079a571ae4-m.svg"
    },
    credito12Cuotas:{
        visa:"https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg",
        cabal:"https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg",
        dinners:"https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-m.svg",
        shopping:"https://http2.mlstatic.com/storage/logos-api-admin/33ea00e0-571a-11e8-8364-bff51f08d440-m.svg",
        cencosud:"https://http2.mlstatic.com/storage/logos-api-admin/15c77ee0-9ebc-11ee-9af3-afd2eb6c9602-m.svg",
        argencard:"https://http2.mlstatic.com/storage/logos-api-admin/d7e55980-f3be-11eb-8e0d-6f4af49bf82e-m.svg",
        cmrFalabella:"https://http2.mlstatic.com/storage/logos-api-admin/26fbb110-571c-11e8-95d8-631c1a9a92a9-m.svg",
        mastercard:"https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg",
        americanExpress:"https://http2.mlstatic.com/storage/logos-api-admin/b4785730-c13f-11ee-b4b3-bb9a23b70639-m.svg",
        naranja:""
    },
    mercadoPago:"https://http2.mlstatic.com/storage/logos-api-admin/b4534650-571b-11e8-95d8-631c1a9a92a9-m.svg",
}