import {StyleSheet, Text, View, Animated} from 'react-native';
import React from 'react';
import {generalStyles} from '../components/generalStyle';
import InterestsCircles from '../components/InterestsCircles';

const InterestsScreen = () => {
  return (
    <View style={generalStyles.container}>
      <View>
        <Text style={generalStyles.authenticationHeading}>
          What are your interests?
        </Text>
        <Text>
          We curate the best things based on your favourite interests and
          connect you to much more.
        </Text>
      </View>
      <View>
        <InterestsCircles
          selected={true}
          label={'Bootcamp'}
          color={'#984AE9'}
        />
        <InterestsCircles />
        <InterestsCircles />
        <InterestsCircles />
        <InterestsCircles />
        <InterestsCircles />
        <InterestsCircles />
      </View>
      <View>
        <Text>Next Step &gt;</Text>
      </View>
    </View>
  );
};

export default InterestsScreen;

const styles = StyleSheet.create({});
