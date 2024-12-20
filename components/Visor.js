import {View, Text, StyleSheet} from "react-native";

export default props => {
    return(
        <View style ={estilos.visor}>
            <Text style ={estilos.valorVisor}
                numberOflines={1}>
                    {props.valor}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    visor :{
        flex: 1,
        padding: 20,
        justifyContent:"center",
        alignItems:'flex-end',
        backgroundColor: "rgba(0,0,0,0.6)",
        width: '100%'
    },
    valorVisor:{
        fontSize:60,
        color: "#fff",
    },
});