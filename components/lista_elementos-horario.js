import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const num = [["Matemáticas", "09:30", "2ºA"],["Naturales", "09:30", "1ºC"],["Lengua", "08:30", "3ºA"],["Matemáticas", "15:30", "3ºB"],["Matemáticas", "09:30", "2ºC"]]

const TextoHoraClase = ({ Materia, Hora, Clase }) => (
    <View style={styles.card}>
      <Text style={styles.textClase}>{Clase}</Text>
      <Text style={styles.textMat}>{Materia}</Text>
      <Text style={styles.textDer}>{Hora}</Text>
    </View>
  );

const listaClases = () => { 
  return ( 
    <View style={styles.view}>
      <Text style={styles.subtitulo}>Horas de Clase</Text>
      <View>
        <FlatList 
          data = {num}
          renderItem = {
            ({item}) => (
              <TextoHoraClase Materia={item[0]} Hora={item[1]} Clase={item[2]} />
            )
        }/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  card: {
    top: 15, 
    margin: 12, 
    marginTop: 0, 
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 8, 
    paddingRight: 8, 
    fontSize: 15, 
    borderWidth: 2, 
    borderRadius: 15, 
    textAlign: 'left',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    bottom: 15,
  },
  textClase: {
    borderRadius: 10,
    borderWidth: 1,
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 10, 
    paddingRight: 10,
    marginRight: 0,
    backgroundColor: '#f4f4f4',
    fontSize: 17,
    alignContent: 'center',
  }, 
  textMat: {
    textAlign: 'left',
    color: '#47525E',
    fontSize: 17,
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 10, 
    paddingRight: 10,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center', 
    flex:1
  },  
  textDer: {
    textAlign: 'right',
    color: '#47525E',
    fontSize: 17,
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 10, 
    paddingRight: 10,
    marginRight: 0,
  }, 
  subtitulo: {
    color: '#47525E',
    fontSize: 13,
    paddingLeft: 10, 
  },
  view: {
    backgroundColor: '#f4f4f4',
  }
});

export default listaClases;
