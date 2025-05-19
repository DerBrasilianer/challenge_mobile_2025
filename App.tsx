import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { MotoScreen } from './MotoScreen';
import { HomeScreen } from './HomeScreen';
import { FilialScreen } from './FilialScreen';
import { MotoBuscarScreen } from './MotoBuscarScreen';
import { IntegrantesScreen } from './IntegrantesScreen';

const { Screen, Navigator } = createDrawerNavigator();

const MyTheme = {

  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    background: '#43a047',
  },

};

export default function App() {

  return (

    <NavigationContainer theme={MyTheme}>

      <Navigator

        screenOptions={{

          headerStyle: {backgroundColor: '#2e7d32'},
          headerTintColor: '#fff',
          drawerStyle: {backgroundColor: '#66bb6a'},
          drawerActiveTintColor: '#1b5e20',
          drawerInactiveTintColor: 'white',

        }}

      >

        <Screen name="Home"              component={HomeScreen} />
        <Screen name="Gestão de Motos"   component={MotoScreen} />
        <Screen name="Gestão de Filiais" component={FilialScreen} />
        <Screen name="Buscar Moto"       component={MotoBuscarScreen} />
        <Screen name="Integrantes"       component={IntegrantesScreen} />

      </Navigator>

      <StatusBar style="light" />

    </NavigationContainer>

  );

}
