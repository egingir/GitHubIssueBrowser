import React, {useRef} from 'react';
import {TouchableOpacity, Animated, View} from 'react-native';
import style from './SelectionButton.style';
import SelectionButtonText from '../texts/SelectionButtonText';
import Icon from 'react-native-vector-icons/Ionicons';
import {SelectionButtonModel} from './SelectionButton.model';
import Selection from './Selection';

const SelectionButton = (props: SelectionButtonModel) => {
  const [selectedSort, setSelectedSort] = React.useState(props.selected);
  const [modalVisible, setModalVisible] = React.useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handle = async (selection: string) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setSelectedSort(selection);
      props.onSelectionChange(selection);
      setModalVisible(false);
    });
  };

  const showModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setModalVisible(true);
  };

  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => showModal()}
        style={style.button}>
        <SelectionButtonText>{selectedSort}</SelectionButtonText>
        <Icon name="md-arrow-down-circle-outline" size={20} color="white" />
      </TouchableOpacity>

      {modalVisible && (
        // <View style={style.Button}>
        <Animated.View style={{...style.selections, opacity: fadeAnim}}>
          {props.selections.map((selection, index) => (
            <Selection
              key={index}
              id={index}
              onPress={handle.bind(this, selection)}
              text={selection}
              selected={selectedSort === selection}
            />
          ))}
        </Animated.View>
      )}
    </View>
  );
};

export default SelectionButton;
