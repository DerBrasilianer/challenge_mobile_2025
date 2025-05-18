import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native';
import { Moto } from './Moto';
import { FontAwesome5 } from '@expo/vector-icons';

interface MotoItemProps {

  item: Moto;
  onRemover: (id: string) => void;

}

const MotoItem = ({ item, onRemover }: MotoItemProps): React.ReactElement => (

  <View style={styles.itemContainer}>

    <Pressable style={styles.removeButton} onPress={() => onRemover(item.id)}>
      <FontAwesome5 name="trash" size={20} color="red" />
    </Pressable>

    <Text style={styles.text}>Modelo: {item.modelo}</Text>
    <Text style={styles.text}>Placa: {item.placa}</Text>
    <Text style={styles.text}>Status: {item.noPatio ? 'No pátio' : 'Fora do pátio'}</Text>
    <Text style={styles.id}>ID: {item.id}</Text>

  </View>

);

interface MotoListagemProps {

  lista: Moto[];
  onRemover: (id: string) => void;

}

const MotoListagem = ({ lista, onRemover }: MotoListagemProps): React.ReactElement => (

  <View style={styles.container}>

    <Image
      source={require('./assets/mottu-logo.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    />
    
    <FlatList
      data={lista}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MotoItem item={item} onRemover={onRemover} />}
      contentContainerStyle={styles.listContent}
    />

  </View>

);

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#00B131',
    position: 'relative'

  },

  backgroundImage: {

    position: 'absolute',
    width: 200,
    height: 200,
    top: '30%',
    alignSelf: 'center',
    opacity: 0.15,
    zIndex: 0

  },

  listContent: {

    padding: 16,
    zIndex: 1

  },

  itemContainer: {

    position: 'relative',
    padding: 16,
    backgroundColor: '#a5d6a7',
    borderRadius: 8,
    marginBottom: 12

  },

  text: {

    color: 'black',
    marginBottom: 4

  },

  removeButton: {

    position: 'absolute',
    top: 8,
    right: 8,
    padding: 4

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

export { MotoListagem };
