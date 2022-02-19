import React from 'react';
import {Text} from 'react-native';
import style from './text.style';

const ButtonText = (props: any) => (
  <Text style={{...style.ButtonText, ...props.style}}>{props.children}</Text>
);

export default ButtonText;
