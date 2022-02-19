import React from 'react';
import {TextInput} from 'react-native';
import style from './Input.style';
import theme from './../../styles/theme.style';

const InputText = (props: any) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={{...style.TextInput, ...props.style}}
      placeholderTextColor={theme.PLACEHOLDER_TEXT_COLOR}
      onChangeText={props.onChangeText}
      onBlur={props.lostFocusHandler}
    />
  );
};

export default InputText;
