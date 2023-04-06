import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatingTextInput from './FloatingTextInput';
import CustomBtn from './CustomBtn';

const RegisterForm = ({onPressHandler}) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [refCode, setRefCode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <View>
      <FloatingTextInput
        label="First Name"
        value={fName}
        onChangeText={setFName}
      />
      <FloatingTextInput
        label="Last Name (Surname)"
        value={lName}
        onChangeText={setLName}
      />
      <FloatingTextInput
        label="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <FloatingTextInput
        label="Phone Number"
        value={tel}
        onChangeText={setTel}
        keyboardType={'numeric'}
      />
      <FloatingTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <FloatingTextInput
        label="Re-confirm Password"
        value={confirmPwd}
        onChangeText={setConfirmPwd}
        secureTextEntry={true}
      />
      <FloatingTextInput
        label="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <FloatingTextInput
        label="Country"
        value={country}
        onChangeText={setCountry}
      />
      <FloatingTextInput
        label="Referal Code (enter referal code if any, it is optional)"
        value={refCode}
        onChangeText={setRefCode}
      />

      <View>
        <Text style={styles.label}>
          I agree with <Text>Terms</Text> and <Text>Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
});
