import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const CustomBtn = ({children, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.appButton}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButton: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomBtn;
