import {Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

const FadeAnim = ({style, value, duration, children}) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const sequence = Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: value,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }),
    ]);
    const loop = Animated.loop(sequence);
    loop.start();

    return () => loop.stop();
  }, [fadeAnim, duration, value]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeAnim;
