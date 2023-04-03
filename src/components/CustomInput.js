import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={'#4B4B4B80'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: '#E8E8E8',
  },
});

export default CustomInput;
