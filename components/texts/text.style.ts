import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  BodyText: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY,
    marginVertical: 2,
  },
  TitleText: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.FONT_FAMILY_BOLD,
  },
  ButtonText: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.FONT_FAMILY_BOLD,
  },
  SelectionButtonText: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY,
  },
});
