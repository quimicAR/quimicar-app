import React, {useRef} from 'react';
import {Center, Container, Heading, Text} from 'native-base';
import AtomLogo from '../../assets/atom-dark.svg';
import {Animated, Easing} from 'react-native';

const AnimationView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 3,
      duration: 5000,
      easing: Easing.inOut(Easing.linear),
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export const SplashScreen = () => (
  <Center flex={1} px="3">
    <AnimationView>
      <Container flexDirection="row" alignItems="center">
        <AtomLogo width="35px" height="35px" />
        <Heading marginLeft="10px" fontWeight="light">
          quimicAR
        </Heading>
      </Container>
    </AnimationView>
  </Center>
);
