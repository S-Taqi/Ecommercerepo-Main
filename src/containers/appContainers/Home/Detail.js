import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemsToCart } from '../../../store/Action';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Button from '@components/common/Button';

function Detail(props) {
  const data = props.route.params.data;
  const { navigation } = props;
  const { price, message, name, count, uri } = data;
  const [counter, setCounter] = useState(count);
  const [totalPrice, setTotalPrice] = useState(price);

  const Add = () => {
    let itemCount = counter + 1;
    let sumPrice = itemCount * price;
    setTotalPrice(sumPrice);
    setCounter(counter + 1);
  };

  const Delete = () => {
    if (counter <= 0) {
      setCounter(0);
      console.log('aaaa');
    } else {
      console.log('failed');
    }
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
          }}
          style={{ marginLeft: 10 }}>
          <Icon
            type={'FontAwesome5'}
            name={'angle-left'}
            size={25}
            color={'black'}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            variant={'h0'}
            font={'WorkSansextraBold'}
            gutterTop={10}
            //gutterBottom={R.unit.scale(30)}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%' }}
            transform={'none'}>
            {name}
          </Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Icon type={'Entypo'} name={'heart'} size={25} color={'#E42021'} />
        </View>
      </View>
      <View style={{ flex: 0.4, backgroundColor: 'lightgray' }}>
        <Image style={styles.images1} source={uri} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              borderRadius: 16,
              paddingVertical: 8,
              paddingHorizontal: 14,
            }}>
            <TouchableOpacity onPress={Add} style={{ marginRight: 10 }}>
              <Icon type={'Entypo'} name={'plus'} size={30} color={'#E42021'} />
            </TouchableOpacity>
            <Text style={{ marginTop: 6, color: 'black' }}>{counter}</Text>
            <TouchableOpacity onPress={Delete} style={{ marginLeft: 10 }}>
              <Icon
                type={'Entypo'}
                name={'minus'}
                size={30}
                color={'#E42021'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingTop: 10,
          }}>
          <View>
            <Text
              variant={'h4'}
              font={'WorkSansextraBold'}
              gutterTop={6}
              //gutterBottom={R.unit.scale(30)}
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
              //gutterBottom={R.unit.scale(30)}
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
          //gutterBottom={R.unit.scale(30)}
          color={R.color.black}
          align={'left'}
          style={{ width: '100%', padding: 15 }}
          transform={'none'}>
          Soft and comforting leather,with original quality Soft and comforting
          leather,with original quality Soft and comforting leather,with
          original quality
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: 18,
            //paddingTop: 5,
          }}>
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
    paddingTop: 15,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  images1: {
    marginTop: 30,
    width: 300,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
    Color: '#D0F1DD',
    alignSelf: 'center',
  },
});
