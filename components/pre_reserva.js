import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ListaElementos from './lista-elementos_recursos';

const tit_recursos = "Recursos";
const lista_recursos = [["Balones Fútbol", "https://user-images.githubusercontent.com/106140483/212367000-321f163b-645e-4315-8016-9bbea3081325.png"], ["Balones Medicinales", "https://user-images.githubusercontent.com/106140483/212367002-a0288192-c174-4534-91c3-ad1f49f8226e.png"], ["Combas", "https://user-images.githubusercontent.com/106140483/212367004-980e1f36-88d5-4110-a378-4b1a952a0ba3.png"], ["Pelotas Basket", "https://user-images.githubusercontent.com/106140483/212366988-0d229a58-b285-4a83-acc8-864e51a49009.png"]];

const tit_instalaciones = "Instalaciones";

const lista_instalaciones = [["Aula de Informática", "https://user-images.githubusercontent.com/106140483/212366993-6ed651df-f27e-49c6-9351-a0dc41f5e64e.png"], ["Biblioteca", "https://user-images.githubusercontent.com/106140483/212366996-b25e8cf2-654a-4b4f-b0e0-428f1843539b.png"], ["Pabellón A", "https://user-images.githubusercontent.com/106140483/212366998-ee8d2e18-2977-4304-8daf-1a28668a6ccb.png"], ["Pabellón B", "https://user-images.githubusercontent.com/106140483/212366998-ee8d2e18-2977-4304-8daf-1a28668a6ccb.png"]];

export default function Home() {


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
    },
});

