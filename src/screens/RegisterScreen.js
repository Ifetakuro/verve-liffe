import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import {generalStyles} from '../components/generalStyle';
import RegisterForm from '../components/RegisterForm';
import CustomBtn from '../components/CustomBtn';
import FloatingTextInput from '../components/FloatingTextInput';

var width = Dimensions.get('window').width;

const RegisterScreen = ({navigation}) => {
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

  const navigateToInterests = () => {
    navigation.navigate('Interests');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        style={generalStyles.container}
        contentContainerStyle={{paddingBottom: 30}}>
        <Text style={generalStyles.authenticationHeading}>
          How should we address you?
        </Text>
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
        <CustomBtn onPress={navigateToInterests} style={styles.btn}>
          <Text style={styles.btnText}>Continue &gt;&gt;</Text>
        </CustomBtn>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  heading: {},
  input: {
    backgroundColor: '#EFF2F5',
  },
  inputDiv: {
    marginTop: 10,
  },
  measureDiv: {
    flexDirection: 'row',
    gap: 10,
  },
  measure: {
    flex: 1,
  },
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
});
