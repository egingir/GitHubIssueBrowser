import {GestureResponderEvent} from 'react-native';

export class SelectionModel {
  constructor(
    public key: number,
    public id: number,
    public text: string,
    public selected: boolean,
    public onPress: (event: GestureResponderEvent) => void,
  ) {}
}
