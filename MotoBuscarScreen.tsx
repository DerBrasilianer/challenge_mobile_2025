import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Moto } from './Moto';

const MotoBuscarScreen = (): React.ReactElement => {

  const [termo, setTermo] = useState('');
  const [motos, setMotos] = useState<Moto[]>([]);
  const [filtradas, setFiltradas] = useState<Moto[]>([]);

  useEffect(() => {

    const carregar = async () => {

      const dados = await AsyncStorage.getItem('motos');
      if (dados) setMotos(JSON.parse(dados));

    };

    carregar();

  }, []);

  useEffect(() => {

    const termoLower = termo.toLowerCase();

    if (termoLower.trim() === '') {

      setFiltradas([]);
      return;

    }

    const resultado = motos.filter((moto) =>

      moto.id.includes(termoLower) ||
      moto.modelo.toLowerCase().includes(termoLower) ||
      moto.placa.toLowerCase().includes(termoLower) ||
      (termoLower.includes('pátio') && moto.noPatio) ||
      (termoLower.includes('fora') && !moto.noPatio)

    );

    setFiltradas(resultado);

  }, [termo, motos]);

  return (

    <View style={styles.container}>

      <Image
        source={require('./assets/mottu-logo.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.content}>

        <Text style={styles.label}>Buscar por ID, modelo, placa ou status</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um termo de busca"
          value={termo}
          onChangeText={setTermo}
        />

        <FlatList

          data={filtradas}
          keyExtractor={(item) => item.id}

          renderItem={({ item }) => (

            <View style={styles.card}>

              <Text style={styles.text}>Modelo: {item.modelo}</Text>
              <Text style={styles.text}>Placa: {item.placa}</Text>
              <Text style={styles.text}>
                Status: {item.noPatio ? 'No pátio' : 'Fora do pátio'}
              </Text>
              <Text style={styles.id}>ID: {item.id}</Text>

            </View>

          )}

        />

      </View>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#00B131',
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundImage: {

    position: 'absolute',
    width: 200,
    height: 200,
    top: '30%',
    alignSelf: 'center',
    opacity: 0.15

  },

  content: {

    flex: 1,
    width: '100%',
    padding: 16,
    zIndex: 1

  },

  label: {

    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4

  },

  input: {

    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1b5e20',
    borderRadius: 6,
    padding: 8,
    marginBottom: 16

  },

  card: {

    backgroundColor: '#a5d6a7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    position: 'relative'

  },

  text: {

    color: 'black',
    marginBottom: 4

  },

  id: {

    fontSize: 10,
    color: 'gray',
    fontStyle: 'italic',
    position: 'absolute',
    right: 8,
    bottom: 6

  },
  
});

export { MotoBuscarScreen };
