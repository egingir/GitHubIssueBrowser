import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  // TouchableWithoutFeedback,
  // Keyboard,
  // KeyboardAvoidingView,
  // Platform,
  FlatList,
  View,
} from 'react-native';
import Globals from '../Globals';

import theme from '../styles/theme.style';

import axios from 'axios';

import {plainToInstance} from 'class-transformer';
import {Issue} from '../models/issue';

import FullIssueCard from '../components/cards/FullIssueCard';
import IssueFilter from '../components/filters/IssueFilter';

import {useSelector} from 'react-redux';

const IssuesScreen = (props: any) => {
  const [issues, setIssues] = useState<Issue[]>();
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>();
  const [filterActive, setFilterActive] = useState(false);
  const [sortType, setSortType] = useState('Newest');
  const bookmarks = useSelector((state: any) => state.bookmarks).bookmarks;

  useEffect(() => {
    props.navigation.setOptions({
      title: `${props.route.params.repo.full_name} Issues`,
    });
    const fetchIssues = async () => {
      try {
        const responseIssues = await axios.get(
          `${Globals.GITHUB_API_URL}/repos/${props.route.params.repo.full_name}/issues?state=all`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          },
        );

        const githubIssues = plainToInstance(Issue, responseIssues.data);
        githubIssues.map(issue => {
          issue.repo = props.route.params.repo;
        });
        setIssues(githubIssues);
        setFilteredIssues(githubIssues);
      } catch (err: any) {
        //throw new Error(err.response.data.message);
      }
    };

    fetchIssues();
  }, [
    setIssues,
    setFilteredIssues,
    props.route.params.repo,
    props.route.params.repo.full_name,
    props.navigation,
  ]);

  useEffect(() => {
    if (filterActive) {
      setFilteredIssues(issues?.filter(issue => bookmarks.includes(issue.id)));
    } else {
      setFilteredIssues(issues);
    }
  }, [issues, filterActive, bookmarks]);

  const selectHandler = (issue: Issue) => {
    //To be implemented
    console.log(issue);
  };

  const bookmarkHandler = (showBookmarks: boolean) => {
    setFilterActive(showBookmarks);
  };

  const sortChangeHandler = (sort: string) => {
    setSortType(sort);
  };

  function compareOldest(a: Issue, b: Issue) {
    if (a.updated_at < b.updated_at) {
      return -1;
    }
    if (a.updated_at > b.updated_at) {
      return 1;
    }
    return 0;
  }

  function compareNewest(a: Issue, b: Issue) {
    if (a.updated_at > b.updated_at) {
      return -1;
    }
    if (a.updated_at < b.updated_at) {
      return 1;
    }
    return 0;
  }

  return (
    <View style={styles.screen}>
      <IssueFilter
        onBookmarkPress={bookmarkHandler}
        onSortChange={sortChangeHandler}
      />

      <FlatList
        style={styles.list}
        data={
          sortType === 'Newest'
            ? filteredIssues?.sort(compareNewest)
            : filteredIssues?.sort(compareOldest)
        }
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => (
          <FullIssueCard
            issue={itemData.item}
            onPress={selectHandler.bind(this, itemData.item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
  },
  list: {
    width: '100%',
  },
});

export default IssuesScreen;
