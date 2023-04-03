import {View, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import CarouselCard from './CarouselCard';
import {carouselData} from '../data';

const HomeCarousel = ({onPress}) => {
  const [currentNum, setCurrentNum] = useState(0);
  const scrollRef = useRef(null);
  const {width: windowWidth} = Dimensions.get('window');

  const handleAutoSwipe = useCallback(() => {
    const nextIndex = (currentNum + 1) % carouselData.length;
    setCurrentNum(nextIndex);
    scrollRef.current.scrollTo({
      x: nextIndex * windowWidth,
      animated: true,
    });
  }, [currentNum, windowWidth]);

  const onScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentNum(index);
  };

  useEffect(() => {
    const interval = setInterval(handleAutoSwipe, 3000);
    return () => clearInterval(interval);
  }, [handleAutoSwipe]);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        onMomentumScrollEnd={onScroll}>
        {carouselData.map(item => (
          <View style={{width: Dimensions.get('window').width}} key={item.id}>
            <CarouselCard
              activeNum={currentNum}
              onPress={onPress}
              info={item}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeCarousel;
