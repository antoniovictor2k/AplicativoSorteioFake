import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar, IconButton, Badge, Divider, Checkbox } from "react-native-paper";
import { View, ScrollView, Text, Image, Linking } from "react-native";

import styles from "../style/StyleTelaConfiguracao";

function TelaResultado() {
    const [checkboxtodos, setCheckboxTodos] = useState(false);
    const [checkboxpar, setCheckboxPar] = useState(false);
    const [checkboximpar, setCheckboxImpar] = useState(false);
    const [numerosEscolhidos, setNumerosEscolhidos] = useState(null);

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
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.viewSorteio}>
                <Text style={styles.text}>Escolhar como desejar sortear</Text>
            </View>
            <View style={styles.container}>

                <View style={styles.viewGanhador}>
                </View>

                <View style={styles.butoes}>
                    <Text style={styles.text2}>Por número:</Text>
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
                    <Text style={styles.text3}>Exemplo: o sorteio irá parar no número escolhido e ele será o ganhador.</Text>
                    <Text style={styles.text3}>Número escolhido: {numerosEscolhidos}</Text>
                </View>
                <View style={styles.viewDivider}>
                    <Text style={styles.textDivider}>
                        <Divider
                            style={styles.divider}
                            bold={true}
                        />
                        OU
                        <Divider
                            style={styles.divider}
                            bold={true}
                        />
                    </Text>
                </View>

                <View style={styles.viewBox}>
                    <View style={styles.flexbox}>

                        <Checkbox
                            status={checkboxtodos ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckboxTodos(!checkboxtodos);
                            }}
                            uncheckedColor="#003150"
                            color="#003150"
                        />
                        <Text style={styles.textBox}>
                            Todos os numeros.
                        </Text>
                    </View>
                    <View style={styles.flexbox}>
                        <Checkbox
                            status={checkboxpar ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckboxPar(!checkboxpar);
                            }}
                            uncheckedColor="#003150"
                            color="#003150"
                        />
                        <Text style={styles.textBox}>
                            Somente numeros par.
                        </Text>
                    </View>
                    <View style={styles.flexbox}>
                        <Checkbox
                            status={checkboximpar ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckboxImpar(!checkboximpar);
                            }}
                            uncheckedColor="#003150"
                            color="#003150"
                        />
                        <Text style={styles.textBox}>
                            Somente numeros ímpar.
                        </Text>
                    </View>
                </View >
                <Button
                    buttonColor="#000"
                    textColor="#fff"
                    icon={'content-save-cog'}
                    style={styles.button}
                    onPress={() => { alert('OK') }}
                >
                    Guardar dados
                </Button>
                <Button
                    textColor="#003150"
                    icon={'delete'}
                    style={styles.button}
                    onPress={() => { alert('OK') }}
                >
                    Limpar dados
                </Button>

            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
}

export default TelaResultado;