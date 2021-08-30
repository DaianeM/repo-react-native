import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import Header from './src/components/Header';
import Post from './src/components/Post';

export default function App(){
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Paulo Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
      likeada: true, 
      likers: 1
     },
    {
      id: '2', 
      nome: 'Juan Dias', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      likeada: true, 
      likers: 10
    },
    {
      id: '3', 
      nome: 'Maria Augusta', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://laboro.edu.br/wp-content/uploads/bigstock-Program-development-concept-Y-177469774-scaled-1.jpg', 
      imgPublicacao: 'https://laboro.edu.br/wp-content/uploads/bigstock-Program-development-concept-Y-177469774-scaled-1.jpg', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Luiza Nóbrega', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://s2.glbimg.com/u4z2wksUF5wyKmdCBaK1dnw1nlY=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/08/19/4.jpg', 
      imgPublicacao: 'https://s2.glbimg.com/u4z2wksUF5wyKmdCBaK1dnw1nlY=/512x320/smart/e.glbimg.com/og/ed/f/original/2018/08/19/4.jpg',
      likeada: false, 
      likers: 32
    }
  ])

  return(
    <View style={styles.container}>
      <Header/>

      <FlatList
        data={feed}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id}
        renderItem={ ({item}) => <Post data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
