import 'react-native-gesture-handler';
import { React, useState } from 'react';
import { Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Button, Avatar, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

// imports de telas
import styles from '../style/StyleTelaMenu';
import TelaSorteio from './TelaSorteio';
import TelaSobre from './TelaSobre';
import TelaContato from './TelaContato';




function TelaConfiguracao() {
  return <Text>TelaConfiguracao</Text>;
}



function CustomDrawerContent(props) {
  const navigation = useNavigation();

  // guarda os dados do json nome, email e img aqui.
  const [nomeUsuario, setNomeUsuario] = useState(null);
  const [emailUsuario, setEmailUsuario] = useState(null);
  const [imageUrl, setImagemUrl] = useState(null);


  return (
    <DrawerContentScrollView style={styles.containerPrincipal}>
      <View style={{ flex: 1 }}>
        <View style={styles.cabecalho}>
          <Avatar.Image size={68}
            source={require('../../assets/SFSorteio.png')}
            style={{ backgroundColor: 'transparent' }}
          />
          <View style={styles.cabecalhoText}>
            <Text style={styles.tituloLogo}> SF Sorteio </Text>
          </View>
        </View>
        <Divider style={styles.linhaHorizotal} />
        <DrawerItemList {...props} />
        <Divider style={styles.linhaHorizotal2} />
        <View style={styles.links}>
          <Text
            style={styles.link}
            onPress={() => {
              Linking.openURL('https://www.youtube.com');
            }}
          >
            Tutorial de Uso do App, Click Aqui.
          </Text>
          <Text style={styles.link}>
            <Text style={styles.linkBold} >Termos de uso</Text>
            {' '}e de{' '}
            <Text style={styles.linkBold} >Privacidade</Text>
          </Text>
        </View>
        <View style={styles.developer}>
          <Text style={styles.developerText}>Dev Antonio Victor</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function TelaMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="Sorteio"
      drawerContent={props => <CustomDrawerContent {...props}
      />}>
      <Drawer.Screen
        options={
          {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#003150', // Defina a cor de fundo desejada
            },
            drawerLabel: (({ focused }) => <Text style={styles.drawerLabel}>Sorteio</Text>),
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="casino" />),
          }
        }
        name="Sorteio" component={TelaSorteio} />
      <Drawer.Screen
        options={
          {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#003150', // Defina a cor de fundo desejada
            },
            drawerLabel: (({ focused }) => <Text style={styles.drawerLabel}>Sobre</Text>),
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="info" />),
          }
        }
        name="Sobre" component={TelaSobre} />
      <Drawer.Screen
        options={
          {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#003150', // Defina a cor de fundo desejada
            },
            drawerLabel: (({ focused }) => <Text style={styles.drawerLabel}>Contato</Text>),
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="contacts" />),
          }
        }
        name="Contato" component={TelaContato} />
    </Drawer.Navigator>
  );
}

export default TelaMenu;
