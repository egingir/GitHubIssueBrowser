import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Globals from '../Globals';
import MainButton from '../components/buttons/MainButton';
import InputText from '../components/inputs/InputText';
import TitleText from '../components/texts/TitleText';

import theme from '../styles/theme.style';

import {sleep} from '../utilities/util';
import axios from 'axios';
import {Repository} from '../models/repository';
import BodyText from '../components/texts/BodyText';

const MainScreen = (props: any) => {
  const [organization, setOrganization] = useState('');
  const [repository, setRepository] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {}, []);

  const organizationTextChangeHandler = (text: string) => {
    setOrganization(text);
  };

  const repoTextChangeHandler = (text: string) => {
    setRepository(text);
  };

  const SubmitHandler = async () => {
    setNotFound(false);
    if (organization.trim() === '' || repository.trim() === '') {
      return;
    }
    setisLoading(true);
    setNotFound(false);
    await sleep(2000);

    try {
      const response = await axios.get(
        `${Globals.GITHUB_API_URL}/repos/${organization}/${repository}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const responseData = response.data as Repository;

      const repo = new Repository(
        responseData.id,
        responseData.full_name,
        responseData.open_issues_count,
      );
      props.navigation.navigate('Details', {repo: repo});
    } catch (err: any) {
      setNotFound(true);
      //throw new Error(err.response.data.message);
    }
    setisLoading(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.select({ios: 50, android: 500})}
        style={styles.screen}>
        <TitleText>GitHub Issue Browser</TitleText>
        <InputText
          onChangeText={organizationTextChangeHandler}
          placeholder="Organization Name"
        />
        <InputText
          onChangeText={repoTextChangeHandler}
          placeholder="Repository Name"
        />

        <MainButton
          disabled={isLoading}
          onPress={SubmitHandler}
          text="GET ISSUES"
        />

        {notFound && <BodyText>Repository Not Found</BodyText>}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
  },
});

export default MainScreen;
