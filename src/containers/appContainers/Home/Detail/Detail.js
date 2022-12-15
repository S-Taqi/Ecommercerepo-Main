import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemsToCart } from '../../../../store/Action';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Button from '@components/common/Button';

function Detail(props) {
  const data = props.route.params.data;
  const { navigation } = props;
  const { price, name, count, uri } = data;
  const [counter, setCounter] = useState(count);
  const [totalPrice, setTotalPrice] = useState(price);

  const Add = () => {
    let itemCount = counter + 1;
    let sumPrice = itemCount * price;
    setTotalPrice(sumPrice);
    setCounter(counter + 1);
  };

  const Delete = () => {
    setCounter(counter - 1);
    let result = parseInt(data.price) * counter - data.price;
    setTotalPrice(result);
  };

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemsToCart(data));
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
        <View style={styles.hedertitletext}>
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
        <View style={styles.hearticon}>
          <Icon type={'Entypo'} name={'heart'} size={25} color={'#E42021'} />
        </View>
      </View>
      <View style={styles.imagebackground}>
        <Image style={styles.images1} source={uri} />
        <View style={styles.buttonStyle}>
          <View style={styles.wholeButtoncounter}>
            <TouchableOpacity onPress={Add} style={styles.incrementcounter}>
              <Icon type={'Entypo'} name={'plus'} size={30} color={'#E42021'} />
            </TouchableOpacity>
            <Text
              variant={'body3'}
              gutterTop={4}
              font={'WorkSansextraBold'}
              color={R.color.black}
              transform={'none'}>
              {counter}
            </Text>
            <TouchableOpacity onPress={Delete} style={styles.deletecounter}>
              <Icon
                type={'Entypo'}
                name={'minus'}
                size={30}
                color={'#E42021'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentBodytitle}>
          <View>
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
          </View>
          <View>
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
            addItem(data);
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
    width: R.unit.scale(380),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: R.color.lightGray,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  images1: {
    gutterBottom: R.unit.scale(20),
    width: R.unit.scale(300),
    height: R.unit.scale(300),
    borderRadius: R.unit.scale(10),
    justifyContent: 'center',
    Color: R.color.lightGray,
    alignSelf: 'center',
  },
  wholeButtoncounter: {
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
  hearticon: { marginRight: R.unit.scale(10) },
  deletecounter: { marginLeft: R.unit.scale(10) },
  incrementcounter: { marginRight: R.unit.scale(10) },
  hedertitletext: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imagebackground: { flex: 0.4, backgroundColor: R.color.lightGray },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});