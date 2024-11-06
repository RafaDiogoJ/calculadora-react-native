import { 
    StyleSheet,
    Text,
    TouchableHighlight,
    Dimensions,
} from "react-native"

const {width, height} = Dimensions.get('window')

const Botao = (props) => {
    const estilosBotao = [estilos.botao]
    if (props.duplo) estilosBotao.push(estilos.botaoDuplo)
    if (props.triplo) estilosBotao.push(estilos.botaoTriplo)
    if (props.operador) estilosBotao.push(estilos.botaoOperador)
    return(
        <TouchableHighlight 
            onPress={() => console.log('clicou no botão')
            }>
            <Text style={estilosBotao}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )   
}

const estilos = StyleSheet.create({
    botao : {
        fontSize: 40,
        width: width/4,
        height: 95,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    botaoDuplo: {
        width: width/4*2
    },
    botaoTriplo: {
        width: width/4*3
    },
    botaoOperador: {
        backgroundColor: '#fa8231',
        color:'#fff'
    }
})

export default Botao