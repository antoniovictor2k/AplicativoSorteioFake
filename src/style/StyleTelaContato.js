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
        marginTop: 30,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#38B6FF',
        color: "#fff",
    },
    tituloText: {
        fontSize: 18,
        fontWeight: 700,
        color: '#003150',
        marginBottom: 15
    },
    viewText: {
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: '#003150',
        padding: 12,
        borderRadius: 6,
    },
    text: {
        color: "#fff",
        fontWeight: 700,
        fontSize: 16,
    },
    viewIcones: {
        width: 330,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#003150',
        padding: 6,
        borderRadius: 6,
        marginBottom: -12,
    },
    dev: {
        color: '#003150',
        bottom: 10,
    },
});

export default styles;