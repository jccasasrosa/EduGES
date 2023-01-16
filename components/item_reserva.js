import React, { useState } from 'react';
import { View, Button, Pressable, StyleSheet, Text, PixelRatio, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fechas from './carruselFecha';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(5.5);
const fontScaleBotones = PixelRatio.getPixelSizeForLayoutSize(6.1);

export default function ItemReserva(props) {
    const navigation = useNavigation();
    const { route } = props;
    const { buttons } = route.params;
    const lista_recursos = props.route.params.lista_recursos;
    const lista_instalaciones = props.route.params.lista_instalaciones;
    const set_lista_recursos = props.route.params.set_lista_recursos;
    const set_lista_instalaciones = props.route.params.set_lista_instalaciones;
    const [activeButtons, setActiveButtons] = useState([]);
    const [additionalButton, setAdditionalButton] = useState(false);

    const muestraModalDestructor = (boton) => {
        Alert.alert(
          'Atención',
          '¿Seguro que quiere cancelar la reserva?',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancela'),
            },
            {
              text: 'Confirmar',
              onPress: () => uncancell(boton),
              style: 'destructive',
            },
          ]
        );
      };

      const muestraModalNormal = (boton) => {
        Alert.alert(
          'Atención',
          '¿Seguro que quiere realizar la reserva?',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancela'),
            },
            {
              text: 'Confirmar',
              onPress: () => confirmarReservas(boton),
            },
          ]
        );
      };

    const handlePress = (boton) => {
        let aux = [...activeButtons];
        let material = aux.find(it => it.find(it2 => it2.id === boton.id && it2.text === boton.text));
        let reserva = material.find(it3 => it3.id === boton.id && it3.text === boton.text);
        if(!reserva.tuya) {
            reserva.seleccionado = !reserva.seleccionado;
        } else {
            muestraModalDestructor(boton);
        }

        setActiveButtons(aux);

        setAdditionalButton(false);
        material.map((item) => {
            if (item.seleccionado === true) {
                setAdditionalButton(true);
            }
        });
    };

    const uncancell = (boton) => {
        let aux = [...activeButtons];
        let material = aux.find(it => it.find(it2 => it2.id === boton.id && it2.text === boton.text));
        let reserva = material.find(it3 => it3.id === boton.id && it3.text === boton.text);
        reserva.tuya = false;
        reserva.seleccionado = false;
        reserva.state = false;

        setActiveButtons(aux);
    };

    const addItem = (newItem) => {  
        if (!activeButtons.find(item => item.id === newItem.id)) {
            setActiveButtons([...activeButtons, newItem]);
        }
    };

    addItem(buttons);

    const reservar = (boton) => {
        muestraModalNormal(boton);
    }

    const confirmarReservas = (boton) => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Reservas' }],
        });

        let aux = [...activeButtons];
        let material = aux.find(it => it.find(it2 => it2.id === boton[0].id && it2.text === boton[0].text));
        material?.map((item) => {
            if (item.seleccionado === true) {
                item.tuya = true;
                item.seleccionado = false;
                lista_recursos.map(it => {
                    it.map((it2, index) => {
                        if(index === 2){
                            it2.map(it3 => {
                                if(it3.id === item.id && it3.text === item.text){
                                    it3.tuya = true;
                                    it3.seleccionado = false;
                                }
                            });
                        }
                    });
                });

                {set_lista_recursos(lista_recursos)};

                lista_instalaciones.map(it => {
                    it.map((it2, index) => {
                        if(index === 2){
                            it2.map(it3 => {
                                if(it3.id === item.id && it3.text === item.text){
                                    it3.tuya = true;
                                    it3.seleccionado = false;
                                }
                            });
                        }
                    });
                });
                {set_lista_instalaciones(lista_instalaciones)};
            }
        });
        setActiveButtons(aux);
    }

    return (
        <ScrollView style={styles.containerScroll}>
            <View style={styles.container}>
                {buttons.length != 0 && <Text style={styles.textTitulo}>{buttons[0].id}</Text>}
                <Fechas/>
                {buttons.map((item, index) => (
                    <Pressable
                        onPress={() => handlePress(item)}
                        style={[
                            !activeButtons.find(it => it.find(it2 => it2.id === item.id && it2.text === item.text))?.find(it3 => it3.id === item.id && it3.text === item.text)?.state ? 
                                (activeButtons.find(it => it.find(it2 => it2.id === item.id && it2.text === item.text))?.find(it3 => it3.id === item.id && it3.text === item.text)?.seleccionado ? 
                                    styles.selectedButton
                                    : (activeButtons.find(it => it.find(it2 => it2.id === item.id && it2.text === item.text))?.find(it3 => it3.id === item.id && it3.text === item.text)?.tuya ?
                                        styles.cancelaReservaButton : styles.deselectedButton))
                            : styles.noActivateButton,
                        ]}
                        disabled={activeButtons.find(it => it.find(it2 => it2.id === item.id && it2.text === item.text))?.find(it3 => it3.id === item.id && it3.text === item.text)?.state}>
                        <Text style={styles.buttonText}>{item.text}</Text>
                    </Pressable>
                ))}
                <TouchableOpacity
                    style={[
                        styles.buttonConfirmarDesactivado,
                        additionalButton ? styles.buttonConfirmarActivado : styles.buttonConfirmarDesactivado,
                    ]}
                    onPress={() => reservar(buttons)}
                    disabled={!additionalButton}>
                    <Text style={[
                        styles.confirmarButtonTextDeactivated,
                        additionalButton ? styles.confirmarButtonTextActivated : styles.confirmarButtonTextDeactivated,
                    ]}
                    disabled={!additionalButton}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    textTitulo: {
        color: '#47525E',
        fontSize: fontScale,
        paddingLeft: 10, 
    },
    containerScroll: {
        flex: 1,
        width: '100%',
    },
    buttonConfirmarActivado: {
        top: '4%',
        width: '80%',
        borderWidth: 2,
        borderColor: '#2abbf5',
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 140,
    },
    buttonConfirmarDesactivado: {
        top: '4%',
        width: '80%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#A0A1A2',
        padding: 5,
        marginTop: 10,
        backgroundColor: '#A0A1A2',
        alignSelf: 'center',
        marginBottom: 140,
    },
    selectedButton: {
        alignSelf: 'center',
        top: 15,
        width: '90%',
        margin: 3,
        marginBottom: 8,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: fontScale,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#9bf765',
        flexDirection: 'column',
        bottom: 15,
        justifyContent: 'flex-start',
        borderColor: 'gray',
    },
    noActivateButton: {
        alignSelf: 'center',
        top: 15,
        width: '90%',
        margin: 3,
        marginBottom: 8,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: fontScale,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#A0A1A2',
        flexDirection: 'column',
        bottom: 15,
        justifyContent: 'flex-start',
        borderColor: '#A0A1A2',
    },
    cancelaReservaButton: {
        alignSelf: 'center',
        top: 15,
        width: '90%',
        margin: 3,
        marginBottom: 8,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: fontScale,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#FC5555',
        flexDirection: 'column',
        bottom: 15,
        justifyContent: 'flex-start',
        borderColor: 'gray',
    },
    deselectedButton: {
        alignSelf: 'center',
        top: 15,
        width: '90%',
        margin: 3,
        marginBottom: 8,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: fontScale,
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        bottom: 15,
        justifyContent: 'flex-start',
        borderColor: 'gray'
    },
    buttonText: {
        textAlign: "center",
        fontSize: fontScale,
        color: 'black',
        padding: 10,
        paddingTop: 12,
        paddingBottom: 12,
    },
    confirmarButtonTextDeactivated: {
        alignSelf: 'center',
        fontSize: fontScaleBotones,
        color: '#cfcfcf',
        padding: 10,
        fontWeight: 'bold',
    },
    confirmarButtonTextActivated: {
        alignSelf: 'center',
        fontSize: fontScaleBotones,
        color: '#2abbf5',
        fontWeight: 'bold',
    },
    textAusencia: {
        textAlign: "left",
        borderColor: 'gray',
        fontSize: fontScale,
        marginLeft: 10,
        width: '90%',
        color: '#47525E',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'gray',
    }
});