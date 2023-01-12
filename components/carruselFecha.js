import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { StyleSheet, Appearance } from 'react-native';

const Fechas = () => {
  // Establece la fecha seleccionada inicialmente en la fecha actual
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Establece el modal como oculto inicialmente
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isDarkModeDevice, setIsDarkModeDevice] = useState(false);

  const colorScheme = Appearance.getColorScheme();
  
  useEffect(() => {
    if (colorScheme === 'dark') {
        // El dispositivo está en modo oscuro
        setIsDarkModeDevice(true);
      } else {
        // El dispositivo está en modo claro
        setIsDarkModeDevice(false);
      }
  }, [colorScheme]);

  return (
    <View style={styles.container}>
      {/* Contenedor para mostrar la fecha seleccionada y el botón */}
      <View style={styles.dateContainer}>
        {/* Botón para mostrar el modal con el Date Picker */}
        <Button 
          title={selectedDate.toLocaleDateString()}
          onPress={() => setIsDatePickerVisible(true)}
        />
      </View>
      {/* Modal con el Date Picker */}
      <DateTimePickerModal
        isDarkModeEnabled={isDarkModeDevice}
        isVisible={isDatePickerVisible}
        mode="date"
        date={selectedDate}
        onConfirm={(date) => {
          setSelectedDate(date);
          setIsDatePickerVisible(false);
        }}
        onCancel={() => setIsDatePickerVisible(false)}
        minimumDate = {new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        color: '#000',
    },
});

export default Fechas;