import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ServicesPage = () => {
  const toolsLogo = require('../imgs/detalhe_servico.png');
  return (
    <View style={styles.mainView}>
      <View style={styles.viewImgCompany}>
        <Image source={toolsLogo} />
        <Text style={styles.txtCompany}>Our Services</Text>
      </View>
      <View style={styles.viewAbout}>
        <Text style={styles.txtInfo}>-Consultancy;</Text>
        <Text style={styles.txtInfo}>-Processes;</Text>
        <Text style={styles.txtInfo}>-Project monitoring;</Text>
      </View>
    </View>
  );
};

export default ServicesPage;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  viewImgCompany: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtCompany: {
    alignSelf: 'center',
    color: '#19d1c8',
    fontSize: 30,
    marginLeft: 20,
  },
  viewAbout: {
    marginTop: 30,
    alignSelf: 'flex-start',
    marginLeft: 40,
  },
  txtInfo: {
    fontSize: 18,
  },
});
