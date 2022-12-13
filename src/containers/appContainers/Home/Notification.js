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
import { showNotification } from './Notification_android';
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
          paddingHorizontal: 10,
          paddingBottom: 14,
          paddingTop: 9,
          borderRadius: 10,
          margin: 10,
        }}>
        <View>
          <Text
            variant={'body2'}
            font={'WorkSansmedium'}
            gutterTop={6}
            //gutterBottom={R.unit.scale(30)}
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
    <ScrollView
      style={{
        backgroundColor: theme == 'DARK' ? '#A45A52' : 'white',
        flexDirection: 'column',
        flex: 1,
      }}>
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
});
