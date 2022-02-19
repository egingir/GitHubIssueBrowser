import React from 'react';
import {
  View,
  Text,
  // Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import theme from '../../styles/theme.style';

import Card from './Card';

const IssueCard = (props: any) => {
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={props.onSelect}>
          <View>
            {/* <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.image}} />
            </View> */}
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>ggh</Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 100,
    margin: 20,
    width: '80%',
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  details: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontFamily: theme.FONT_FAMILY_BOLD,
    fontSize: 18,
    marginVertical: 2,
    color: 'black',
  },
  price: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20,
  },
});

export default IssueCard;
