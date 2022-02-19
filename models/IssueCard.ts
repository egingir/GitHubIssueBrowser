import {GestureResponderEvent} from 'react-native';
import {Issue} from './issue';

export class IssueCardModel {
  constructor(
    readonly issue: Issue,
    public onPress: (event: GestureResponderEvent) => void,
  ) {}
}
