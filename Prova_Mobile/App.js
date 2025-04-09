
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Estoque from './screens/Estoque';
import Login from './screens/Login';
import FaleConosco from './screens/FaleConosco';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>  
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName="Login">
        <Stack.Screen name="Estoque" component={Estoque}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
