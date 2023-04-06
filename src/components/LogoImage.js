/* eslint-disable react-native/no-inline-styles */
const logoUri = require('../assets/verveLogo2.png');
import React from 'react';
import {Image} from 'react-native';

const LogoImage = () => {
  return <Image source={logoUri} style={{width: 50, height: 30}} />;
};

export default LogoImage;
