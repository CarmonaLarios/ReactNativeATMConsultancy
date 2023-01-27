import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ContactPage = () => {
  const contactImage = require('../imgs/detalhe_contato.png');
  return (
    <View style={styles.mainView}>
      <View style={styles.viewImgContact}>
        <Image source={contactImage} />
        <Text style={styles.txtContact}>Contacts</Text>
      </View>
      <View style={styles.viewContact}>
        <Text style={styles.txtInfo}>Telephone: (62) 1234-5678</Text>
        <Text style={styles.txtInfo}>Cell phone: (62) 91234-5678</Text>
        <Text style={styles.txtInfo}>
          E-mail: some.email@atmconsultancy.com
        </Text>
      </View>
    </View>
  );
};

export default ContactPage;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  viewImgContact: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtContact: {
    alignSelf: 'center',
    color: '#61BD8C',
    fontSize: 30,
    marginLeft: 20,
  },
  viewContact: {
    marginTop: 30,
  },
  txtInfo: {
    fontSize: 18,
    textAlign: 'justify',
  },
});
