import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {generalStyles} from '../components/generalStyle';
import InterestsCircles from '../components/InterestsCircles';
import {appDetailsData, interestData} from '../data';
import DetailsBox from '../components/DetailsBox';
import {digitalPaymentUri} from '../assets';
import CustomBtn from '../components/CustomBtn';

const AppDetailsScreen = ({navigation}) => {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View
      style={generalStyles.container}
      contentContainerStyle={{paddingBottom: 30}}>
      <View>
        <Text style={generalStyles.authenticationHeading}>
          Thanks for taking your time to create an account with us
        </Text>
        <Text>Here’s what to look forward to in the Verve Life App</Text>
      </View>
      <FlatList
        data={appDetailsData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.boxDiv}
        renderItem={({item}) => (
          <DetailsBox uri={item.uri} title={item.title} />
        )}
      />
      <CustomBtn onPress={navigateToHome} style={styles.btn}>
        <Text style={styles.btnText}>GET STARTED</Text>
      </CustomBtn>
    </View>
  );
};

export default AppDetailsScreen;

const styles = StyleSheet.create({
  boxDiv: {
    marginVertical: 35,
    justifyContent: 'space-between',
    gap: 10,
  },

  btn: {
    backgroundColor: '#3077BD',
    padding: 14,
    marginVertical: 30,
    borderRadius: 10,
  },
  btnText: {
    fontWeight: 600,
    color: '#fff',
    fontSize: 16,
  },
});
