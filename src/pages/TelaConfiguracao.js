import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar, IconButton, Badge, Divider, Checkbox } from "react-native-paper";
import { View, ScrollView, Text, Image, Linking, Alert } from "react-native";

import styles from "../style/StyleTelaConfiguracao";

function TelaResultado({ navigation }) {
    const [checkboxtodos, setCheckboxTodos] = useState(true);
    const [checkboxPorNumero, setCheckboxPorNumero] = useState(false);
    const [checkboxpar, setCheckboxPar] = useState(false);
    const [checkboximpar, setCheckboxImpar] = useState(false);
    const [numeroEscolhido, setNumeroEscolhido] = useState(null);

    const numerosApenas = (text) => {
        // Remove qualquer caractere que não seja número
        const numericValue = text.replace(/[^0-9]/g, '');
        setNumeroEscolhido(numericValue);
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

        if (checkboxtodos === true) {
            navigation.navigate('Sorteio',
                { itemCheckboxtodos: checkboxtodos, itemCheckboxPorNumero: checkboxPorNumero, itemCheckboxpar: checkboxpar, itemCheckboximpar: checkboximpar });
        }
        else if (checkboxPorNumero === true) {
            if (numeroEscolhido === null || numeroEscolhido === "") {
                Alert.alert('Preenchimento Obrigatório!', 'O campo "Escolhar o número" não foi preenchido.', [
                    { text: 'Preencher', style: 'cancel' },
                ]);
                return;
            }
            navigation.navigate('Sorteio',
                { itemCheckboxtodos: checkboxtodos, itemCheckboxPorNumero: checkboxPorNumero, itemCheckboxpar: checkboxpar, itemCheckboximpar: checkboximpar, itemNumeroEscolhido: numeroEscolhido });

        }
        else if (checkboxpar === true) {
            navigation.navigate('Sorteio',
                { itemCheckboxtodos: checkboxtodos, itemCheckboxPorNumero: checkboxPorNumero, itemCheckboxpar: checkboxpar, itemCheckboximpar: checkboximpar });
        }
        else if (checkboximpar === true) {
            navigation.navigate('Sorteio',
                { itemCheckboxtodos: checkboxtodos, itemCheckboxPorNumero: checkboxPorNumero, itemCheckboxpar: checkboxpar, itemCheckboximpar: checkboximpar });
        }
        else {
            console.log("Error ao navigar para a tela Sorteio e passa os Itens!")
        }
    }



    // limpar dados, irá alterar todos os checkBox para false e deixa null o campo escolhar numero.

    function limparDados() {

        setNumeroEscolhido(null);
        setCheckboxPorNumero(false);
        setCheckboxTodos(true);
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


                <View style={styles.viewBox}>

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
                            value={numeroEscolhido}
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
                        <Text style={styles.text3}>Número escolhido: <Text style={{ color: '#38B6FF', fontWeight: 700 }}>{numeroEscolhido}</Text></Text>
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
                    Salvar alterações
                </Button>

                <Button
                    textColor="#003150"
                    icon={'alpha-r-box'}
                    style={styles.button}
                    onPress={limparDados}
                >
                 Restaurar ao padrão original
                </Button>

            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </ScrollView>
    )
}

export default TelaResultado;