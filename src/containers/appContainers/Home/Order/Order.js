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
import database from '@react-native-firebase/database';

const Order = () => {
  const [orderlist, setOrderList] = useState([]);
  const [price, setPrice] = useState();
  const [count, setCount] = useState();
  const [totalitems, setTotalitems] = useState();

  //console.log(orderlist, 'asasff');

  const auth = useSelector(state => state.LoginReducer);
  console.log('ssss', auth);

  useEffect(() => {
    database()
      .ref(`/users/${auth[0]?.userId}`)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        setOrderList(snapshot.val());
      });

    orderData();
    ItemsCount();
    Totalorder();
  }, []);
  //showing price
  const orderData = () => {
    let newArr = [];
    for (var i = 0; i < orderlist.orders?.length; i++) {
      let result = orderlist.orders[i].count * orderlist.orders[i].price;
      newArr.push(result);
      let subresult = newArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      console.log(subresult, 'ssssss');
      setPrice(subresult);
    }
  };
  //Items count
  const ItemsCount = () => {
    let newArr = [];
    for (var i = 0; i < orderlist.orders?.length; i++) {
      let result = orderlist.orders[i].count;
      newArr.push(result);
      let subresult = newArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      console.log(subresult, 'kkkkkk');
      setCount(subresult);
    }
  };
  //Orders
  const Totalorder = () => {
    let newArr = [];
    for (var i = 0; i < orderlist.orders?.length; i++) {
      let result = orderlist.orders[i].name;
      newArr.push(result);
      let subresult = newArr;
      setTotalitems(subresult);
    }
  };
  return (
    <ScrollView style={styles.mainview}>
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
            Your Orders
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.cartt}>
          <View>
            <Text
              variant={'body1'}
              font={'WorkSansextraBold'}
              gutterTop={6}
              color={R.color.logintextcolor}
              align={'left'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              Previous orders
            </Text>

            <Text
              variant={'body2'}
              font={'PoppinsMediumItalic'}
              //gutterBottom={R.unit.scale(16)}
              gutterTop={6}
              color={R.color.black}
              align={'left'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              No of items : {count}
            </Text>
            <Text
              variant={'body2'}
              font={'PoppinsMediumItalic'}
              gutterBottom={R.unit.scale(10)}
              gutterTop={10}
              color={R.color.black}
              align={'left'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              Rs: {price}
            </Text>
            <Text
              variant={'body2'}
              font={'PoppinsMediumItalic'}
              //gutterBottom={R.unit.scale(16)}
              //gutterTop={6}
              color={R.color.black}
              align={'left'}
              style={{
                width: '100%',
              }}
              transform={'none'}>
              Your Items Details:
              {totalitems}
            </Text>
          </View>
        </View>
      </View>
      {/* <Button
        size={'lg'}
        width={'90%'}
        height={50}
        onPress={orderData}
        variant={'body2'}
        gutterBottom={10}
        gutterTop={20}
        bgColor={R.color.logintextcolor}
        font={'PoppinsExtraBold'}
        value={'Place Order'}
      /> */}
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    flex: 1,
  },
  mainview: {
    flexDirection: 'column',
    flex: 1,
  },
  containerBody: {
    paddingVertical: R.unit.scale(12),
    borderRadius: R.unit.scale(10),
    width: R.unit.scale(355),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(28),
    margin: R.unit.scale(8),
    elevation: R.unit.scale(6),
    shadowRadius: R.unit.scale(19),
  },
  containermessage: {
    paddingHorizontal: R.unit.scale(10),
    paddingBottom: R.unit.scale(14),
    paddingTop: R.unit.scale(9),
    borderRadius: R.unit.scale(10),
    margin: R.unit.scale(10),
  },
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
