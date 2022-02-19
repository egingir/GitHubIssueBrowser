import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
//import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../styles/theme.style';
import BodyText from '../texts/BodyText';
import SelectionButton from '../buttons/SelectionButton';
import {SelectionButtonModel} from '../buttons/SelectionButton.model';
import {IssueFilterModel} from './IssueFilter.model';

const IssueFilter = (props: IssueFilterModel) => {
  const [showBookMarks, setShowBookmarks] = React.useState(false);

  const handleSortChange = (selection: string) => {
    props.onSortChange(selection);
  };

  const handleBookmarkChange = () => {
    props.onBookmarkPress(!showBookMarks);
    showBookMarks ? setShowBookmarks(false) : setShowBookmarks(true);
  };

  const selectionButtonModel = new SelectionButtonModel(
    'Newest',
    'Newest',
    ['Newest', 'Oldest'],
    handleSortChange,
  );

  return (
    <View style={styles.filter}>
      <TouchableOpacity
        style={{
          ...styles.bookmark,
          borderColor: showBookMarks
            ? theme.SECONDARY_COLOR
            : theme.SECONDARY_COLOR_LIGHT,
        }}
        activeOpacity={0.6}
        onPress={handleBookmarkChange}>
        {showBookMarks ? (
          <Icon name="bookmark" size={30} color={theme.SECONDARY_COLOR} />
        ) : (
          <Icon
            name="bookmark-outline"
            size={30}
            color={theme.SECONDARY_COLOR}
          />
        )}
      </TouchableOpacity>
      <View style={styles.orderByContainer}>
        <BodyText>Order by</BodyText>
        <SelectionButton
          text={selectionButtonModel.text}
          selected={selectionButtonModel.selected}
          selections={selectionButtonModel.selections}
          onSelectionChange={selectionButtonModel.onSelectionChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    overflow: 'visible',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  bookmark: {
    borderWidth: 5,
    borderColor: theme.SECONDARY_COLOR_LIGHT,
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 25,
    justifyContent: 'center',
  },

  orderByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default IssueFilter;
