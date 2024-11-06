import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Visor from './components/Visor';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={estilos.container}>
        <Visor />
      <View style={estilos.botoes}>

        <Botao label="AC" triplo/>
        <Botao label="/" operador/>
        <Botao label="7"/>
        <Botao label="8"/>
        <Botao label="9"/>
        <Botao label="*" operador/>

        <Botao label="4"/>
        <Botao label="5"/>
        <Botao label="6"/>
        <Botao label="-" operador/>

        <Botao label="1"/>
        <Botao label="2"/>
        <Botao label="3"/>        
        <Botao label="+" operador/>

        <Botao label="0" duplo />
        <Botao label="."/>
        <Botao label="=" operador/>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
