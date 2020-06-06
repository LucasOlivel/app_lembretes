import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  const getLembrete = (digitado) => {
    setLembrete(digitado);
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes +1);
      return [{ key: contadorLembretes.toString(), value: lembrete}, ...lembretes];
    })
    console.log(lembrete);
  }

  return (
    <View style={styles.telaPrinciaplView}>
      <View style={styles.lembreteView}>
        {/* usuário irá inserir lembretes aqui */}
        <TextInput 
          placeholder="Lembrar..."
          style={styles.lembreteTextInput}
          onChangeText={getLembrete}
          value={lembrete}
        />
      </View>
      <View
          style={styles.btnAdicionarLembrete}>
          <Button 
            title="+ Adicionar lembrete"
            onPress={adicionarLembrete}
          />
      </View>
      <View
          style={styles.btnAdicionarLembrete}>
          <Button 
            title="Limpar lembrete"
            onPress={() => setLembretes([])}
          />
      </View>
      {/* aqui será exibidsa a  lista de lembretes */}
      <View>
        <FlatList
          data={lembretes}
          renderItem={
            lembrete => (
              <View style={styles.itemNaLista}>
                <Text>{lembrete.item.value}</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrinciaplView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  lembreteTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 2,
    alignItems: 'center',
    width: '100%'
  },
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    alignItems: 'center'
  },
  btnAdicionarLembrete: {
    marginTop: 8,
  }
});
