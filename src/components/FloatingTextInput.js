import {StyleSheet, Text, View, Animated, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {generalStyles} from './generalStyle';

const FloatingTextInput = ({
  onChangeText,
  value,
  secureTextEntry,
  label,
  keyboardType,
}) => {
  const moveText = useRef(new Animated.Value(0)).current;
  const [move, setMove] = useState(false);

  useEffect(() => {
    if (move || value !== '') {
      moveTextUp();
    } else if (!move) {
      moveTextDown();
    }
  }, [move, value]);

  const onFocusHandler = () => {
    setMove(true);
  };

  const onBlurHandler = () => {
    setMove(false);
  };

  const moveTextUp = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const moveTextDown = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 3],
    outputRange: [16, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={generalStyles.inputContainer}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text
          style={
            move || value !== '' ? styles.validLabel : styles.inValidLabel
          }>
          {label}
        </Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={[generalStyles.input, move || (value !== '' && styles.input)]}
        value={value}
        onChangeText={onChangeText}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        secureTextEntry={secureTextEntry}
        blurOnSubmit
        underlineColorAndroid="transparent"
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default FloatingTextInput;

const styles = StyleSheet.create({
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingTop: 18,
    paddingBottom: 6,
    borderBottomWidth: 0,
  },
  inValidLabel: {
    color: '#4B4B4B80',
  },
  validLabel: {
    fontSize: 10,
  },
  animatedStyle: {
    left: 10,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
});
