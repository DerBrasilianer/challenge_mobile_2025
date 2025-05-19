import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Filial } from './Filial';

interface Props {

  onGravar: (filial: Filial) => void;

}

const FilialFormulario = ({ onGravar }: Props): React.ReactElement => {

  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tamanhoPatio, setTamanhoPatio] = useState('');

  const salvar = () => {

    const nova: Filial = {

      id: Date.now().toString(),
      nome,
      cidade,
      endereco,
      tamanhoPatio: Number(tamanhoPatio),

    };

    onGravar(nova);
    setNome('');
    setCidade('');
    setEndereco('');
    setTamanhoPatio('');

  };

  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require('./assets/mottu-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Cidade</Text>
      <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

      <Text style={styles.label}>Endereço</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />

      <Text style={styles.label}>Tamanho do Pátio em m²</Text>
      <TextInput
        style={styles.input}
        value={tamanhoPatio}
        onChangeText={setTamanhoPatio}
        keyboardType="numeric"
      />

      <View style={styles.buttonSpacing} />
      <Button title="Cadastrar Filial" onPress={salvar} />

    </ScrollView>

  );

};

const styles = StyleSheet.create({

  container: {

    padding: 20,
    backgroundColor: '#00B131',
    alignItems: 'center'

  },

  logo: {

    width: 180,
    height: 180,
    marginBottom: 24

  },

  label: {

    alignSelf: 'flex-start',
    marginTop: 12,
    marginBottom: 4,
    color: 'white',
    fontWeight: 'bold'

  },

  input: {

    width: '100%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1b5e20',
    borderRadius: 6,
    padding: 8

  },

  buttonSpacing: {

    marginTop: 16

  },

});

export { FilialFormulario };
