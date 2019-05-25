import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const useFade = ({ duration = 300, delay = 0, isOut = false }) => {
  const opacity = useRef(new Animated.Value(isOut ? 1 : 0)).current;
  const fade = () => {
    Animated.timing(opacity, { toValue: isOut ? 0 : 1, duration }).start();
  }

  useEffect(() => {
    const timeout = setTimeout(() => fade(), delay);

    return () => clearTimeout(timeout);
  }, []);


  return opacity;
}

export default useFade;