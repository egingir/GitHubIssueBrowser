import React from 'react';
import {Text} from 'react-native';
import style from './text.style';

const BodyText = (props: any) => (
  <Text style={{...style.BodyText, ...props.style}}>{props.children}</Text>
);

export default BodyText;
