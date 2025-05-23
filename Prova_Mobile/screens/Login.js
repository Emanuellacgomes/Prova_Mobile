import { StyleSheet, Text, View, TextInput, Button } from 'react-native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Login</Text>
            <TextInput style={styles.input}
                type={Text}
                placeholder='Email'
                textAlign='center'
            ></TextInput>
            <TextInput style={styles.input}
                type={Text}
                secureTextEntry={true}
                placeholder='Senha'
                
            ></TextInput>
            <Button 
                title="Login"
                onPress={() => navigation.navigate('Estoque')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6FEEE',
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
    }
});