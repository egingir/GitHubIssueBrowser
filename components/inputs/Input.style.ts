import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  TextInput: {
    height: 50,
    borderBottomColor: theme.BORDER_BOTTOM_COLOR,
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '80%',
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY,
  },
});
