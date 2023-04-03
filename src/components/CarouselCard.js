import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {carouselData} from '../data';
import CustomBtn from './CustomBtn';
import {generalStyles} from './generalStyle';

const CarouselCard = ({
  info: {uri, title, description},
  activeNum,
  onPress,
}) => {
  return (
    <ImageBackground
      source={uri}
      resizeMode="cover"
      style={[generalStyles.landingImg, styles.carousel]}>
      <View style={styles.infoCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.dots}>
          {carouselData.map((_, index) => (
            <Text
              style={[styles.dot, index === activeNum && styles.activeDot]}
              key={index}
            />
          ))}
        </View>
        <CustomBtn style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Get Started</Text>
        </CustomBtn>
      </View>
    </ImageBackground>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  carousel: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    textAlign: 'center',
  },
  infoCard: {
    marginVertical: 20,
    marginHorizontal: 40,
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  },
  btn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,

    marginVertical: 20,
  },
  btnText: {
    fontWeight: 600,
    fontSize: 16,
    color: '#4B4B4B',
  },
  dots: {
    flexDirection: 'row',
    gap: 5,
  },
  dot: {
    backgroundColor: '#fff',
    opacity: 0.5,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  activeDot: {
    opacity: 1,
  },
});
