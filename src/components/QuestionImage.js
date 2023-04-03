/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const QuestionImage = () => {
  return (
    <View>
      <Text
        style={{
          width: 24,
          height: 24,
          borderWidth: 2,
          borderColor: '#828282',
          textAlign: 'center',
          borderRadius: 40 / 2,
          marginLeft: 15,
          fontWeight: 600,
          fontSize: 18,
          color: '#828282',
        }}>
        ?
      </Text>
    </View>
  );
};

export default QuestionImage;
