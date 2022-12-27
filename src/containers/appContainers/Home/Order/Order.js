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
import Loader from '@components/common/Loader';
import Button from '@components/common/Button';

const Order = () => {
  const [isLoading, setLoading] = useState(false);
  const [orderlist, setOrderList] = useState([]);
  const [price, setPrice] = useState();

  //console.log(orderlist.orders[0].count, 'asasff');

  const auth = useSelector(state => state.LoginReducer);
  console.log('ssss', auth);

  useEffect(() => {
    setLoading(true);
    database()
      .ref(`/users/${auth[0]?.uid}`)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        setOrderList(snapshot.val());
      });
    setLoading(false);
  }, []);

  //showing price
  const orderData = () => {
    let newArr = [];
    for (var i = 0; i < orderlist.orders.length; i++) {
      let result = orderlist.orders[i].count * orderlist.orders[i].price;
      newArr.push(result);
      let subresult = newArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      console.log(subresult, 'ssssss');
      setPrice(subresult);
    }
  };

  const renderList = ({ item }) => (
    <View>
      console.log(item);
      <TouchableOpacity style={styles.containerBody}>
        <View style={styles.innerContainerText}>
          <Text
            variant={'body2'}
            font={'WorkSansBlackitalic'}
            color={R.color.black}
            transform={'none'}>
            {item.orders[0].count}
          </Text>
          <Text
            variant={'body4'}
            font={'PoppinsMedium'}
            color={R.color.black}
            transform={'none'}>
            {item.price}
          </Text>
          <Text
            variant={'body4'}
            font={'PoppinsMedium'}
            color={R.color.black}
            transform={'none'}>
            {item.count}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

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
      {isLoading ? (
        <Loader size={small} color={R.color.red} />
      ) : (
        <FlatList data={orderlist} renderItem={renderList} />
      )}
      <Button
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
      />
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
});
