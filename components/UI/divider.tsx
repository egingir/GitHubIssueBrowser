import React from 'react';
import {StyleSheet, View} from 'react-native';

const Border = () => {
  return <View style={styles.border} />;
};

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default Border;
