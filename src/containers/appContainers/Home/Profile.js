import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemsToCart } from '../../../store/Action';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Icon from '@components/common/Icon';

function Profile(props) {
  //const data = props.route.params.data;
  const { navigation } = props;

  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <Text
            variant={'h0'}
            font={'Poppins-BoldItalic'}
            gutterTop={10}
            gutterBottom={R.unit.scale(20)}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%', color: 'black' }}
            transform={'none'}>
            Profile
          </Text>
        </View>
        <Image
          style={styles.images1}
          source={require('@assets/Images/profilePic.jpg')}
        />
        <View style={{ marginTop: 10 }}>
          <Text
            variant={'h3'}
            font={'Poppins-Black'}
            gutterTop={14}
            gutterBottom={R.unit.scale(40)}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%', color: 'black' }}
            transform={'none'}>
            HELLO USER
          </Text>
        </View>
        <View style={{ marginTop: 10 }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#B7B7B7',
          borderRadius: 20,
          margin: 15,
          padding: 6,
        }}>
        <Icon type={'Entypo'} name={'bell'} size={25} color={'#E42021'} />
        <View>
          <Text
            variant={'body1'}
            font={'Poppins-Black'}
            gutterTop={3}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%', color: 'black' }}
            transform={'none'}>
            Notification
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notification');
          }}
          style={{ marginLeft: 60 }}>
          <Icon type={'AntDesign'} name={'right'} size={25} color={'#E42021'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#B7B7B7',
          borderRadius: 20,
          margin: 12,
          padding: 6,
        }}>
        <Icon
          type={'Entypo'}
          name={'shopping-cart'}
          size={25}
          color={'#E42021'}
        />
        <View>
          <Text
            variant={'body1'}
            font={'Poppins-Black'}
            gutterTop={3}
            //gutterBottom={R.unit.scale(40)}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%', color: 'black' }}
            transform={'none'}>
            Cart
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={{ marginLeft: 110 }}>
          <Icon type={'AntDesign'} name={'right'} size={25} color={'#E42021'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#B7B7B7',
          borderRadius: 20,
          margin: 12,
          padding: 6,
        }}>
        <Icon type={'Feather'} name={'log-out'} size={25} color={'#E42021'} />
        <View>
          <Text
            variant={'body1'}
            font={'Poppins-Black'}
            gutterTop={3}
            //gutterBottom={R.unit.scale(40)}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%', color: 'black' }}
            transform={'none'}>
            Logout
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{ marginLeft: 90 }}>
          <Icon type={'AntDesign'} name={'right'} size={25} color={'#E42021'} />
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Profile;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 15,
    width: '100%',
    alignItems: 'center',
    //flexDirection: 'row',
    backgroundColor: '#B7B7B7',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  reviewtitle: {
    color: '#09B44D',
    fontFamily: 'Poppins-BoldItalic',
  },
  images1: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    Color: '#D0F1DD',
    alignSelf: 'center',
  },
});
