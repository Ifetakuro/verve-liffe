/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Image} from 'react-native';
import {logoUri} from '../assets';

const LogoImage = () => {
  return <Image source={logoUri} style={{width: 50, height: 30}} />;
};

export default LogoImage;
