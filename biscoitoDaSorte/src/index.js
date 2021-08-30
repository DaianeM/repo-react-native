import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles.js';


export default function App(){
  const [biscoito, setBiscoito] = useState(require('./assets/biscoito.png'));
  const [frase, setFrase] = useState('');

  let frases = [
    'Viva simples, sonhe grande, seja grato, dê amor, ria muito.',
    'Que os sonhos te levem para onde o coração é feliz.',
    'Que a meta seja a felicidade e não a perfeição.',
    'Entrego, confio, aceito e agradeço.',
    'Sempre tenha esperança. A melhor sensação do mundo é saber que existem infinitas possibilidades.',
    'Nunca deixe de acreditar. Seja otimista! Pois de um dia para o outro a vida se transforma.',
    'Quanto mais a gente agradece, mais coisas boas acontecem.',
    'Sempre há outra chance, uma outra amizade ou um outro amor. Para todo fim, um recomeço.',
    'O que você tem de diferente é o que você tem de mais bonito.',
    'Na incerteza do amanhã, escolho o hoje para ser feliz.'
  ];

  const quebrarBiscoito = () =>{
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    let fraseEscolhida = frases[numeroAleatorio];

    setFrase(`" ${fraseEscolhida} "`);
    setBiscoito(require('./assets/biscoitoAberto.png'));
  }

  const resetBiscoito = () => {
    setFrase('');
    setBiscoito(require('./assets/biscoito.png'));
  }

  return(
    <View style={styles.container}>
      <Image 
        style={styles.imgBiscoito} 
        source={biscoito} 
      />

      <Text style={styles.textoFrase}>{frase}</Text>

      <TouchableOpacity style={styles.btn} onPress={quebrarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, {marginTop: 15, borderColor: '#121212'}]} onPress={resetBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}



