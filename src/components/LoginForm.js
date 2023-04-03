import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import CustomBtn from './CustomBtn';
import CustomInput from './CustomInput';

const LoginForm = ({onSubmit, showNext}) => {
  const [emailOrTel, setEmailOrTel] = useState('');
  const [password, setPassword] = useState('');
  const [activity, setActivity] = useState('');
  const [activityName, setActivityName] = useState('');

  const handleSubmit = () => {
    onSubmit({emailOrTel, password, activity, activityName});
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        {showNext ? (
          <>
            <CustomInput
              placeholder="(E.g. Walk)"
              value={activity}
              onChangeText={setActivity}
            />
            <CustomInput
              placeholder="(E.g. Saturday run)"
              value={activityName}
              onChangeText={setActivityName}
            />
          </>
        ) : (
          <>
            <CustomInput
              placeholder="Email or Mobile No."
              value={emailOrTel}
              onChangeText={setEmailOrTel}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <Text style={styles.forgot}>
              Forgot Password? <Text style={styles.forgotSpan}>Recover</Text>
            </Text>
          </>
        )}
        <CustomBtn onPress={handleSubmit} style={styles.btn}>
          <Text style={styles.btnText}>LOG IN</Text>
        </CustomBtn>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#3077BD',
    padding: 14,
    marginVertical: 30,
  },
  btnText: {
    fontWeight: 600,
    color: '#fff',
    fontSize: 16,
  },
  forgot: {
    marginVertical: 10,
    color: '#4B4B4B',
  },

  forgotSpan: {
    color: '#3077BD',
  },
});