import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FilialFormulario } from './FilialFormulario';
import { FilialListagem } from './FilialListagem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Filial } from './Filial';
import { ToastAndroid } from 'react-native';

const { Screen, Navigator } = createBottomTabNavigator();

const FilialScreen = (): React.ReactElement => {

  const [lista, setLista] = useState<Filial[]>([]);

  const gravar = async (filial: Filial) => {

    const novaLista = [...lista, filial];
    setLista(novaLista);
    await AsyncStorage.setItem('filiais', JSON.stringify(novaLista));
    ToastAndroid.show('Filial salva com sucesso', ToastAndroid.SHORT);

  };

  const remover = async (id: string) => {

    const novaLista = lista.filter((filial) => filial.id !== id);
    setLista(novaLista);
    await AsyncStorage.setItem('filiais', JSON.stringify(novaLista));
    ToastAndroid.show('Filial removida com sucesso', ToastAndroid.SHORT);

  };

  const carregar = async () => {

    const dados = await AsyncStorage.getItem('filiais');
    if (dados) setLista(JSON.parse(dados))

  };

  useEffect(() => {

    carregar();

  }, []);

  return (

    <Navigator>

      <Screen name="Cadastrar Filial" options={{ headerShown: false }}>
        {() => <FilialFormulario onGravar={gravar} />}
      </Screen>
      
      <Screen name="Listar Filiais" options={{ headerShown: false }}>
        {() => <FilialListagem lista={lista} onRemover={remover} />}
      </Screen>

    </Navigator>

  );

};

export { FilialScreen };
