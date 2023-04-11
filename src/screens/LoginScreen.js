import {
  View,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBtn from '../components/CustomBtn';
import LoginForm from '../components/LoginForm';
import {generalStyles} from '../components/generalStyle';
import {facebookUri, googleUri, logoUri} from '../assets';

const LoginScreen = ({navigation, route}) => {
  const [showNextLogin, setShowNextLogin] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

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
  };

  if (showNextLogin && formIsValid) {
    navigation.navigate('Home');
  }

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        style={generalStyles.container}
        contentContainerStyle={{paddingBottom: 30}}>
        <View style={styles.header}>
          <Image source={logoUri} />
          <Text style={generalStyles.authenticationHeading}>
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
        <View style={styles.or}>
          <Text style={styles.orText}>Or</Text>
        </View>
        <CustomBtn onPress={navigateToRegister} style={styles.regBtn}>
          <Text style={styles.reg}>REGISTER</Text>
        </CustomBtn>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    gap: 10,
    padding: 5,
  },
  qtLink: {
    color: '#0973AA',
    fontSize: 12,
  },
  boldSpan: {fontWeight: 600},
  btnDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#DF4930',
    borderRadius: 3,
    paddingVertical: 15,
    flex: 1,
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
  or: {
    marginVertical: 15,
  },
  orText: {
    textAlign: 'center',
    fontWeight: 500,
  },
  regBtn: {backgroundColor: '#D1E9FE', paddingVertical: 15, borderRadius: 30},

  reg: {
    textAlign: 'center',
    color: '#3077BD',
    fontSize: 16,
    fontWeight: 500,
  },
});
