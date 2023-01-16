import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import ListaMateria from './lista_elementos-horario';

const tit_clase = "Horario";
const lista_clase = [["Matemáticas", "08:30", "2ºA"],["Naturales", "09:30", "1ºC"],["Lengua", "11:30", "3ºA"],["Matemáticas", "15:30", "3ºB"]];

export default function Horario() {
  return (
    <ScrollView style={styles.vistaScroll}>
        <View style={styles.container}>
            <ListaMateria lista = {lista_clase} tit = {tit_clase}/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    vistaScroll: {
        flex: 1,
        width: '100%',
    },
});
