import React from 'react';
import {Text} from 'react-native';
import style from './text.style';

const TitleText = (props: any) => (
  <Text style={{...style.TitleText, ...props.style}}>{props.children}</Text>
);

export default TitleText;
