import { 
    StyleSheet,
    Text,
    TouchableHighlight,
    Dimensions,
} from "react-native"

const {width, height} = Dimensions.get('window')

const Botao = (props) => {
    return(
        <TouchableHighlight 
            onPress={() => console.log('clicou no botão')
            }>
            <Text style={estilos.botao}>
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
    }
})

export default Botao