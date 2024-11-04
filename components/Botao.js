import { 
    StyleSheet,
    Text,
    TouchableHighlight
} from "react-native"

const Botao = () => {
    return(
        <TouchableHighlight 
            onPress={() => console.log('clicou no botão')
            }>
            <Text styles={estilos.botao}>
                8
            </Text>
        </TouchableHighlight>
    )   
}

const estilos = StyleSheet.create({
    botao : {
        fontSize: 40,
        width: 75,
        height: 75,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }
})

export default Botao