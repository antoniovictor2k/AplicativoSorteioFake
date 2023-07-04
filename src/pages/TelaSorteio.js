import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar } from "react-native-paper";
import { View, ScrollView, Text, Image, Alert } from "react-native";

import styles from "../style/StyleTelaSorteio";

function TelaSorteio() {
    const [qtdNumeros, setQtdNumeros] = useState(null);
    const [resultadoSorteio, setResultadoSorteio] = useState(null);
    const [winners, setWinners] = useState([]);


    const funQtdNumeros = (text) => {
        // Remove qualquer caractere que não seja número
        const numericValue = text.replace(/[^0-9]/g, '');
        setQtdNumeros(numericValue);
    };
    const gerarSorteio = () => {
        if (qtdNumeros === null || qtdNumeros === '') {
            Alert.alert(
                'Preenchimento Obrigatório',
                'Por favor, Preenchar o campos Quantidade Numeros e Sorteios.',
                [
                    {
                        text: 'Preencher',
                        style: 'cancel',
                    },
                ],
            );
            return;
        };

        // Gera um número aleatório entre 1 e qtdNumeros 
        const numeroGerador = Math.floor(Math.random() * qtdNumeros) + 1;
        setResultadoSorteio(numeroGerador);
    };


    const handleDraw = () => {
        const targetCount = 5; // Número de ganhadores desejados
        const maxNumber = 100; // Maior número do sorteio
        const targetNumbers = new Set();

        let iterations = 0;
        while (targetNumbers.size < targetCount && iterations < maxNumber * 10) {
            const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            targetNumbers.add(randomNumber);
            iterations++;
        }

        setWinners(Array.from(targetNumbers));
    };





    return (
        <View style={styles.containerPrincipal}>

            <View style={styles.ViewImg}>

                <Avatar.Image size={130}
                    source={require('../../assets/SFSorteio.png')}
                    style={{ backgroundColor: 'transparent' }}
                />

            </View>
                <View style={styles.viewTitulo}>
                    <Text style={styles.titulo}>Sortear de 1 a {qtdNumeros}</Text>
                </View>
            <View style={styles.container}>


                <Text style={styles.textPerguntaInput}>Quantidade de números:</Text>
                <TextInput
                    label={'Escolhar de 1 até 1000000000'}
                    textColor="#000"
                    selectionColor="#000"
                    right={<TextInput.Icon icon="keyboard" />}
                    activeUnderlineColor="#003150"
                    style={styles.textInput}
                    value={qtdNumeros}
                    onChangeText={funQtdNumeros}
                    keyboardType="numeric"
                    maxLength={10}
                />
                <Button
                    buttonColor="#000"
                    textColor="#fff"
                    icon={'poker-chip'}
                    style={styles.button}
                    onPress={handleDraw}
                >
                    Sortear
                </Button>
            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
};

export default TelaSorteio;