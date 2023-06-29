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
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#38B6FF',
        color: "#fff",
        justifyContent: 'center',
        top: -20,
        alignItems: 'center',

    },
    viewText: {
        alignItems: 'center',
        gap: 8
    },
    text: {
        fontWeight: 700,
        fontSize: 16,
    },
    viewIcones: {
        flexDirection: 'column',
        margin: -7,
        padding: 0,
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