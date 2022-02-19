import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import theme from '../../styles/theme.style';
import {SelectionModel} from './Selection.model';
import Divider from '../UI/divider';

const Selection = (props: SelectionModel) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.selection}>
        <View style={styles.iconContainer}>
          {props.selected && (
            <Icon name="md-checkmark-sharp" size={20} color="white" />
          )}
        </View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <Divider />
      {/* <View style={styles.border} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  selection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.SECONDARY_COLOR_LIGHT,
    marginVertical: 0,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    width: 20,
  },

  text: {
    color: 'white',
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});

export default Selection;
