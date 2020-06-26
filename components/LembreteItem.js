import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LembreteItem = (props) => {
    return(
        <View style={estilos.itemNaLista}>
            <Text>{props.lembrete}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#CCC',
        borderBottomColor: '#000',
        borderColor: '#000',
        borderBottomWidth: 1,
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 12,
        fontSize: 16,
        alignItems: 'center'
      }
});

export default LembreteItem;