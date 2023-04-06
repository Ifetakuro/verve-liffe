import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const InterestsCircles = ({selected, color, label}) => {
  const circleUri = require('../assets/check.png');

  return (
    <View>
      <View style={[styles.circle, {backgroundColor: color}]}>
        <Text style={styles.label}>{label}</Text>
        {selected && (
          <View style={[styles.check, {backgroundColor: color}]}>
            <Image source={circleUri} />
          </View>
        )}
      </View>
    </View>
  );
};

export default InterestsCircles;

const styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {color: '#fff', fontWeight: 500},
  check: {
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderRadius: 50,
    position: 'absolute',
    left: 55,
    top: 4,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});
