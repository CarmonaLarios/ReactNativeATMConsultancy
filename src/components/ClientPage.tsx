import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

function ClientPage() {
  const details = require('../imgs/detalhe_cliente.png');
  const clientOne = require('../imgs/cliente1.png');
  const clientTwo = require('../imgs/cliente2.png');

  return (
    <View style={styles.mainView}>
      <View style={styles.childrenView}>
        <View style={styles.centerView}>
          <Image source={details} style={styles.imageTop} />
          <Text style={styles.textColor}>Our Clients</Text>
        </View>
      </View>
      <View style={styles.childrenView}>
        <View style={styles.lineBreak} />
      </View>
      <View style={styles.clientsView}>
        <Image source={clientOne} style={styles.imageClient} />
        <Text style={styles.clientsText}>SYS Information Technology</Text>
        <Image source={clientTwo} style={styles.imageClient} />
        <Text style={styles.clientsText}>RSM Human Resources</Text>
      </View>
    </View>
  );
}

export default ClientPage;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  childrenView: {
    margin: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lineBreak: {
    width: '80%',
    height: 0.5,
    backgroundColor: '#b9c941',
  },
  centerView: {
    alignItems: 'center',
  },
  imageTop: {
    marginBottom: 10,
  },
  imageClient: {
    margin: 15,
  },
  textColor: {
    color: '#b9c941',
    fontSize: 30,
  },
  clientsView: {
    margin: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  clientsText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
