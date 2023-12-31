import 'react-native-gesture-handler';
import { React } from 'react';
import { Text, View, Linking } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

// imports de telas
import styles from '../style/StyleTelaMenu';
import TelaSorteio from './TelaSorteio';
import TelaSobre from './TelaSobre';
import TelaContato from './TelaContato';
import TelaResultado from './TelaResultado';
import TelaConfiguracao from './TelaConfiguracao';


function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView style={styles.containerPrincipal} contentContainerStyle={styles.containerPrincipal}>
      <View style={styles.container}>
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
        <Divider style={styles.linhaHorizotal} />
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
            <Text style={styles.linkBold}
              onPress={() => { navigation.navigate("TermosDeUso"); }}
            >Termos de uso</Text>
            {' '}e de{' '}
            <Text style={styles.linkBold}
              onPress={() => { navigation.navigate("Privacidade"); }}
            >Privacidade</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.dev}
        onPress={() => {
          Linking.openURL('https://www.instagram.com/antoniovictor2k/');
        }}
      >@antoniovictor2k</Text>
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
      <Drawer.Screen
        options={
          {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#003150', // Defina a cor de fundo desejada
            },
            drawerLabel: (({ focused }) => <Text style={styles.drawerLabel}>Resultado</Text>),
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="description" />),
          }
        }
        name="Resultado" component={TelaResultado} />
      <Drawer.Screen
        options={
          {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#003150', // Defina a cor de fundo desejada
            },
            drawerLabel: (({ focused }) => <Text style={styles.drawerLabel}>Configuração</Text>),
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="settings" />),
          }
        }
        name="Configuração" component={TelaConfiguracao} />
    </Drawer.Navigator>
  );
}

export default TelaMenu;
