import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Balao = ({ x, y, animacao }) => {
  return (
    <Animated.View
      style={[
        styles.balao,
        {
          transform: [{ translateY: animacao }],
        },
      ]}
    >
      {/* Conteúdo do balão */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  balao: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default Balao;
