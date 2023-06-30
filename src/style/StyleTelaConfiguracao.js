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
        marginBottom:20,
    },
    viewSorteio: {
        marginBottom: 30,
        right: 55,
    },
    viewGanhador: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    text: {
        fontWeight: 700,
        fontSize: 20,
    },
    text2: {
        fontWeight: 700,
        fontSize: 16,
    },
    textGanhador: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 700,
    },
    ganhadorResultado: {
        marginLeft:15,
        marginRight:15,
        backgroundColor: '#003150',
        height: 45,
        width: 85,
        marginBottom: 10,
    },
    butoes: {
        marginTop: 30,
    },
    textInput: {
        width: 330,
        height: 50,
        backgroundColor: '#003150',
        borderRadius: 6,
        marginBottom: 10,
    },
    viewDivider: {
        marginTop: 25,
    },
    divider: {
        width: 150,
        color: "#fff",
        backgroundColor: '#000',
    },
    textDivider: {
        fontWeight: 400,
        fontSize: 18,
    },
    viewBox: {
        marginTop: 10,
        marginBottom: 20,
        marginRight:105,
    },
    flexbox: {
        flexDirection: 'row'
    },
    textBox: {
        fontSize: 18,
        marginTop: 4,
        marginLeft: 0,
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