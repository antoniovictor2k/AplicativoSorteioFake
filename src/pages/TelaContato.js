import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar, IconButton } from "react-native-paper";
import { View, ScrollView, Text, Image, Linking } from "react-native";
import { WebView } from 'react-native-webview';


import styles from "../style/StyleTelaContato";

function TelaContato() {
    return (
        <View style={styles.containerPrincipal}>

            <View style={styles.container}>
                <Text style={styles.tituloText}>Sugestões, Reclamações e Elogios:</Text>

                <View style={styles.viewText}>
                    <Text style={styles.text}>Email: avitor266@gmail.com</Text>
                    <Text style={styles.text}>Telefone: (82)9 99198-1626</Text>
                </View>

                <Text style={styles.tituloText}>Endereço:</Text>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Rua xxx, Nº0</Text>
                    <Text style={styles.text}>Tabuleiro dos Martins - Maceió/AL</Text>
                </View>

                <Text style={styles.tituloText}>Redes Sociais:</Text>
                <View style={styles.viewIcones}>

                    <IconButton
                        icon="email"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('mailto:avitor266@gmail.com')}
                    />
                    <IconButton
                        icon="whatsapp"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('https://wa.me/message/O4I654ATQMPYE1')}
                    />
                    <IconButton
                        icon="instagram"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('https://www.instagram.com/antoniovictor2k/')}
                    />
                    <IconButton
                        icon="facebook"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('https://www.facebook.com/antonio.vitor.7524')}
                    />

                </View>
                <View style={styles.viewIcones}>
                    <IconButton
                        icon="linkedin"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/antonio-victor-pereira-severiano-0aa170169/')}
                    />
                    <IconButton
                        icon="github"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('https://github.com/antoniovictor2k')}
                    />
                    <IconButton
                        icon="youtube"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('https://youtube.com')}
                    />
                    <IconButton
                        icon="twitter"
                        iconColor={'#fff'}
                        size={30}
                        onPress={() => Linking.openURL('https://twitter.com/')}
                    />


                </View>

            </View>

            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
}

export default TelaContato;