import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
//import { useSelector } from 'react-redux';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import {
  useGetJokeByTypeQuery,
  useCreatePostsMutation,
  useDeletePostsMutation,
} from '../../../../store/ReduxToolkit/jokesApi';
import Loader from '@components/common/Loader';

const Notification = (props) => {
  const {navigation}=props;
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(current => !current);
  };
  //Fetching data
  console.log(JSON.stringify(useGetJokeByTypeQuery('posts/1'), null, 2), 'GET');
  const { isLoading, data, isError } = useGetJokeByTypeQuery('posts/1');
  //console.log(data?.title, 'GET');
  //Post data
  const [createPost, createPostResult] = useCreatePostsMutation();
  console.log(JSON.stringify(createPostResult, null, 2), 'POST');
  function createPosthandler() {
    createPost({
      title: 'Generic Titleeee deleted',
      postBody: 'Post Body',
      userId: 10,
    });
  }
  //Delete data useDeletePostsMutation
  const [deletePost, deletePostResult] = useDeletePostsMutation();
  function deletePosthandler() {
    deletePost({
      id: 1,
    });
  }
  console.log(JSON.stringify(deletePostResult, null, 2), 'DELETE');

  if (isLoading) {
    return (
      <SafeAreaView style={{ marginTop: 22 }}>
        <Loader size={33} color={R.color.black} />
      </SafeAreaView>
    );
  }
  if (isError) {
    return (
      <SafeAreaView style={{ marginTop: 22 }}>
        <Text
          variant={'body2'}
          font={'WorkSansmedium'}
          gutterTop={6}
          color={R.color.blackShade2}
          align={'center'}
          style={{
            width: '100%',
          }}
          transform={'none'}>
          Something wrong!!
        </Text>
      </SafeAreaView>
    );
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
              font={'PoppinsBold'}
              gutterTop={6}
              color={R.color.blackShade2}
              align={'left'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              Titles
              {'     '}
              {data?.title}
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
              Body:
              {data?.body}!!
            </Text>
            <Button
              size={'lg'}
              width={'100%'}
              height={50}
              onPress={() => createPosthandler()}
              variant={'body2'}
              gutterBottom={10}
              gutterTop={20}
              bgColor={R.color.black}
              font={'PoppinsExtraBold'}
              value={'Post'}
              disabled={isLoading}
              loader={isLoading}
            />
            <Button
              size={'lg'}
              width={'100%'}
              height={50}
              onPress={() => deletePosthandler()}
              variant={'body2'}
              gutterBottom={10}
              gutterTop={10}
              bgColor={R.color.black}
              font={'PoppinsExtraBold'}
              value={'Delete'}
              disabled={isLoading}
              loader={isLoading}
            />
          </View>
        </TouchableOpacity>
        <Button
              size={'lg'}
              width={'100%'}
              height={50}
              onPress={() => navigation.navigate('MessagePractice')}
              variant={'body2'}
              gutterBottom={10}
              gutterTop={10}
              bgColor={R.color.black}
              font={'PoppinsExtraBold'}
              value={'MESSAGE===>'}
              disabled={isLoading}
              loader={isLoading}
            />
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
