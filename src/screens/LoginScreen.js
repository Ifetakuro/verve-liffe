import {View, Image, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBtn from '../components/CustomBtn';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({navigation, route}) => {
  const [showNextLogin, setShowNextLogin] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const logoUri = require('../assets/verveLogo2.png');
  const facebookUri = require('../assets/facebook.png');
  const googleUri = require('../assets/google.png');

  const handleLogin = ({emailOrTel, password, activity, activityName}) => {
    const emailIsValid = emailOrTel.trim().length > 0;
    const passwordIsValid = password.trim().length > 0;
    const activityIsValid = activity.trim().length > 0;
    const activityNameIsValid = activityName.trim().length > 0;

    if (
      emailIsValid &&
      passwordIsValid &&
      activityIsValid &&
      activityNameIsValid
    ) {
      setFormIsValid(true);
    }

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert('Alert', 'Invalid email or password. Please try again.', [
        {text: 'OK'},
      ]);
      console.log(emailOrTel, password);
      return;
    }

    setShowNextLogin(true);
    console.log(emailOrTel, password);

    if (showNextLogin && formIsValid) {
      navigation.navigate('Home');
      console.log(emailOrTel, password, activity, activityName);
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoUri} />
        <Text style={styles.boldHeader}>
          All your favourite things in one place
        </Text>
        <Text style={styles.qtLink}>
          Click here to login with your
          <Text style={styles.boldSpan}> Quickteller </Text> Account
        </Text>
        <Text style={{fontSize: 12}}>or log in with</Text>
      </View>
      <View style={styles.btnDiv}>
        <CustomBtn style={[styles.btn, styles.blue]}>
          <Image source={facebookUri} />
          <Text style={styles.btnText}>Facebook account</Text>
        </CustomBtn>
        <CustomBtn style={[styles.btn, styles.red]}>
          <Image source={googleUri} />
          <Text style={styles.btnText}>Google account</Text>
        </CustomBtn>
      </View>
      <LoginForm onSubmit={handleLogin} showNext={showNextLogin} />
      <View>
        <Text style={styles.reg} onPress={navigateToRegister}>
          REGISTER
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    gap: 10,
    padding: 5,
  },
  boldHeader: {
    color: '#00425F',
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 15,
  },
  qtLink: {
    color: '#0973AA',
    fontSize: 12,
  },
  boldSpan: {fontWeight: 600},
  btnDiv: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 18,
    marginBottom: 30,
  },
  btn: {
    paddingHorizontal: 23,
    paddingVertical: 15,
  },
  btnText: {
    color: '#fff',
  },

  red: {
    backgroundColor: '#DF4930',
  },
  blue: {
    backgroundColor: '#475993',
  },
  reg: {
    textAlign: 'center',
    color: '#3077BD',
    fontSize: 16,
    fontWeight: 500,
  },
});
