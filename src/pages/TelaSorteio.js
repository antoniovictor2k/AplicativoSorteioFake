import { React, useState, useEffect } from "react";

import { TextInput, Button, Avatar } from "react-native-paper";
import { View, ScrollView, Text, Image } from "react-native";

import styles from "../style/StyleTelaSorteio";

function TelaSorteio() {
    const [qtdNumeros, setQtdNumeros] = useState(null);


    return (
        <View style={styles.containerPrincipal}>

            <View style={styles.ViewImg}>

                <Avatar.Image size={130}
                    source={require('../../assets/SFSorteio.png')}
                    style={{ backgroundColor: 'transparent' }}
                />

            </View>

            <View style={styles.container}>


                <Text style={styles.textPerguntaInput}>Quantidade de numeros:</Text>
                <TextInput
                    label={'De 1 a ?'}
                    textColor="#000"
                    selectionColor="#000"
                    right={<TextInput.Icon icon="keyboard" />}
                    activeUnderlineColor="#003150"
                    style={styles.textInput}
                />
                <Text style={styles.textPerguntaInput}>Quantidade de sorteios:</Text>
                <TextInput
                    label={'Escolhar de 1 a 5'}
                    textColor="#000"
                    selectionColor="#000"
                    right={<TextInput.Icon icon="keyboard" />}
                    activeUnderlineColor="#003150"
                    style={styles.textInput}
                />
                <Button
                    buttonColor="#000"
                    textColor="#fff"
                    icon={'poker-chip'}
                    style={styles.button}
                    onPress={()=>{alert("Hello")}}
                >

                    Sorteia
                </Button>
            </View>
            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
};

export default TelaSorteio;