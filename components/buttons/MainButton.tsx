import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import theme from '../../styles/theme.style';
import style from './MainButton.style';
import ButtonText from '../texts/ButtonText';

const MainButton = (props: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        style.Button,
        props.disabled
          ? {backgroundColor: theme.DISABLED_SECONDARY_COLOR}
          : {backgroundColor: style.Button.backgroundColor},
        props.style,
      ]}>
      {props.disabled ? (
        <ActivityIndicator size="large" color={theme.TEXT_COLOR} />
      ) : (
        <ButtonText>{props.text}</ButtonText>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;
