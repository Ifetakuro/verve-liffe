import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {generalStyles} from './generalStyle';

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  label,
}) => {
  return (
    <View style={generalStyles.inputContainer}>
      {label && (
        <Text style={styles.label}>
          {label} <Text style={styles.asterisk}>*</Text>
        </Text>
      )}
      <TextInput
        style={[generalStyles.input, style]}
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
  label: {
    color: '#00425F',
    marginBottom: 3,
  },
  asterisk: {
    color: '#DC4437',
  },
});

export default CustomInput;
