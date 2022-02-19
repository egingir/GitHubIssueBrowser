import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  button: {
    backgroundColor: theme.SECONDARY_COLOR_LIGHT,
    marginRight: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    height: '100%',
    justifyContent: 'space-between',
    flex: 1,
    width: '80%',
  },
  Text: {
    color: theme.TEXT_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.FONT_FAMILY_BOLD,
  },

  selections: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    width: '80%',
    top: 60,
    left: 0,
    position: 'absolute',
    zIndex: 1,
  },

  selectionModal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100,
  },
  modalView: {
    margin: 200,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
