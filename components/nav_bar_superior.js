import React from 'react';
import { View, StyleSheet, Image, Text, Button, Platform, PixelRatio, SafeAreaView } from 'react-native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(8);
const imgCampana = '../assets/notification.png';
const imgAjustes = '../assets/settings.png';

const AppBarSup = () => {
  return (
    <SafeAreaView style={styles.barraNegra}>
      <View style={styles.appBar}>
        <Text style={styles.title}>Centro Jabalcuz</Text>
        <View style={styles.rightButtons}>
          <Image style={styles.icon} source={require(imgCampana)} onPress={() => {}} />
          <Image style={styles.icon} source={require(imgAjustes)} onPress={() => {}} />
          {/* <Button title="Opción 1" onPress={() => {}} />
          <Button title="Opción 2" onPress={() => {}} /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 10,
  },
  barraNegra: {
    backgroundColor: "#000000",
  },
  title: {
    fontSize: fontScale,
    color: '#47525E',
    marginLeft: 15,
  },
  rightButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    height: '21%',
    width: '21%',
    resizeMode: 'contain',
    aspectRatio: 1,
    marginRight: 10,
  },
});

export default AppBarSup;
