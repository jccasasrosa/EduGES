import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import Fecha from './carruselFecha'

const fontScale = PixelRatio.getPixelSizeForLayoutSize(5.5);
const fontScaleElementos = PixelRatio.getPixelSizeForLayoutSize(6.1);

const TextoHoraClase = ({ Materia, Hora, Clase }) => (
    <View style={styles.card}>
      <Text style={styles.textClase}>{Clase}</Text>
      <Text style={styles.textMat}>{Materia}</Text>
      <Text style={styles.textDer}>{Hora}</Text>
    </View>
  );

export default function ListaMateria({ lista, tit }) {
  return ( 
    <View style={styles.view}>
      <Text style={styles.subtitulo}>{tit}</Text>
      {tit === "Horario" && <Fecha/>}
      {tit === "Horario" && <Text style={styles.espacio}/>}
      <View>
        <View>
          {lista.map((item, index) => (
            <View key={index}>
              <TextoHoraClase Materia={item[0]} Hora={item[1]} Clase={item[2]} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

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
    fontSize: fontScaleElementos,
    alignContent: 'center',
    minWidth: 45,
  }, 
  textMat: {
    textAlign: 'left',
    color: '#47525E',
    fontSize: fontScaleElementos,
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
    fontSize: fontScaleElementos,
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 10, 
    paddingRight: 10,
    marginRight: 0,
  }, 
  subtitulo: {
    backgroundColor: '#ecf0f1',
    color: '#47525E',
    fontSize: fontScale,
    paddingLeft: 10, 
  },
  view: {
    backgroundColor: '#ecf0f1',
    paddingBottom: 20,
  },
  espacio: {
    paddingBottom: 5,
  }
});