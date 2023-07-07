import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#38B6FF',
        color: '#fff',
        flex: 1,
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
        marginTop: 30,
        marginLeft: 15,
        marginBottom: 40,
    },
    viewGanhador: {
        flexDirection: 'column',
    },
    text: {
        fontWeight: 700,
        fontSize: 20,
        color: '#000',
    },
    text2: {
        fontWeight: 700,
        fontSize: 16,
        marginBottom: 5,
    },
    text3: {
        width: 330,
        fontWeight: 400,
        fontSize: 16,
        marginBottom: 5,
        color: '#fff',
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
        // marginTop: 30,
    },
    textInput: {
        width: 330,
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 6,
        marginBottom: 10,
        borderColor: "#fff",
        borderWidth: 1,
        borderStyle: 'solid',
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
        // marginTop: 10,
        marginBottom: 20,
        // marginRight: 105,
        // justifyContent:"center",
        // alignItems:'center',
        // alignContent:'center'
    },
    viewCard: {
        backgroundColor: "#003150",
        padding: 12,
        borderRadius: 6,
        minWidth: 355,
        marginBottom: 15,
    },
    flexbox: {
        flexDirection: 'row',
        marginBottom: 5
    },
    textBox: {
        fontWeight: 700,
        fontSize: 18,
        marginTop: 4,
        marginTop: 4,
        marginLeft: 0,
        color: '#fff',
    },
    button: {
        height: 40,
        width: 330,
        borderRadius: 6,
    },
    dev: {
        marginTop: 40,
        textAlign: "center",
        color: '#003150',
        bottom: 10,
    },
});

export default styles;