import React from 'react';
import {StyleSheet, useColorScheme, SafeAreaView} from 'react-native';
import 'reflect-metadata';

import AppNavigator from './navigation/AppNavigator';
import theme from './styles/theme.style';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import bookmarksReducer from './store/reducers/bookmarks';

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme.SECONDARY_COLOR : theme.SECONDARY_COLOR,
  };

  const foregroundStyle = {
    // color: isDarkMode ? Colors.text_color_light : Colors.text_color_dark,
    color: isDarkMode ? 'white' : 'white',
  };

  return (
    <SafeAreaView
      style={{...styles.screen, ...backgroundStyle, ...foregroundStyle}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default App;
