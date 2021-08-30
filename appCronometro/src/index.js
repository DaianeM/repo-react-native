import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
    const cronoImg = require('./assets/crono.png');
    const [tempo, setTempo] = useState(0);
    const [botao, setBotao] = useState('Vai');
    const [ultimo, setUltimo] = useState(null);

    const vai = () => {
        if(timer !== null){
            clearInterval(timer); //pausa o timer
            timer = null;
            setBotao('Vai');
        }else{
            timer = setInterval(()=>{
                ss++;

                if(ss === 60) {
                    ss = 0;
                    mm++;
                }

                if(mm === 60) {
                    mm = 0;
                    hh++;
                }

                let format = (hh < 10 ? '0'+ hh : hh) + ':'
                + (mm < 10 ? '0'+ mm : mm) + ':'
                + (ss < 10 ? '0' + ss : ss);

                setTempo(format);
            }, 1000)

            setBotao('Pausar');
        }
    }

    const limpar = () => {
        if(timer !== null){
            clearInterval(timer);
            timer = null;
        }
        setUltimo(tempo);
        setTempo(0);
        ss = 0;
        mm = 0;
        hh = 0;
        setBotao('Vai');
    }


    return(
        <View style={styles.container}>
            <Image source={cronoImg}/>
            <Text style={styles.timer}> {tempo} </Text>

            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={vai}>
                    <Text style={styles.btnTexto}> {botao} </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={limpar}>
                    <Text style={styles.btnTexto}>Limpar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.areaUltimo}>
                <Text style={styles.textCorrida}>
                    {ultimo ? `Último tempo: ${ultimo}` : ''}
                </Text>
            </View>
        </View>
    );
}

