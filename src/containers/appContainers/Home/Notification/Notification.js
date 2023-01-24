import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import { useGetJokeByTypeQuery } from '../../../../store/ReduxToolkit/jokesApi';
import Loader from '@components/common/Loader';

const Notification = () => {
  const [isActive, setIsActive] = useState(true);
  console.log(JSON.stringify(useGetJokeByTypeQuery('programming'), null, 2));
  const { isLoading, data } = useGetJokeByTypeQuery('programming');
  //console.log(data[0]?.punchline, 'asasasas');
  const handleClick = () => {
    setIsActive(current => !current);
  };
  if (isLoading) {
    <View>
      <Loader size={33} color={R.color.black} />
    </View>;
  }

  // const renderList = ({ item }) => (
  //   <View>
  //     <TouchableOpacity
  //       onPress={handleClick}
  //       style={{
  //         backgroundColor: isActive ? '#E42021' : '#B7B7B7',
  //         ...styles.containermessage,
  //       }}>
  //       <View>
  //         <Text
  //           variant={'body2'}
  //           font={'WorkSansmedium'}
  //           gutterTop={6}
  //           color={R.color.blackShade2}
  //           align={'left'}
  //           style={{
  //             width: '100%',
  //           }}
  //           transform={'none'}>
  //           {data[0]?.punchline}!!
  //         </Text>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  // );

  return (
    <ScrollView style={styles.mainview}>
      {/* <FlatList data={items} renderItem={renderList} /> */}
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
              color={R.color.blackShade2}
              align={'left'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              Question
              {data?.[0]?.setup}
            </Text>
            <Text
              variant={'body2'}
              font={'WorkSansmedium'}
              gutterTop={6}
              color={R.color.blackShade2}
              align={'left'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              Answer:
              {data?.[0]?.punchline}!!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
