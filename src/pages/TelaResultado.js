import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar, IconButton, Badge, ActivityIndicator } from "react-native-paper";
import { View, ScrollView, Text, Image, Linking } from "react-native";
import { useRoute } from '@react-navigation/native';


import styles from "../style/StyleTelaResultado";

function TelaResultado() {
    const route = useRoute();

    const [guardarNumeroSorteado, setGuardarNumeroSorteado] = useState(null);
    const [qtdNumeros, setQtdNumeros] = useState(1000);
    const [loading, setLoading] = useState(false);


    const { itemQtdNumeros, itemResultadoSorteio } = route.params ?? {};

    useEffect(() => {

        setQtdNumeros(itemQtdNumeros);
        setGuardarNumeroSorteado(itemResultadoSorteio);
        // enviar true e ativa tela carregando ...
        setLoading(true);

    }, [itemQtdNumeros, itemResultadoSorteio]);

    // Ao passa os segundos Tela Carregando retorna para False,
    setTimeout(() => {
        setLoading(false);
      }, 1350);

    if(loading)
    {
        return(
            <View style={styles.containerPrincipal}>
                <View style={styles.container}>
                <ActivityIndicator
                  animating={true}
                  color={'#003150'}
                  size={'large'}
                />
                <Text style={styles.textLoading}>Aguarde...</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.viewSorteio}>
                <Text style={styles.text}>De 1 a {qtdNumeros}</Text>
                <Text style={styles.text}>Foram sorteados {qtdNumeros} números</Text>
            </View>
            <View style={styles.container}>

                <View style={styles.viewGanhador}>
                    <Text style={styles.textGanhador}>Ganhador</Text>
                    <Badge
                        size={50}
                        style={styles.ganhadorResultado}
                    >{guardarNumeroSorteado}</Badge>
                </View>

                <View style={styles.butoes}>
                    <IconButton
                        iconColor={'#fff'}
                        containerColor="#000"
                        size={24}
                        icon={'arrow-right-top-bold'}
                        style={styles.icon}
                        onPress={() => { alert('Hello Antonio') }}
                    />
                    <Button
                        buttonColor="#000"
                        textColor="#fff"
                        icon={'content-save-outline'}
                        style={styles.button}
                        onPress={() => { alert('OK') }}
                    >
                        Salvar
                    </Button>
                </View>

            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
}

export default TelaResultado;