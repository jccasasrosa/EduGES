import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ListaMateria from './lista_elementos-horario';
import ListaReservas from './lista_elementos-recursos';
import { useNavigation } from '@react-navigation/native';

const tit_clase = "En el día de hoy";
const lista_clase = [["Matemáticas", "08:30", "2ºA"],["Naturales", "09:30", "1ºC"],["Lengua", "11:30", "3ºA"],["Matemáticas", "15:30", "3ºB"]];

const tit_reservas = "Mis reservas";
const lista_reservas = [];

export default function Home(props) {
    lista_reservas.length = 0;
    const lista_recursos = props.route.params.lista_recursos;
    const lista_instalaciones = props.route.params.lista_instalaciones;
    const set_lista_recursos = props.route.params.set_lista_recursos;
    const set_lista_instalaciones = props.route.params.set_lista_instalaciones;
    const navigation = useNavigation();
    const [eliminaReserva, setEliminaReserva] = useState('');

    useEffect(() => {
        if(eliminaReserva != ''){
            console.log(eliminaReserva.split(',')[0]);
            lista_recursos.map(it => {
                it.map((it2, index) => {
                    if(index === 2){
                        it2.map(it3 => {
                            if(it3.id === eliminaReserva.split(',')[1] && it3.text === eliminaReserva.split(',')[0]){
                                it3.tuya = false;
                                it3.seleccionado = false;
                            }
                        });
                    }
                });
            });
            //{set_lista_recursos(lista_recursos)};

            lista_instalaciones.map(it => {
                it.map((it2, index) => {
                    if(index === 2){
                        it2.map(it3 => {
                            if(it3.id === eliminaReserva.split(',')[1] && it3.text === eliminaReserva.split(',')[0]){
                                it3.tuya = false;
                                it3.seleccionado = false;
                            }
                        });
                    }
                });
            });
            //{set_lista_instalaciones(lista_instalaciones)};

            setEliminaReserva('');
        }
    }, [eliminaReserva]);

  const vistaFinalizarDia = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Finalizar_dia' }],
    });

    navigation.navigate('Finalizar_dia');
  }

  lista_recursos.map((item) => {
    let img = 0;
    item.map((item2, index) => {
        if(index === 1){
            img = item2;
        }
        if(index === 2){
            item2.map((item3) => {
                if(item3.tuya){
                    let aux = [item3.id, img, item3.text];
                    lista_reservas.push(aux);
                }
            });
        }
    });
  });

  lista_instalaciones.map((item) => {
    let img = 0;
    item.map((item2, index) => {
        if(index === 1){
            img = item2;
        }
        if(index === 2){
            item2.map((item3) => {
                if(item3.tuya){
                    let aux = [item3.id, img, item3.text];
                    lista_reservas.push(aux);
                }
            });
        }
    });
  });

  return (
    <ScrollView style={styles.vistaScroll}>
        <View style={styles.container}>
            <ListaMateria lista = {lista_clase} tit = {tit_clase}/>
            <ListaReservas lista = {lista_reservas} tit = {tit_reservas} setEliminaReserva = {setEliminaReserva}/>
            <TouchableOpacity style={styles.boton}  onPress={vistaFinalizarDia}>
                <Text style={styles.textBoton}>Finalizar día</Text>
            </TouchableOpacity>
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
