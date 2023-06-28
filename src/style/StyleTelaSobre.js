import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#38B6FF',
        color: '#fff',
        flex: 1,
        // justifyContent: 'center',
    },
    titulo: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 20,
        color: "#000",
        textAlign: 'center',
    },
    text: {
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        fontWeight: 500,
        fontSize: 17,
        marginBottom: 40,
    },
    container: {
        top: -20,
        flex: 1,
        backgroundColor: '#38B6FF',
        color: "#fff",
        justifyContent: 'center',
    },
    ViewImg: {
        marginTop: 10,
    },
    textPerguntaInput: {
        fontWeight: 700,
        fontSize: 18,
        color: '#000',

    },
    textInput: {
        width: 330,
        height: 50,
        backgroundColor: '#38B6FF',
        borderRadius: 0,
        marginBottom: 10,
    },
    button: {
        height: 40,
        borderRadius: 6
        ,
    },
    dev: {
        textAlign: 'center',
        color: '#003150',
        bottom: 10,
    },
});

export default styles;