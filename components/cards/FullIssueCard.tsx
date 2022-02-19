/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
//import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../styles/theme.style';
import {IssueCardModel} from '../../models/IssueCard';
import Border from '../UI/divider';
import {useDispatch} from 'react-redux';

import * as bookmarkActions from '../../store/actions/bookmarks';
import BodyText from '../texts/BodyText';

const FullIssueCard = (props: IssueCardModel) => {
  const dispatch = useDispatch();
  const [bookmarked, setBookmarked] = React.useState(props.issue.bookmarked);

  const bookmarkHandler = async () => {
    if (bookmarked) {
      dispatch(bookmarkActions.removeBookmark(props.issue.id));
    } else {
      dispatch(bookmarkActions.addBookmark(props.issue.id));
    }
    setBookmarked(state => !state);
  };

  return (
    <React.Fragment>
      <View style={styles.card}>
        <TouchableOpacity activeOpacity={0.6} onPress={bookmarkHandler}>
          <View style={styles.iconContainer}>
            {bookmarked ? (
              <Icon name="bookmark" size={30} color={theme.SECONDARY_COLOR} />
            ) : (
              <Icon
                name="bookmark-outline"
                size={30}
                color={theme.SECONDARY_COLOR}
              />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
          <View style={styles.bodyContainer}>
            <View style={styles.headerContainer}>
              <BodyText style={styles.grayText}>
                {props.issue.repo.full_name}
              </BodyText>
              <BodyText style={styles.grayText}>
                {Math.ceil(
                  (new Date().getTime() -
                    new Date(props.issue.updated_at).getTime()) /
                    1000 /
                    60 /
                    60 /
                    24,
                )}
                d
              </BodyText>
            </View>
            <BodyText style={styles.text}>{props.issue.title}</BodyText>

            <View
              style={{
                ...styles.stateContainer,
                backgroundColor: props.issue.state === 'open' ? 'red' : 'green',
              }}>
              <BodyText style={styles.text}>{props.issue.state}</BodyText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Border />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    justifyContent: 'flex-start',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  iconContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  bodyContainer: {
    flexDirection: 'column',
  },
  stateContainer: {
    padding: 3,
    borderRadius: 5,
    borderWidth: 1,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  grayText: {
    color: 'gray',
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});

export default FullIssueCard;
