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
    },
    viewText: {
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'center',
    },
    text: {
        fontWeight: 700,
        fontSize: 16,
    },
    viewIcones: {
        marginTop: 15,
        width: 330,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    viewMaps: {
        top: -100,
        marginBottom: 30,
        width: 330,
        height: 270,
        borderRadius: 10,
    },
    dev: {
        color: '#003150',
        bottom: 10,
    },
});

export default styles;