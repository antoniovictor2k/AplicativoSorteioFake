import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar, IconButton, Badge, Divider, Checkbox } from "react-native-paper";
import { View, ScrollView, Text, Image, Linking, Alert } from "react-native";

import styles from "../style/StyleTelaConfiguracao";

function TelaResultado() {
    const [checkboxPorNumero, setCheckboxPorNumero] = useState(false);
    const [checkboxtodos, setCheckboxTodos] = useState(false);
    const [checkboxpar, setCheckboxPar] = useState(false);
    const [checkboximpar, setCheckboxImpar] = useState(false);
    const [numerosEscolhidos, setNumerosEscolhidos] = useState(null);
    const [qtddeNumeros, setQtddeNumeros] = useState(100);

    const numerosApenas = (text) => {
        // Remove qualquer caractere que não seja número
        const numericValue = text.replace(/[^0-9]/g, '');
        setNumerosEscolhidos(numericValue);
    };

    const tema = {
        colors: {

            onSurfaceVariant: 'white'
        }
    };

    const handleCheckboxTodos = () => {
        setCheckboxTodos(true);
        setCheckboxPar(false);
        setCheckboxImpar(false);
        setCheckboxPorNumero(false);

    };

    const handleCheckboxPar = () => {
        setCheckboxTodos(false);
        setCheckboxPar(true);
        setCheckboxImpar(false);
        setCheckboxPorNumero(false);

    };

    const handleCheckboxImpar = () => {
        setCheckboxTodos(false);
        setCheckboxPar(false);
        setCheckboxImpar(true);
        setCheckboxPorNumero(false);

    };
    const handleCheckboxPorNumero = () => {
        setCheckboxTodos(false);
        setCheckboxPar(false);
        setCheckboxImpar(false);
        setCheckboxPorNumero(true);
    };


    function selectIfEscolharSorteio() {

        if (checkboxPorNumero === true) {
            if (numerosEscolhidos === null || numerosEscolhidos === "") {
                Alert.alert('Preenchimento Obrigatório!', 'Campus "Escolhar o número" não foi preenchido.', [
                    { text: 'preencher', style: 'cancel' },
                ]);
                return;
            }

            console.log("Verificação passou Por Número");
            sortearSomentePeloNumero();

        }
        else if (checkboxtodos === true) {
            console.log("Verificação passou Todos");
            sortearTodosNumeros();
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
            console.log("verificação não passou ou nenhum checkbox true!")
        }
    }

    
    
    function sortearSomentePeloNumero() {
        const breakNumero = parseInt(numerosEscolhidos); // Converter para número inteiro
        let guardarNumero;
        
        if (breakNumero > qtddeNumeros) {
            Alert.alert('Escolhar um número menor!','No campus "Escolhar o número" Escolhar um número que seja menor que a quantidade de números do sorteio.', [
                { text: 'preencher', style: 'cancel' },
            ]);
            return;
        }

        do {

            guardarNumero = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100.
           
        } while (guardarNumero !== breakNumero);

        console.log(guardarNumero);
    };



    function sortearTodosNumeros() {
        let guardarNumero;

        guardarNumero = Math.floor(Math.random() * qtddeNumeros) + 1; // Gera um número aleatório entre 1 e quantidade escolhida.

        console.log(guardarNumero);
    };

    function sortearSomenteNumeroPar() {
        let guardarNumero;

        do {

            guardarNumero = Math.floor(Math.random() * qtddeNumeros) + 1; // Gera um número aleatório entre 1 e quantidade escolhida.



        } while (guardarNumero % 2 === 1);

        console.log(guardarNumero);
    };

    function sortearSomenteNumeroImpar() {
        let guardarNumero;

        do {

            guardarNumero = Math.floor(Math.random() * qtddeNumeros) + 1; // Gera um número aleatório entre 1 e quantidade escolhida.



        } while (guardarNumero % 2 === 0);

        console.log(guardarNumero);
    };


    // limpar dados, irá alterar todos os checkBox para false e deixa null o campo escolhar numero.

    function limparDados() {

        setNumerosEscolhidos(null);
        setCheckboxPorNumero(false);
        setCheckboxTodos(false);
        setCheckboxPar(false);
        setCheckboxImpar(false);
    };






    return (
        <ScrollView style={styles.containerPrincipal} keyboardShouldPersistTaps='handled'>
            <View style={styles.viewSorteio}>
                <Text style={styles.text}>Escolhar como desejar sortear</Text>
            </View>
            <View style={styles.container}>

                <View style={styles.viewGanhador}>
                </View>

                <View style={styles.viewCard}>
                    <View style={styles.flexbox} >

                        <Checkbox
                            status={checkboxPorNumero ? 'checked' : 'unchecked'}
                            onPress={() => {
                                handleCheckboxPorNumero();
                            }}
                            uncheckedColor="#fff"
                            color="#fff"
                        />
                        <Text style={styles.textBox}>
                            Somente pelo número:
                        </Text>
                    </View>
                    <TextInput
                        label={'Escolhar o número'}
                        textColor="#fff"
                        value={numerosEscolhidos}
                        selectionColor="#fff"
                        right={<TextInput.Icon icon="keyboard" color={'#fff'} />}
                        activeUnderlineColor="#fff"
                        theme={tema}
                        style={styles.textInput}
                        onChangeText={numerosApenas}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    <Text style={styles.text3}>Ex: o sorteio irá parar no número escolhido.</Text>
                    <Text style={styles.text3}>Número escolhido: <Text style={{ color: '#38B6FF', fontWeight: 700 }}>{numerosEscolhidos}</Text></Text>
                </View>

                <View style={styles.viewBox}>

                    <View style={styles.viewCard}>
                        <View style={styles.flexbox} >

                            <Checkbox
                                status={checkboxtodos ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    handleCheckboxTodos();
                                }}
                                uncheckedColor="#fff"
                                color="#fff"
                            />
                            <Text style={styles.textBox}>
                                Todos os números.
                            </Text>
                        </View>
                        <Text style={styles.text3}>Ex: o sorteio será padrão, todos participando.</Text>
                    </View>

                    <View style={styles.viewCard}>

                        <View style={styles.flexbox}>
                            <Checkbox
                                status={checkboxpar ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    handleCheckboxPar();
                                }}
                                uncheckedColor="#fff"
                                color="#fff"
                            />
                            <Text style={styles.textBox}>
                                Somente números par.
                            </Text>
                        </View>
                        <Text style={styles.text3}>Ex: o sorteio será somente com número par.</Text>
                    </View>
                    <View style={styles.viewCard}>

                        <View style={styles.flexbox}>
                            <Checkbox
                                status={checkboximpar ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    handleCheckboxImpar();
                                }}
                                uncheckedColor="#fff"
                                color="#fff"
                            />
                            <Text style={styles.textBox}>
                                Somente números ímpar.
                            </Text>
                        </View>
                        <Text style={styles.text3}>Ex: o sorteio será somente com número ímpar.</Text>
                    </View >
                </View>

                <Button
                    buttonColor="#000"
                    textColor="#fff"
                    icon={'content-save-cog'}
                    style={styles.button}
                    onPress={selectIfEscolharSorteio}
                >
                    Guardar dados
                </Button>

                <Button
                    textColor="#003150"
                    icon={'delete'}
                    style={styles.button}
                    onPress={limparDados}
                >
                    Limpar dados
                </Button>

            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </ScrollView>
    )
}

export default TelaResultado;