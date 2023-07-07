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
        marginTop: 30,
        right: 50
    },
    text: {
        fontWeight: 700,
        fontSize: 18,
        color: '#000'
    },
    textGanhador: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 10,
    },
    ganhadorResultado: {
        backgroundColor: '#003150',
        height: 100,
        width: 300,
        borderRadius: 20,
        marginBottom: 50,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2,
    },
    butoes: {
        marginTop: 50,
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