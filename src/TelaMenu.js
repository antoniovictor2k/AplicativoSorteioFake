import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Button, Avatar, Divider } from 'react-native-paper';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
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
    <DrawerContentScrollView {...props} style={styles.paginaMenu}>
      <View>
        <View style={styles.cabecalho}>
          <Avatar.Image size={68} source={{ uri: imageUrl }} />
          <View style={styles.cabecalhoText}>
            <Text style={styles.nomeDoAluno}> {nomeUsuario} </Text>
            <Text style={styles.emailDoAluno}> {emailUsuario} </Text>
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
            <Text >Termos de uso</Text>
            {' '}e de{' '}
            <Text >Privacidade</Text>
          </Text>
        </View>
        <Button
          icon="logout"
          buttonColor="#B3DCE5"
          textColor="#000"
          mode="contained"
          style={styles.button}
         
        >
          Sair
        </Button>
      </View>
      <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
    </DrawerContentScrollView>
  );
}
  
const Drawer = createDrawerNavigator();

function TelaMenu() {
  return (
    <Drawer.Navigator initialRouteName="TelaSobre" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="TelaSobre" component={TelaSobre} />
      <Drawer.Screen name="TelaContato" component={TelaContato} />
      <Drawer.Screen name="TelaConfiguracao" component={TelaConfiguracao} />
    </Drawer.Navigator>
  );
}

export default TelaMenu;
