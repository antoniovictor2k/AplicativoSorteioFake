import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#003150',
        color: '#fff',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#003150',
        color: "#fff",
    },
    cabecalho: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 20,
        flexDirection: 'row'
    },
    cabecalhoText: {
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        color: "#fff"
    },
    tituloLogo: {
        marginLeft: 10,
        color: '#fff',
        fontWeight: 700,
        fontSize: 18,
    },
    linhaHorizotal: {
        color: '#fff',
        marginBottom: 10,
    },
    links: {
        marginLeft: 15,
        marginTop: 50,
        marginBottom: 50,
        color: "#fff"
    },
    link: {
        textDecorationLine: 'underline',
        color: "#fff"
    },
    linkBold: {
        fontWeight: 700
    },
    dev: {
        textAlign: 'center',
        color: '#38B6FF',
        bottom: 10,
    },
    drawerLabel: {
        color: "#fff",
        fontWeight: 700,
        fontSize: 18,
    },
    drawerIcon: {
        fontSize: 18,
        color: "#fff",
    },

});

export default styles;