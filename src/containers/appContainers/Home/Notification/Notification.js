import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import R from '@components/utils/R';
import { useSelector } from 'react-redux';
import Text from '@components/common/Text';

const Notification = () => {
  const items = useSelector(state => state.Reducer);
  const theme = useSelector(state => state.ThemeReducer);
  console.log(items, 'aaaa');

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  const renderList = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={handleClick}
        style={{
          backgroundColor: isActive ? '#E42021' : '#B7B7B7',
          ...styles.containermessage,
        }}>
        <View>
          <Text
            variant={'body2'}
            font={'WorkSansmedium'}
            gutterTop={6}
            color={R.color.white}
            align={'left'}
            style={{
              width: '100%',
            }}
            transform={'none'}>
            {item.message} !!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.mainview}>
      <FlatList data={items} renderItem={renderList} />
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    flex: 1,
  },
  mainview: {
    flexDirection: 'column',
    flex: 1,
  },
  containermessage: {
    paddingHorizontal: R.unit.scale(10),
    paddingBottom: R.unit.scale(14),
    paddingTop: R.unit.scale(9),
    borderRadius: R.unit.scale(10),
    margin: R.unit.scale(10),
  },
});
