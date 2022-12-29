import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../../../../components/common/Notification_android';
import { DeleteitemFromcart } from '../../../../store/Action';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.Reducer);
  const removeitems = index => {
    dispatch(DeleteitemFromcart(index));
  };
  const auth = useSelector(state => state.LoginReducer);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    if (cartList.length == 0) {
      setTotalPrice(0);
    }
  }, [cartList]);

  useEffect(() => {
    totallPrice();
  }, [cartList]);

  useEffect(() => {
    setCartList(items);
  }, [items]);

  const Increment = item => {
    const { id } = item;
    let tempArr = JSON.parse(JSON.stringify(cartList));
    let result = tempArr.find(item => item.id == id);
    result.count = result.count + 1;
    setCartList([...tempArr]);
  };

  const Delete = item => {
    if (item.count > 0) {
      const { id } = item;
      let tempArr = JSON.parse(JSON.stringify(cartList));
      let result = tempArr.find(item => item.id == id);
      result.count = result.count - 1;
      setCartList([...tempArr]);
    }
  };

  const totallPrice = () => {
    let newArr = [];
    for (var i = 0; i < cartList.length; i++) {
      let result = cartList[i].count * cartList[i].price;
      newArr.push(result);
      let subresult = newArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      setTotalPrice(subresult);
    }
  };

  const addItems = () => {
    let user = {
      email: auth[0]?.email,
      userName: auth[0]?.userName,
      userId: auth[0]?.userId,
    };

    let order = {
      ...user,
      orders: cartList,
    };
    database()
      .ref(`/users/${auth[0]?.userId}`)
      .set({
        ...order,
      })
      .then(response => console.log('Data set.', response));
    showNotification('Ecommerce', 'order placed');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headertext}>
          <View>
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
          data={cartList}
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
                        width: '100%',
                      }}
                      transform={'none'}>
                      Rs: {item.price}
                    </Text>
                  </View>
                  <View style={styles.wholeButtoncounter}>
                    <View style={styles.Buttoncounter}>
                      <TouchableOpacity onPress={() => Increment(item)}>
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
                        style={{ margin: 10 }}
                        transform={'none'}>
                        {item.count}
                      </Text>
                      <TouchableOpacity
                        onPress={() => Delete(item)}
                        style={{
                          gutterTop: R.unit.scale(10),
                        }}>
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
                        style={styles.cancelButton}>
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
          }}
        />
        <View style={styles.contentTitle}>
          <View>
            <Text
              variant={'body3'}
              font={'WorkSansBlackitalic'}
              color={R.color.logintextcolor}
              align={'left'}
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
              transform={'none'}>
              Free
            </Text>
          </View>
        </View>
        <View style={styles.totalpriceTitle}>
          <View>
            <Text
              variant={'body2'}
              font={'WorkSansBlackitalic'}
              color={R.color.black}
              align={'left'}
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
              transform={'none'}>
              {totalPrice}
            </Text>
          </View>
        </View>
        <Button
          size={'lg'}
          width={'90%'}
          height={50}
          onPress={addItems}
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
    width: R.unit.scale(65),
    height: R.unit.scale(50),
    borderRadius: R.unit.scale(40),
  },
  headertext: {
    flexDirection: 'row',
    justifyContent: 'center',
    gutterTop: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(7),
  },
  cartt: {
    paddingHorizontal: R.unit.scale(20),
    justifyContent: 'space-between',
    paddingVertical: R.unit.scale(16),
    flexDirection: 'row',
    borderRadius: R.unit.scale(12),
  },
  Buttoncounter: {
    backgroundColor: R.color.white,
    flexDirection: 'row',
    borderRadius: R.unit.scale(16),
    paddingVertical: R.unit.scale(3),
    paddingHorizontal: R.unit.scale(3),
  },
  wholeButtoncounter: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: R.unit.scale(14),
  },
  cancelButton: {
    marginLeft: R.unit.scale(14),
    marginTop: R.unit.scale(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: R.unit.scale(18),
    paddingTop: R.unit.scale(10),
  },
  totalpriceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: R.unit.scale(18),
    paddingTop: R.unit.scale(10),
  },
});
export default Cart;
