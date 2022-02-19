import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  Button: {
    backgroundColor: theme.SECONDARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 20,
    height: 50,
    width: '80%',
    justifyContent: 'center',
  },
  Text: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.FONT_FAMILY_BOLD,
  },
});
