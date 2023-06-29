import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar, IconButton } from "react-native-paper";
import { View, ScrollView, Text, Image, Linking } from "react-native";
import { WebView } from 'react-native-webview';


import styles from "../style/StyleTelaContato";

function TelaContato() {
    return (
        <View style={styles.containerPrincipal}>

            <View style={styles.container}>

                <View style={styles.viewText}>
                    <Text style={styles.text}>Email: avitor266@gmail.com</Text>
                    <Text style={styles.text}>Telefone: (82)9 99198-1626</Text>
                    <Text style={styles.text}>Rua ciceiro pereira da silva Nº17</Text>
                    <Text style={styles.text}>Tabuleiro dos Martins - Maceió/AL</Text>

                </View>


                <View style={styles.viewIcones}>

                    <IconButton
                        icon="email"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('mailto:avitor266@gmail.com')}
                    />
                    <IconButton
                        icon="whatsapp"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('https://wa.me/message/O4I654ATQMPYE1')}
                    />
                    <IconButton
                        icon="instagram"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('https://www.instagram.com/antoniovictor2k/')}
                    />
                    <IconButton
                        icon="facebook"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('https://www.facebook.com/antonio.vitor.7524')}
                    />

                </View>
                <View style={styles.viewIcones}>
                    <IconButton
                        icon="linkedin"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/antonio-victor-pereira-severiano-0aa170169/')}
                    />
                    <IconButton
                        icon="github"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('https://github.com/antoniovictor2k')}
                    />
                    <IconButton
                        icon="youtube"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('https://youtube.com')}
                    />
                    <IconButton
                        icon="twitter"
                        iconColor={'#000'}
                        size={30}
                        onPress={() => Linking.openURL('https://twitter.com/')}
                    />


                </View>

            </View>
            <View style={styles.viewMaps}>
                <WebView
                    source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.077062989767!2d-35.76201488202072!3d-9.576524029017941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014860bae26ed3%3A0x696498dc84bd0a5b!2sAlameda%20Maria%20Das%20Dores%20Dantas%20Santos%2C%2022%20-%20Tabuleiro%20do%20Martins%2C%20Macei%C3%B3%20-%20AL%2C%2057062-430!5e0!3m2!1spt-BR!2sbr!4v1688006177575!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }}
                    style={{ marginTop: 0 }}
                />
            </View>

            <Text style={styles.dev}>Dev Antonio Victor</Text>
        </View>
    )
}

export default TelaContato;