import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    imgBiscoito : {
      width: 200,
      height: 200
    },
  
    textoFrase: {
      fontSize: 20,
      color: '#dd7b22',
      fontStyle: 'italic',
      margin: 30,
      textAlign: 'center'
    },
  
    btn: {
      width: 230,
      height: 50,
      borderColor: '#dd7b22',
      borderWidth: 2,
      borderRadius: 25,
    },
  
    btnArea: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    btnTexto: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#dd7b22'
    }
  
  });

  export default styles;