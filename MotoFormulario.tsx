import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, Image } from 'react-native';
import { Moto } from './Moto';

interface MotoFormularioProps {

  onGravar: (moto: Moto) => void;

}

const MotoFormulario = ({ onGravar }: MotoFormularioProps): React.ReactElement => {

  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [noPatio, setNoPatio] = useState(true);

  return (

    <View style={styles.container}>

      <Image
        source={require('./assets/mottu-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Modelo</Text>
      <TextInput value={modelo} onChangeText={setModelo} style={styles.input} />

      <Text style={styles.label}>Placa</Text>
      <TextInput value={placa} onChangeText={setPlaca} style={styles.input} />

      <Text style={styles.label}>Está no pátio?</Text>
      <Switch value={noPatio} onValueChange={setNoPatio} />

      <View style={styles.botaoContainer}>

        <Button
          title="Cadastrar Moto"
          onPress={() => {
            const novaMoto: Moto = {
              id: Date.now().toString(),
              modelo,
              placa,
              noPatio,
            };
            onGravar(novaMoto);
            setModelo('');
            setPlaca('');
            setNoPatio(true);
          }}
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
    alignItems: 'center',
    padding: 20

  },

  logo: {

    width: 180,
    height: 180,
    marginBottom: 24

  },

  label: {

    alignSelf: 'flex-start',
    marginBottom: 4,
    marginTop: 12,
    fontWeight: 'bold',
    color: 'white'

  },

  input: {

    width: '100%',
    borderWidth: 2,
    borderColor: '#1b5e20',
    borderRadius: 6,
    padding: 8,
    backgroundColor: 'white'

  },

  botaoContainer: {

    marginTop: 20,
    width: '100%'

  },
  
});

export { MotoFormulario };
