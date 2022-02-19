import React from 'react';
import {Text} from 'react-native';
import style from './text.style';

const SelectionButtonText = (props: any) => (
  <Text style={{...style.SelectionButtonText, ...props.style}}>
    {props.children}
  </Text>
);

export default SelectionButtonText;
