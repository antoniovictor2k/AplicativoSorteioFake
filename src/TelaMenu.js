import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Button, Avatar, Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';





const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: '#003150',
    color: '#fff',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#003150',
    color: "#fff"
  },
  cabecalho: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 20,
    flexDirection: 'row'
  },
  cabecalhoText: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    color: "#fff"
  },
  tituloLogo: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 700,
    fontSize: 18,
  },
  linhaHorizotal: {
    color: '#fff',
    marginBottom: 10,
  },
  links: {
    marginLeft: 15,
    marginTop: 50,
    marginBottom:50,
    color: "#fff"
  },
  link: {

    color: "#fff"
  },
  linkBold: {
    fontWeight: 700
  },
  developer: {
    borderColor: '#ff0000',
    borderStyle: 'solid',
    borderWidth: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    // backgroundColor: '#fff',
    padding: 10,
  },
  developerText: {
    color: "#fff"
  },
  drawerLabel: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 18,
  },
  drawerIcon: {
    color: "#fff",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

function TelaSobre() {
  return <Text>TelaSobre</Text>;
}

function TelaContato() {
  return <Text>TelaContato</Text>;
}

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
    <DrawerContentScrollView {...props} style={styles.containerPrincipal}>
      <View>
        <View style={styles.cabecalho}>
          <Avatar.Image size={68} source={{ uri: imageUrl }} />
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
              Linking.openURL('https://www.youtube.com/watch?v=tmHsL50_zkU');
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
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="settings" />),
          }
        }
        name="Sorteio" component={TelaSobre} />
      <Drawer.Screen
        options={
          {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#003150', // Defina a cor de fundo desejada
            },
            drawerLabel: (({ focused }) => <Text style={styles.drawerLabel}>Sobre</Text>),
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="settings" />),
          }
        }
        name="Sobre" component={TelaContato} />
      <Drawer.Screen
        options={
          {
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#003150', // Defina a cor de fundo desejada
            },
            drawerLabel: (({ focused }) => <Text style={styles.drawerLabel}>Contato</Text>),
            drawerIcon: (({ focused }) => <Icon style={styles.drawerIcon} name="camera" />),
          }
        }
        name="Contato" component={TelaConfiguracao} />
    </Drawer.Navigator>
  );
}

export default TelaMenu;
