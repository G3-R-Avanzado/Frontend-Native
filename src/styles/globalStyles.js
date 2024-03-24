import { StyleSheet } from "react-native"


export const stylesGlobals = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#FFFFFF', 
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },
    navigatorContainer: {
        flexDirection: "row",
        backgroundColor: '#FFE600', 
        alignItems: 'center',
        justifyContent:"start",
        paddingTop: 20, 
        paddingBottom: 20, 
    },
    SearchNavigator: {
        flex: 7,
        marginRight:20,
        height: 40,
        padding: 10,
        borderRadius: 100,
        backgroundColor: "white"
    },
    ButtonNavigator: {
        flex: 1,
        alignItems:"center",
        borderRadius: 100,
        backgroundColor: '#FFE600',
    },
    TextButtonNavigator:{
        transform: [{ rotate: "90deg" }],
        alignContent:"center",
        width:20,
        marginTop:2,
        fontWeight:"bold",
        fontSize:25
    },
    CarouselContainer:{
        flex:10,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE600', // Fondo base antes del degradado
        backgroundImage: 'linear-gradient(180deg, rgba(255,230,0,1) 0%, rgba(255,255,255,1) 100%)', // Degradado lineal
    }
});