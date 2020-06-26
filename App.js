import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';

export default function App() {
  
  //const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  //const getLembrete = (digitado) => {
  //  setLembrete(digitado);
  //}

  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes +1);
      return [{ key: contadorLembretes.toString(), 
        value: lembrete}, ...lembretes];
    })
    console.log(lembrete);
  }

  const apagarLembretes = () => {
    setLembretes([]);
  }

  return (
    <View style={styles.telaPrinciaplView}>

    <LembreteInput 
      onAdicionarLembrete={adicionarLembrete}
      onApagarTudo={apagarLembretes}
    />

      {/* aqui será exibidsa a  lista de lembretes */}
      <View>
        <FlatList
          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem lembrete={lembrete.item.value}/>
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
