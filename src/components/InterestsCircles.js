import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {circleUri} from '../assets';

const width = Dimensions.get('window').width;

const InterestsCircles = ({selected, color, label}) => {
  return (
    <View style={[styles.circle, {backgroundColor: color}]}>
      <Text style={styles.label}>{label}</Text>
      {selected === true && (
        <View style={[styles.check, {backgroundColor: color}]}>
          <Image source={circleUri} />
        </View>
      )}
    </View>
  );
};

export default InterestsCircles;

const styles = StyleSheet.create({
  circle: {
    width: 85,
    height: 85,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {color: '#fff', fontWeight: 500, fontSize: 14},
  check: {
    paddingHorizontal: 5,
    paddingVertical: 6,
    borderRadius: 50,
    position: 'absolute',
    left: 57,
    top: 2,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});
