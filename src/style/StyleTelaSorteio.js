import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: '#38B6FF',
        color: '#fff',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        top:-20,
        // marginTop:0,
        flex: 1,
        backgroundColor: '#38B6FF',
        color: "#fff",
        justifyContent:'center',
    },
    ViewImg:{
        marginTop:10,
    },
    textPerguntaInput:{
        fontWeight:700,
        fontSize:18,
        color:'#000',
        
    },
    textInput:{
        width:330,
        height:50,
        backgroundColor: '#38B6FF',
        borderRadius:0,
        marginBottom:10,
    },
    button:{
        height:40,
borderRadius:6
,
    },
    dev:{
color:'#003150',
bottom:10,
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