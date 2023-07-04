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
        marginBottom: 20,
    },
    viewSorteio: {
        marginTop:30,
        marginBottom: 30,
        right: 35,
    },
    viewGanhador: {
        flexDirection: 'column',
    },
    text: {
        fontWeight: 700,
        fontSize: 20,
        color:'#003150',
    },
    text2: {
        fontWeight: 700,
        fontSize: 16,
        marginBottom: 5,
    },
    text3: {
        width:330,
        fontWeight: 400,
        fontSize: 16,
        marginBottom: 5,
    },
    textGanhador: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 700,
    },
    ganhadorResultado: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#003150',
        height: 45,
        width: 85,
        borderRadius: 6,
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
        marginRight: 105,
    },
    flexbox: {
        flexDirection: 'row'
    },
    textBox: {
        fontWeight:700,
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