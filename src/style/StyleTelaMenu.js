import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#003150',
        color: '#fff',
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#003150',
        color: "#fff"
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

        color: "#fff"
    },
    linkBold: {
        fontWeight: 700
    },
    developer: {
        borderColor: '#ff0000',
        borderStyle: 'solid',
        borderWidth: 2,
        flex: 1,
        marginBottom: -10,
        alignItems: 'center',
        // backgroundColor: '#fff',
        padding: 10,
    },
    developerText: {
        color: "#fff"
    },
    drawerLabel: {
        color: "#fff",
        fontWeight: 700,
        fontSize: 18,
    },
    drawerIcon: {
        color: "#fff",
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default styles;