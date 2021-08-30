import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewPerfil: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 18,
        color: '#000'
    },
    fotoPublicacao: {
        height: 300,
        alignItems: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 25,
        height: 25
    },
    btnSend: {
        paddingLeft: 5
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5
    },
    nomeRodape: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    descricao: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 15
    }
})