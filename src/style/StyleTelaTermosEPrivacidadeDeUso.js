import { StyleSheet } from 'react-native';

const styleTelaTermosDeUso = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  cabecalho: {
    backgroundColor: '#003150',
    marginBottom: 20,
    paddingTop: 30,
    paddingLeft: 10,
    height: 82,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: -5
  },
  titulo: {
    fontWeight: 700,
    fontSize: 20,
    color: '#fff',
  },
  heading: {
    marginLeft: 15,
    fontWeight: 700,
    fontSize: 22,
    color: '#000',
    marginTop: 8,
    marginBottom: 8,
  },
  paragraph: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 16,
    color: '#000',
  },

})

export default styleTelaTermosDeUso;