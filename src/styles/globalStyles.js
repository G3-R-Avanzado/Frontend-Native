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