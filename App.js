import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import TelaMenu from './src/pages/TelaMenu';
import TelaTermosDeUso from './src/pages/TelaTermosDeUso';
import TelaTermosDePrivacidade from './src/pages/TelaPoliticaDePrivacidade';

// AntonioVictor
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaMenu"
        screenOptions={{ 
          headerShown: false
        }}
      >
        <Stack.Screen name="TelaMenu" component={TelaMenu} />
        <Stack.Screen name="TermosDeUso" component={TelaTermosDeUso} />
        <Stack.Screen name="Privacidade" component={TelaTermosDePrivacidade} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
