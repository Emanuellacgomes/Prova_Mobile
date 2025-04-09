import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native'; 
export default function Estoque({navigation}){

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>PRODUTOS:</Text>
            <Image  style={styles.imagem1} source={require('../assets/OIP.jpg')}/>
            <Button title='+'/>
            <Button title='-'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87F785',
      alignItems: 'center',
      justifyContent: 'center'
    },
    texto:{
        fontSize: 36,
        position: 'relative',
        top: '-50px',

    },
    imagem1:{
        width: '200px',
        height: '200px',
        resizeMode: 'center',
        alignContent: 'space-between'
    }
  });