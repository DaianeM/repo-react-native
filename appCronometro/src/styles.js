import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#475f94',
    },

    timer: {
        color: '#fff',
        marginTop: -170,
        fontSize: 40,
        fontWeight: 'bold',
    },

    btnArea: {
        flexDirection: 'row',
        marginTop: 130,
        height: 40,
    },

    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        margin: 17,
        borderRadius: 9,
    },

    btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#475f94',
        textTransform: 'uppercase'
    },

    areaUltimo: {
        marginTop: 40,
    },

    textCorrida: {
        fontSize: 20,
        color: '#fff',
        fontStyle: 'italic'
    }

})

export default styles;