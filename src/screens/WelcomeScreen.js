import {View, ImageBackground, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import FadeAnim from '../components/FadeAnim';
import {generalStyles} from '../components/generalStyle';
import HomeCarousel from '../components/HomeCarousel';

const WelcomeScreen = ({navigation}) => {
  const [appLoaded, setAppLoaded] = useState(false);
  const bgImgUri = require('../assets/splashBg.png');
  const verveLogo = require('../assets/verveLogo.png');

  const onPressHandler = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 3000);
  }, []);

  if (!appLoaded) {
    return (
      <View>
        <ImageBackground
          source={bgImgUri}
          resizeMode="cover"
          style={[generalStyles.landingImg, styles.splash]}>
          <Image source={verveLogo} />
        </ImageBackground>
      </View>
    );
  } else {
    return <HomeCarousel onPress={onPressHandler} />;
  }
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  splash: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
