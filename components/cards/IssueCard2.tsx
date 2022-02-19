import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import CartItem from './CartItem';
import Card from './Card';

const IssueCard2 = (props: any) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card style={styles.IssueCard2}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>dsaa</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={theme.PRIMARY_COLOR}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map((cartItem: any) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  IssueCard2: {
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: theme.FONT_FAMILY_BOLD,
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: theme.FONT_FAMILY,
    color: '#888',
  },
  detailItems: {
    width: '100%',
  },
});

export default IssueCard2;
