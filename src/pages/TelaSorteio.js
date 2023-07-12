import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar } from "react-native-paper";
import { View, Text, Alert } from "react-native";
import { useRoute } from '@react-navigation/native';

import styles from "../style/StyleTelaSorteio";

function TelaSorteio({ navigation }) {
    const route = useRoute();

    const { itemCheckboxtodos, itemCheckboxPorNumero,
        itemCheckboxpar, itemCheckboximpar, itemNumeroEscolhido } = route.params ?? {};

    const [checkboxtodos, setCheckboxTodos] = useState(true);
    const [checkboxPorNumero, setCheckboxPorNumero] = useState(false);
    const [checkboxpar, setCheckboxPar] = useState(false);
    const [checkboximpar, setCheckboxImpar] = useState(false);
    const [numeroEscolhido, setNumeroEscolhido] = useState(null);
    const [qtdNumeros, setQtdNumeros] = useState(null);


    const funQtdNumeros = (text) => {
        // Remove qualquer caractere que não seja número
        const numericValue = text.replace(/[^0-9]/g, '');
        setQtdNumeros(numericValue);
    };

    useEffect(() => {

        // mesmo que não seja feita nenhum configuração ele consiga sortear no modo padrão (Todos);
        if (itemCheckboxtodos === undefined) {
            setCheckboxTodos(true);
        } else {
            setCheckboxTodos(itemCheckboxtodos);
        }

        setCheckboxPorNumero(itemCheckboxPorNumero);
        setCheckboxPar(itemCheckboxpar);
        setCheckboxImpar(itemCheckboximpar);
        setNumeroEscolhido(itemNumeroEscolhido);

    }, [itemCheckboxtodos, itemCheckboxPorNumero,
        itemCheckboxpar, itemCheckboximpar, itemNumeroEscolhido]);


    function selectIfButaoSorteio() {

        if (qtdNumeros === null || qtdNumeros === '') {
            Alert.alert(
                'Preenchimento Obrigatório',
                'O campo "Quantidade de números" não foi preenchido.',
                [
                    {
                        text: 'Preencher',
                        style: 'cancel',
                    },
                ],
            );
            return;
        };

        if (checkboxtodos === true || checkboxtodos == true) {
            console.log("Verificação passou Todos");
            sortearTodosNumeros();
        }
        else if (checkboxPorNumero === true) {
            console.log("Verificação passou Por Número");
            sortearSomentePeloNumero();

        }
        else if (checkboxpar === true) {
            console.log("Verificação passou Par");
            sortearSomenteNumeroPar();
        }
        else if (checkboximpar === true) {
            console.log("Verificação passou Impar");
            sortearSomenteNumeroImpar();
        }
        else {
            console.log("Error na verificação de CheckBox")
        }
    };


    function sortearTodosNumeros() {
        let guardarNumero;

        guardarNumero = Math.floor(Math.random() * qtdNumeros) + 1; // Gera um número aleatório entre 1 e quantidade escolhida.

        navigation.navigate('Resultado', { itemQtdNumeros: qtdNumeros, itemResultadoSorteio: guardarNumero });

    };

    function sortearSomentePeloNumero() {
        const breakNumero = parseInt(numeroEscolhido); // Converter para número inteiro
        let guardarNumero;

        if (breakNumero > qtdNumeros) {
            Alert.alert('Escolhar um número Maior!', 'No campo "Quantidade de números" Escolhar um número Maior.', [
                { text: 'preencher', style: 'cancel' },
            ]);
            return;
        }

        do {

            guardarNumero = Math.floor(Math.random() * qtdNumeros) + 1; // Gera um número aleatório entre 1 e 100.

        } while (guardarNumero !== breakNumero);

        navigation.navigate('Resultado', { itemQtdNumeros: qtdNumeros, itemResultadoSorteio: guardarNumero });
    };

    function sortearSomenteNumeroPar() {
        let guardarNumero;

        do {

            guardarNumero = Math.floor(Math.random() * qtdNumeros) + 1; // Gera um número aleatório entre 1 e quantidade escolhida.



        } while (guardarNumero % 2 === 1);

        navigation.navigate('Resultado', { itemQtdNumeros: qtdNumeros, itemResultadoSorteio: guardarNumero });
    };

    function sortearSomenteNumeroImpar() {
        let guardarNumero;

        do {

            guardarNumero = Math.floor(Math.random() * qtdNumeros) + 1; // Gera um número aleatório entre 1 e quantidade escolhida.



        } while (guardarNumero % 2 === 0);

        navigation.navigate('Resultado', { itemQtdNumeros: qtdNumeros, itemResultadoSorteio: guardarNumero });
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
                    onPress={selectIfButaoSorteio}
                >
                    Sortear
                </Button>
            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
};

export default TelaSorteio;