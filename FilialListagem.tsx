import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Filial } from './Filial';
import { FontAwesome5 } from '@expo/vector-icons';

interface FilialItemProps {

  item: Filial;
  onRemover: (id: string) => void;

}

const FilialItem = ({ item, onRemover }: FilialItemProps): React.ReactElement => (

  <View style={styles.itemContainer}>

    <Pressable style={styles.removeButton} onPress={() => onRemover(item.id)}>
      <FontAwesome5 name="trash" size={20} color="red" />
    </Pressable>
    
    <Text style={styles.text}>Nome: {item.nome}</Text>
    <Text style={styles.text}>Cidade: {item.cidade}</Text>
    <Text style={styles.text}>Endereço: {item.endereco}</Text>
    <Text style={styles.text}>Tamanho do pátio: {item.tamanhoPatio} m²</Text>
    <Text style={styles.id}>ID: {item.id}</Text>

  </View>

);

interface FilialListagemProps {

  lista: Filial[];
  onRemover: (id: string) => void;

}

const FilialListagem = ({ lista, onRemover }: FilialListagemProps): React.ReactElement => (

  <ImageBackground
    source={require('./assets/mottu-logo.png')}
    style={styles.background}
    imageStyle={styles.imageStyle}
  >
    <FlatList
      contentContainerStyle={styles.listContent}
      data={lista}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FilialItem item={item} onRemover={onRemover} />}
    />
  </ImageBackground>

);

const styles = StyleSheet.create({

  background: {

    flex: 1,
    backgroundColor: '#00B131',
    position: 'relative'

  },

  imageStyle: {

    width: 200,
    height: 200,
    opacity: 0.1,
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 100,
    left: Dimensions.get('window').width / 2 - 100

  },

  listContent: {

    padding: 16,
    paddingBottom: 40

  },

  itemContainer: {

    position: 'relative',
    padding: 16,
    backgroundColor: '#a5d6a7',
    borderRadius: 8,
    marginBottom: 12,
    width: '100%'

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

export { FilialListagem };
