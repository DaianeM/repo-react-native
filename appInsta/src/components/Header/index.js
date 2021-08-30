import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

export default function Header(){
    const imgLogo = require('../../assets/logo.png');
    const imgSend = require('../../assets/send.png');

    return(
        <View style={styles.header}>
            <TouchableOpacity>
                <Image 
                    source={imgLogo}
                    style={styles.logo}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    source={imgSend}
                    style={styles.send}
                />
            </TouchableOpacity>
        </View>
    );
}

