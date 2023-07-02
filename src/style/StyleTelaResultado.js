import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#38B6FF',
        color: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
        backgroundColor: '#38B6FF',
        color: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewSorteio: {
        marginBottom: 30,
        right: 100
    },
    text: {
        fontWeight: 700,
        fontSize: 16,
    },
    textGanhador: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 700,
    },
    ganhadorResultado: {
        backgroundColor: '#003150',
        height: 51,
        width: 194,
        borderRadius: 6,
        marginBottom: 10,
    },
    butoes: {
        marginTop: 30,
    },
    icon: {
        left: 282,
    },
    button: {
        height: 40,
        width: 330,
        borderRadius: 6,
    },
    dev: {
        color: '#003150',
        bottom: 10,
    },
});

export default styles;