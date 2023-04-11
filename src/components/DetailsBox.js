import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

const DetailsBox = ({title, uri}) => {
  return (
    <ImageBackground
      source={uri}
      resizeMode="cover"
      style={styles.box}
      imageStyle={{borderRadius: 10}}>
      <View style={styles.infoCard}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default DetailsBox;

const styles = StyleSheet.create({
  box: {
    height: 80,
    padding: 15,
    justifyContent: 'center',
  },
  title: {color: '#fff', fontWeight: 600, fontSize: 16},
});
