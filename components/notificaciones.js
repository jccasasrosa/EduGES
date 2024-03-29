import React from 'react';
import { View, Text, StyleSheet, FlatList, PixelRatio } from 'react-native';

const num = [["Guardia", "Hace 2 min", "1ºB", "Raúl Paredes notifica ausencia"],
["Guardia", "hace 23 min", "1ºB", "Sergio Perea notifica ausencia"],
["Excursión", "hace 1 hora", "6ºB", "Juan Carlos notifica excursión"],
["Tutoria", "hace 1 hora", "4ºA", "Javier notifica a los padres de Pedro"]]

const fontScale = PixelRatio.getPixelSizeForLayoutSize(5.5);
const fontScaleElementos = PixelRatio.getPixelSizeForLayoutSize(6.1);
const fontScaleElementosMin = PixelRatio.getPixelSizeForLayoutSize(4.5);

const TextoHoraClase = ({ Materia, Hora, Clase, Motivo }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.textClase}>{Clase}</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.filaEsp}>
          <Text style={styles.textMat}>{Materia}</Text>
          <Text style={styles.textDer}>{Hora}</Text>
        </View>
        <Text numberOfLines={1} style={styles.textMotivo}>{Motivo}</Text>
      </View>
    </View>
  );

export default function Notificaciones() {
  return ( 
    <View style={styles.view}>
      <Text style={styles.subtitulo}>Horas de Clase</Text>
      <View>
        <View>
          {num.map((item, index) => (
            <TextoHoraClase key={index} Materia={item[0]} Hora={item[1]} Clase={item[2]} Motivo={item[3]} />
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
    fontWeight: 'bold',
    alignContent: 'center',
  }, 
  textMat: {
    textAlign: 'left',
    color: '#47525E',
    fontSize: fontScaleElementos,
    flex: 1,
  },  
  textDer: {
    textAlign: 'right',
    color: '#47525E',
    fontSize: fontScaleElementosMin,
  }, 
  textMotivo: {
    flex: 1,
    flexDirection: 'row',
    fontSize: fontScaleElementosMin,
    paddingLeft: 10, 
    marginRight: 0,
    width: '100%',
    color: 'gray',
  }, 
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  filaEsp: {
    flex: 1,
    paddingTop: 3, 
    paddingLeft: 10, 
    paddingRight: 10,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
  },
  subtitulo: {
    color: '#47525E',
    fontSize: fontScale,
    paddingLeft: 10, 
    paddingTop: 10,
  },
  view: {
    backgroundColor: '#f4f4f4',
    paddingBottom: 20,
    padding: 8,
  }
});