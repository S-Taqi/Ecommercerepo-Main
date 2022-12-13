import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { DeleteitemFromcart } from '../../../store/Action';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import { ScrollView } from 'react-native-gesture-handler';
import { showNotification } from './Notification_android';

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.Reducer);

  const removeitems = index => {
    dispatch(DeleteitemFromcart(index));
  };

  useEffect(() => {
    totallPrice();
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const totallPrice = () => {
    let newArr = [];
    for (var i = 0; i < items.length; i++) {
      let result = items[i].count * items[i].price;
      newArr.push(result);
      let subresult = newArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      setTotalPrice(subresult);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10,
            paddingHorizontal: 7,
          }}>
          <View style={{}}>
            <Text
              variant={'body1'}
              font={'WorkSansBlackitalic'}
              gutterTop={10}
              gutterBottom={R.unit.scale(30)}
              color={R.color.black}
              align={'center'}
              style={{ width: '100%' }}
              transform={'none'}>
              Cart Items
            </Text>
          </View>
        </View>
        <FlatList
          data={items}
          renderItem={({ item, index }) => {
            return (
              <View>
                <View style={styles.cartt}>
                  <Image style={styles.images1} source={item.uri} />
                  <View>
                    <Text
                      variant={'body4'}
                      font={'WorkSansextraBold'}
                      gutterTop={6}
                      color={R.color.logintextcolor}
                      align={'left'}
                      style={{
                        width: '100%',
                        marginLeft: 14,
                      }}
                      transform={'none'}>
                      ALL GOOD QUALITY
                    </Text>

                    <Text
                      variant={'body4'}
                      font={'WorkSansextraRegular'}
                      gutterBottom={R.unit.scale(16)}
                      gutterTop={6}
                      color={R.color.black}
                      align={'left'}
                      style={{
                        marginLeft: 14,
                      }}
                      transform={'none'}>
                      Rs: {item.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      margin: 14,
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        borderRadius: 16,
                        paddingVertical: 3,
                        paddingHorizontal: 3,
                      }}>
                      <TouchableOpacity
                        //onPress={Add}
                        style={{ marginRight: 10 }}>
                        <Icon
                          type={'Entypo'}
                          name={'plus'}
                          size={25}
                          color={'#E42021'}
                        />
                      </TouchableOpacity>
                      <Text
                        variant={'body3'}
                        font={'WorkSansmedium'}
                        gutterTop={2}
                        color={R.color.black}
                        align={'left'}
                        style={{}}
                        transform={'none'}>
                        {item.count}
                      </Text>
                      <TouchableOpacity
                        //onPress={delete}
                        style={{ marginLeft: 10 }}>
                        <Icon
                          type={'Entypo'}
                          name={'minus'}
                          size={25}
                          color={'#E42021'}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          removeitems(index);
                        }}
                        style={{
                          marginLeft: 14,
                          marginTop: 10,
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <Icon
                          type={'FontAwesome'}
                          name={'times-circle-o'}
                          size={20}
                          color={'#E42021'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}></FlatList>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingTop: 10,
          }}>
          <View>
            <Text
              variant={'body3'}
              font={'WorkSansBlackitalic'}
              color={R.color.logintextcolor}
              align={'left'}
              style={{}}
              transform={'none'}>
              Delivery
            </Text>
          </View>
          <View>
            <Text
              variant={'body3'}
              font={'WorkSansBlackitalic'}
              color={R.color.logintextcolor}
              align={'left'}
              style={{}}
              transform={'none'}>
              Free
            </Text>
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
              variant={'body2'}
              font={'WorkSansBlackitalic'}
              color={R.color.black}
              align={'left'}
              style={{}}
              transform={'none'}>
              TotalPrice
            </Text>
          </View>
          <View>
            <Text
              variant={'body2'}
              font={'WorkSansBlackitalic'}
              color={R.color.black}
              align={'left'}
              style={{}}
              transform={'none'}>
              {totalPrice}
            </Text>
          </View>
        </View>
        <Button
          size={'lg'}
          width={'90%'}
          height={50}
          onPress={() => showNotification('Ecommerce', 'order placed')}
          variant={'body2'}
          gutterBottom={10}
          gutterTop={20}
          bgColor={R.color.logintextcolor}
          font={'PoppinsExtraBold'}
          value={'Place Order'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  images1: {
    width: 65,
    height: 50,
    borderRadius: 40,
  },
  cartt: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 16,
    flexDirection: 'row',
    borderRadius: 12,
  },
});
export default Cart;
