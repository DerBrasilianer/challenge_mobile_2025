import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = (): React.ReactElement => {

  return (

    <View style={styles.container}>

      <Image
        source={require('./assets/mottu-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo à Gestão de Motos</Text>
      <Text style={styles.subtitle}>Use o menu para acessar os pátios</Text>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#00B131',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16

  },

  logo: {

    width: 200,
    height: 200,
    marginBottom: 24

  },

  title: {

    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12

  },

  subtitle: {

    fontSize: 16,
    color: 'white'

  },
  
});

export { HomeScreen };
