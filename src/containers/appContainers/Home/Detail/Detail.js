import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemsToCart } from '../../../../store/Action';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Button from '@components/common/Button';
//import database from '@react-native-firebase/database';
//import { useSelector } from 'react-redux';

function Detail(props) {
  const { data } = props.route.params;
  const { navigation } = props;
  const { price, name, uri } = data;
  const dispatch = useDispatch();
  // const auth = useSelector(state => state.LoginReducer);
  // console.log('nnnnnn', auth[0].userId);
  const [totalPrice, setTotalPrice] = useState(price);

  const addItems = () => {
    dispatch(addItemsToCart(data));
    // database()
    //   .ref(`/users/${auth[0].userId}`)
    //   .set({
    //     order: addItemsToCart(data),
    //   })
    //   .then(response => console.log('Data set.', response));
    navigation.navigate('Cart');
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon
            type={'FontAwesome5'}
            name={'angle-left'}
            size={25}
            color={'black'}
          />
        </TouchableOpacity>
        <View style={styles.hederTitleText}>
          <Text
            variant={'h0'}
            font={'WorkSansextraBold'}
            gutterTop={10}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%' }}
            transform={'none'}>
            {name}
          </Text>
        </View>
        <View style={styles.heartIcon}>
          <Icon type={'Entypo'} name={'heart'} size={25} color={'#E42021'} />
        </View>
      </View>
      <View style={styles.imageBackGround}>
        <Image style={styles.images} source={uri} />

        <View style={styles.contentBodytitle}>
          <Text
            variant={'h4'}
            font={'WorkSansextraBold'}
            gutterTop={6}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%' }}
            transform={'none'}>
            Furious {name}
          </Text>
          <Text
            variant={'body1'}
            font={'WorkSansextraBold'}
            gutterTop={14}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%' }}
            transform={'none'}>
            {totalPrice} Rs
          </Text>
        </View>
        <Text
          variant={'body2'}
          font={'WorkSansextraRegular'}
          gutterTop={4}
          color={R.color.black}
          align={'left'}
          style={{ width: '100%', padding: R.unit.scale(15) }}
          transform={'none'}>
          Soft and comforting leather,with original quality Soft and comforting
          leather,with original quality Soft and comforting leather,with
          original quality
        </Text>
        <View style={styles.discription}>
          <View>
            <Icon
              type={'Entypo'}
              name={'star'}
              size={25}
              color={'darkorange'}
            />
          </View>
          <View>
            <Text
              variant={'body2'}
              font={'WorkSansextraRegular'}
              gutterTop={5}
              color={R.color.black}
              align={'left'}
              style={{ width: '100%' }}
              transform={'none'}>
              4.9
            </Text>
          </View>

          <View>
            <Icon
              type={'FontAwesome5'}
              name={'fire'}
              size={25}
              color={'orange'}
            />
          </View>
          <View>
            <Text
              variant={'body2'}
              font={'WorkSansextraRegular'}
              gutterTop={5}
              color={R.color.black}
              align={'left'}
              style={{ width: '100%' }}
              transform={'none'}>
              443 g | blue Color
            </Text>
          </View>

          <View>
            <Icon type={'Entypo'} name={'clock'} size={25} color={'black'} />
          </View>
          <View>
            <Text
              variant={'body2'}
              font={'WorkSansextraRegular'}
              gutterTop={5}
              color={R.color.black}
              align={'left'}
              style={{ width: '100%' }}
              transform={'none'}>
              8 - 12 min
            </Text>
          </View>
        </View>
        <Button
          size={'lg'}
          width={'90%'}
          height={50}
          onPress={() => {
            addItems(data);
          }}
          variant={'body2'}
          gutterBottom={10}
          gutterTop={30}
          bgColor={R.color.logintextcolor}
          font={'PoppinsExtraBold'}
          value={'Add To cart'}
        />
      </View>
    </>
  );
}
export default Detail;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: R.unit.scale(2),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: R.color.lightGray,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  images: {
    gutterBottom: R.unit.scale(20),
    width: R.unit.width(1),
    height: R.unit.scale(300),
    borderRadius: R.unit.scale(10),
    justifyContent: 'center',
    Color: R.color.lightGray,
    alignSelf: 'center',
  },
  wholeButtonCounter: {
    backgroundColor: R.color.white,
    flexDirection: 'row',
    borderRadius: R.unit.scale(15),
    paddingVertical: R.unit.scale(8),
    paddingHorizontal: R.unit.scale(14),
  },
  contentBodytitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: R.unit.scale(18),
    paddingTop: R.unit.scale(18),
  },
  discription: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: R.unit.scale(18),
  },
  heartIcon: { marginRight: R.unit.scale(10) },
  deleteCounter: { marginLeft: R.unit.scale(10) },
  incrementCounter: { marginRight: R.unit.scale(10) },
  hederTitleText: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageBackGround: { flex: 0.4, backgroundColor: R.color.lightGray },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
