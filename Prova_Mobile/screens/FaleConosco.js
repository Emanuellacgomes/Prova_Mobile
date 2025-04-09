import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'; 
export default function FaleConosco({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Fale Conosco</Text>
            <Image style={styles.img} source={require('../assets/R.png')}></Image>
            <TextInput style={styles.input}
                type={Text}
                placeholder='Nome'
                textAlign='center'
            ></TextInput>
            <TextInput style={styles.input}
                type={Text}
                placeholder='Email'
                
            ></TextInput>
            <TextInput style={styles.input}
                type={Text}
                placeholder='Mensagem'
                
            ></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ABFEEE',
      alignItems:'center',
      justifyContent:'center'
    },
    input: {
        height: 30,
        width: '25%',
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center'
    },
    texto:{
        fontSize: 36,
    },
    img:{
      width: '200px',
      height: '100px',
      resizeMode: 'center'
    }
});