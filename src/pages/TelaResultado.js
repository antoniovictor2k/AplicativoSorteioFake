import { React, useState, useEffect, useRef } from "react";
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import { Button, Avatar, Badge, ActivityIndicator } from "react-native-paper";
import { View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import { captureRef } from 'react-native-view-shot';

import styles from "../style/StyleTelaResultado";


function TelaResultado({ navigation }) {
    const route = useRoute();
    const { itemQtdNumeros, itemResultadoSorteio } = route.params ?? {};
    const isWinner = true;

    const [guardarNumeroSorteado, setGuardarNumeroSorteado] = useState(0);
    const [qtdNumeros, setQtdNumeros] = useState(0);
    const [loading, setLoading] = useState(false);
    const [dateTime, setDateTime] = useState(null);


    useEffect(() => {

        setQtdNumeros(itemQtdNumeros);
        setGuardarNumeroSorteado(itemResultadoSorteio);

        // marcar o dia e horário que foi feito o sorteio.
        const dataAtual = new Date();

        const ano = dataAtual.getFullYear();
        const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
        const dia = dataAtual.getDate().toString().padStart(2, '0');

        const hora = dataAtual.getHours().toString().padStart(2, '0');
        const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
        const segundo = dataAtual.getSeconds().toString().padStart(2, '0');
        const dateEHorario = `Dia ${dia}/${mes}/${ano} às: ${hora}:${minuto}:${segundo}`;


        if (itemQtdNumeros) {
            setDateTime(dateEHorario);
            // enviar true e ativa tela carregando ...
            setLoading(true);
        }

    }, [itemQtdNumeros, itemResultadoSorteio]);

    // Ao passa os segundos Tela Carregando retorna para False,
    setTimeout(() => {
        setLoading(false);
    }, 1350);

    // tira Print e Compartilhar.

    const handleShareScreenshot = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();

            if (status === 'granted') {

                captureRef(viewRef, {
                    format: 'jpg',
                    quality: 0.8,
                })
                    .then(async uri => {
                        await MediaLibrary.saveToLibraryAsync(uri);
                        await Sharing.shareAsync(uri);
                    })
                    .catch(error => {
                        console.log('Erro ao capturar o print de tela:', error);
                    });
            } else {
                console.log('Permissão de acesso à mídia não concedida.');
            }
        } catch (error) {
            console.log('Erro ao solicitar permissão de acesso à mídia:', error);
        }
    };

    const viewRef = useRef();

    // return tela carregando e depois retorne tela padrão. 

    if (loading) {
        return (
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
        <View style={styles.containerPrincipal}  >
            <View style={styles.viewSorteio}  >
                <Text style={styles.text}>De 1 a {qtdNumeros}</Text>
                <Text style={styles.text}>Foram sorteados {qtdNumeros} números</Text>
            </View>

            <View ref={viewRef} style={styles.printContainer}>
                <View>
                    <Avatar.Image size={130}
                        source={require('../../assets/SFSorteio.png')}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </View>
                <Text style={styles.printTitulo}>
                    Resultado do Sorteio
                </Text>
                <View style={styles.printViewResultado}>
                    <Text style={styles.printText}>Ganhador</Text>
                    <Text style={styles.printGanhador}>{guardarNumeroSorteado}</Text>
                </View>
                <Text style={styles.printText}>
                    Sorteio realizado
                </Text>
                <Text style={styles.printResultado}>
                    {dateTime}
                </Text>
                <Text style={styles.printDev}>Dev: @antoniovictor2k</Text>
            </View>

            <View style={styles.container} >

                <View style={styles.viewGanhador}>
                    <Text style={styles.textGanhador}>Ganhador</Text>
                    <Badge
                        size={50}
                        style={[styles.ganhadorResultado]}
                    >{guardarNumeroSorteado}
                    </Badge>
                    <Text style={styles.dateTime}>Último Sorteio: {dateTime}</Text>
                </View>

                <View style={styles.butoes}>
                    <Button
                        buttonColor="#000"
                        textColor="#fff"
                        icon={'share-all'}
                        style={styles.button}
                        onPress={handleShareScreenshot}
                    >
                        Compartilhar
                    </Button>
                    <Button
                        textColor="#003150"
                        icon={'poker-chip'}
                        style={styles.button}
                        onPress={() => { navigation.navigate('Sorteio') }}
                    >
                        Sortear novamente
                    </Button>
                </View>

            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
}

export default TelaResultado;