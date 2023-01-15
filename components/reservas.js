import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ListaElementos from './lista_elementos-recursos';

const tit_recursos = "Recursos";
const tit_instalaciones = "Instalaciones";

export default function Reservas(props) {
    const lista_recursos = props.route.params.lista_recursos;
    const lista_instalaciones = props.route.params.lista_instalaciones;
    
    return (
    <ScrollView style={styles.vistaScroll}>
        <View style={styles.container}>
            <ListaElementos lista = {lista_recursos} tit = {tit_recursos}/>
            <ListaElementos lista = {lista_instalaciones} tit = {tit_instalaciones}/>                
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
        marginBottom: '23%',
    },
});

