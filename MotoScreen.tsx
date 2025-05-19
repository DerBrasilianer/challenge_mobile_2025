import React, { useEffect, useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MotoFormulario } from './MotoFormulario';
import { MotoListagem } from './MotoListagem';
import { Moto } from './Moto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Screen, Navigator } = createBottomTabNavigator();

const MotoScreen = (): React.ReactElement => {

  const [lista, setLista] = useState<Moto[]>([]);

  const gravar = async (moto: Moto) => {

    const novaLista = [...lista, moto];
    setLista(novaLista);
    await AsyncStorage.setItem('motos', JSON.stringify(novaLista));
    ToastAndroid.show('Moto salva com sucesso', ToastAndroid.SHORT);

  };

  const remover = async (id: string) => {

    const novaLista = lista.filter((m) => m.id !== id);
    setLista(novaLista);
    await AsyncStorage.setItem('motos', JSON.stringify(novaLista));
    ToastAndroid.show('Moto removida com sucesso', ToastAndroid.SHORT);

  };

  const carregar = async () => {

    const dados = await AsyncStorage.getItem('motos');

    if (dados) {

      setLista(JSON.parse(dados));

    }

  };

  useEffect(() => {

    carregar();

  }, []);

  return (

    <Navigator>

      <Screen name="Gestão de Motos - Cadastro" options={{ headerShown: false }}>
        {() => <MotoFormulario onGravar={gravar} />}
      </Screen>

      <Screen name="Gestão de Motos - Listagem" options={{ headerShown: false }}>
        {() => <MotoListagem lista={lista} onRemover={remover} />}
      </Screen>
      
    </Navigator>
  );

};

export { MotoScreen };
