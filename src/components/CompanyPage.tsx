import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const CompanyPage = () => {
  const personLogo = require('../imgs/detalhe_empresa.png');
  return (
    <View style={styles.mainView}>
      <View style={styles.viewImgCompany}>
        <Image source={personLogo} />
        <Text style={styles.txtCompany}>The Company</Text>
      </View>
      <View style={styles.viewAbout}>
        <Text style={styles.txtInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          dolorum obcaecati quia consectetur fugit vitae dolorem harum
          temporibus ab, nemo quisquam amet veniam doloribus adipisci nobis hic
          autem. Molestias, temporibus.
        </Text>
      </View>
    </View>
  );
};

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
    color: '#EC7148',
    fontSize: 30,
    marginLeft: 20,
  },
  viewAbout: {
    marginTop: 30,
    marginHorizontal: 40,
  },
  txtInfo: {
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default CompanyPage;
