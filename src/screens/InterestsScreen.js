import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {generalStyles} from '../components/generalStyle';
import InterestsCircles from '../components/InterestsCircles';
import {interestData} from '../data';

const InterestsScreen = ({navigation}) => {
  const navigateToAppDetails = () => {
    navigation.navigate('AppDetails');
  };
  return (
    <View
      style={generalStyles.container}
      contentContainerStyle={{paddingBottom: 30}}>
      <View>
        <Text style={generalStyles.authenticationHeading}>
          What are your interests?
        </Text>
        <Text>
          We curate the best things based on your favourite interests and
          connect you to much more.
        </Text>
      </View>

      <FlatList
        key={4}
        data={interestData}
        horizontal={false}
        contentContainerStyle={styles.circlesDiv}
        columnWrapperStyle={styles.circles}
        numColumns={4}
        renderItem={({item}) => (
          <InterestsCircles
            label={item.title}
            color={item.color}
            selected={item.selected}
          />
        )}
        keyExtractor={item => item.id}
      />

      <View>
        <Text style={styles.nextBtn} onPress={navigateToAppDetails}>
          Next Step &gt;
        </Text>
      </View>
    </View>
  );
};

export default InterestsScreen;

const styles = StyleSheet.create({
  circlesDiv: {
    marginVertical: 20,
  },
  circles: {
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  nextBtn: {
    color: '#1A73E8',
    fontWeight: 600,
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});
