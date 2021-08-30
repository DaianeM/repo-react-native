import React from 'react';
import { Text, View, Image, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';

import { styles } from './styles';

export default function Feed({data}){

    function carregaIcone(likeada) {
        return likeada ? 
        require('../../assets/likeada.png') : 
        require('../../assets/like.png');
    }

    function mostraLikes(likers) {
        if(likers === 0){
            return;
        }

        return(
            <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
        );
    }

    return(
        <View>
            <View style={styles.viewPerfil}>
                <Image 
                    source={{uri: data.imgperfil}}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{data.nome}</Text>
            </View>
            <Image
                source={{uri: data.imgPublicacao}}
                style={styles.fotoPublicacao}
                resizeMode="cover"
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={carregaIcone(data.likeada)}
                        style={styles.iconeLike} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend}>
                    <Image
                        source={require('../../assets/comment.png')}
                        style={styles.iconeLike} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend}>
                    <Image
                        source={require('../../assets/send.png')}
                        style={styles.iconeLike} 
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(data.likers)}

            <Text style={styles.nomeRodape}>{data.nome}</Text>
            <Text style={styles.descricao}>{data.descricao}</Text>
        </View>
    );
}

