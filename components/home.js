import * as React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';
import ListaMateria from './lista_elementos-horario';

const tit_clase = "En el día de hoy";
const lista_clase = [["Matemáticas", "08:30", "2ºA"],["Naturales", "09:30", "1ºC"],["Lengua", "11:30", "3ºA"],["Matemáticas", "15:30", "3ºB"]];

const tit_reservas = "Reservas";
const lista_reservas = [["Proyector", "08:30", ""],["Pista Basket", "10:30", ""],["Raquetas", "12:30", ""],["Aros", "13:30", ""]];

export default function Home() {
  return (
    <ScrollView style={styles.vistaScroll}>
        <View style={styles.container}>
            <ListaMateria lista = {lista_clase} tit = {tit_clase}/>
            <ListaMateria lista = {lista_reservas} tit = {tit_reservas}/>
            <Pressable style={styles.boton}  onPress={() => {}}>
                <Text style={styles.textBoton}>Finalizar día</Text>
            </Pressable>
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
    boton: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#FC5555',
        padding: 18,
        marginTop: 15,
        marginBottom: 120,
        backgroundColor: '#FC5555',
        alignSelf: 'center',
        width: '80%',
    },
    textBoton: {
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    vistaScroll: {
        flex: 1,
        width: '100%',
    },
});
