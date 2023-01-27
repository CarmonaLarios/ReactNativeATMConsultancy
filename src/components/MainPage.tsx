import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

function MainPage({navigation}: any) {
  const logo = require('../imgs/logo.png');
  const menuCliente = require('../imgs/menu_cliente.png');
  const menuEmpresa = require('../imgs/menu_empresa.png');
  const menuContato = require('../imgs/menu_contato.png');
  const menuServico = require('../imgs/menu_servico.png');

  return (
    <View style={styles.mainView}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Clients')}>
          <Image source={menuCliente} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
          <Image source={menuServico} />
        </TouchableOpacity>
      </View>
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Company')}>
          <Image source={menuEmpresa} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Image source={menuContato} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  logo: {
    marginTop: 30,
  },
  menuButton: {
    width: '64%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  titleBar: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
});
