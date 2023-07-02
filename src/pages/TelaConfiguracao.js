import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar, IconButton, Badge, Divider, Checkbox } from "react-native-paper";
import { View, ScrollView, Text, Image, Linking } from "react-native";

import styles from "../style/StyleTelaConfiguracao";

function TelaResultado() {
    const [checked, setChecked] = useState(false);



    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.container}>
                <View style={styles.viewSorteio}>
                    <Text style={styles.text}>Numero(s) escolhido(s):</Text>
                </View>

                <View style={styles.viewGanhador}>
                    <View>
                        <Text style={styles.textGanhador}>1º Numero</Text>
                        <Badge
                            size={28}
                            style={styles.ganhadorResultado}
                        >1354021</Badge>
                    </View>
                    <View>
                        <Text style={styles.textGanhador}>2º Numero</Text>
                        <Badge
                            size={28}
                            style={styles.ganhadorResultado}
                        >454545</Badge>
                    </View>
                    <View>
                        <Text style={styles.textGanhador}>3º Numero</Text>
                        <Badge
                            size={28}
                            style={styles.ganhadorResultado}
                        >102</Badge>
                    </View>
                    <View>
                        <Text style={styles.textGanhador}>4º Numero</Text>
                        <Badge
                            size={28}
                            style={styles.ganhadorResultado}
                        >15487</Badge>
                    </View>
                    <View>
                        <Text style={styles.textGanhador}>5º Numero</Text>
                        <Badge
                            size={28}
                            style={styles.ganhadorResultado}
                        >54</Badge>
                    </View>
                </View>

                <View style={styles.butoes}>
                    <Text style={styles.text2}>Escolhar o(s) numero(s):</Text>
                    <TextInput
                        label={'Numero(s) Premiado(s)'}
                        textColor="#fff"
                        selectionColor="#fff"
                        right={<TextInput.Icon icon="keyboard" color={'#fff'} />}
                        activeUnderlineColor="#fff"
                        style={styles.textInput}
                    />
                    <Button
                        buttonColor="#000"
                        textColor="#fff"
                        icon={'plus-box-multiple'}
                        style={styles.button}
                        onPress={() => { alert('OK') }}
                    >
                        Adicionar
                    </Button>
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
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
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
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
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
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
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