import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const CustomBtn = ({children, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radius}>
      <View style={[styles.appButton, style]}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButton: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});

export default CustomBtn;
