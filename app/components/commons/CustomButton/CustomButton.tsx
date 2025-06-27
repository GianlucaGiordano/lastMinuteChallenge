import { Pressable, Text } from 'react-native';
import React from 'react';
import { CustomButtonProps } from './CustomButton.models';
import { styles } from './CustomButton.style';

const CustomButton = ({ text, onPress, active = false }: CustomButtonProps) => {
  const onPressHandler = () => {
    onPress();
  };
  return (
    <Pressable
      style={[styles.button, active && styles.buttonActive]}
      onPress={onPressHandler}
    >
      <Text style={[styles.text, active && styles.textActive]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
