import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import R from '@components/utils/R';

function Home({ navigation }) {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Jackets',
      uri: require('../../../../assets/Images/a.png'),
      message: 'Order For leather jackets is placed',
      isSeen: true,
      price: 5000,
      count: 0,
    },
    {
      id: '2',
      name: 'Shirts',
      uri: require('../../../../assets/Images/shirtss.png'),
      message: 'Order For shirts is placed',
      isSeen: true,
      price: 3500,
      count: 1,
    },
    {
      id: '3',
      name: 'T-shirts',
      uri: require('../../../../assets/Images/shirts.png'),
      message: 'Order For T-shirts is placed',
      price: 4000,
      isSeen: true,
      count: 2,
    },
    {
      id: '4',
      name: 'Pants',
      uri: require('../../../../assets/Images/pantss.png'),
      message: 'Order For Pants is placed',
      price: 3000,
      isSeen: true,
      count: 3,
    },
    {
      id: '5',
      name: 'Shirtsss',
      uri: require('../../../../assets/Images/profilePic.jpg'),
      message: 'Order For Shirtsss is placed',
      price: 2000,
      isSeen: true,
      count: 4,
    },
    {
      id: '6',
      name: 'kkkkk',
      uri: require('../../../../assets/Images/kkk.jpg'),
      message: 'Order For kkkkk is placed',
      price: 1000,
      isSeen: true,
      count: 5,
    },
    {
      id: '7',
      name: 'Jeansss',
      uri: require('../../../../assets/Images/profilePic.jpg'),
      message: 'Order For Shirtsss is placed',
      price: 2000,
      isSeen: true,
      count: 6,
    },
    {
      id: '8',
      name: 'Swag-shirts',
      uri: require('../../../../assets/Images/kkk.jpg'),
      message: 'Order For kkkkk is placed',
      price: 1000,
      isSeen: true,
      count: 7,
    },
    {
      id: '9',
      name: 'Sweaters',
      uri: require('../../../../assets/Images/profilePic.jpg'),
      message: 'Order For Shirtsss is placed',
      price: 2000,
      isSeen: true,
      count: 8,
    },
    {
      id: '10',
      name: 'Dress pants',
      uri: require('../../../../assets/Images/kkk.jpg'),
      message: 'Order For kkkkk is placed',
      price: '1000 RS',
      isSeen: true,
      count: 9,
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.containerHeader}>
          <View style={styles.innerContainerheader}>
            <Image source={item.uri} style={styles.headerimage} />
            <Text
              variant={'body2'}
              font={'WorkSansBlackitalic'}
              color={R.color.black}
              transform={'none'}>
              80% off
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', { data: item })}
        style={styles.containerBody}>
        <Image
          source={item.uri}
          style={styles.bodyimage}
          resizeMode={'contain'}
        />
        <View style={styles.innercontainertext}>
          <Text
            variant={'body2'}
            font={'WorkSansBlackitalic'}
            color={R.color.black}
            transform={'none'}>
            {item.name}
          </Text>
          <Text
            variant={'body4'}
            font={'WorkSansBlackitalic'}
            color={R.color.black}
            transform={'none'}>
            All good quality cloths,with comfort and geniune quality leather
          </Text>
          <View style={styles.pricingTag}>
            <Text
              variant={'body5'}
              font={'WorkSansBlackitalic'}
              color={R.color.white}
              style={{ width: '100%' }}
              align={'center'}
              transform={'none'}>
              {item.price}
            </Text>
          </View>
          <View style={styles.heartIconstyle}>
            <Icon type={'Entypo'} name={'heart'} size={25} color={'#E42021'} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View>
        <View style={styles.headericon}>
          <Icon type={'FontAwesome'} name={'shirtsinbulk'} size={40} />
          <View>
            <Text
              variant={'h4'}
              font={'WorkSansBlackitalic'}
              color={R.color.black}
              style={{ width: '100%' }}
              align={'left'}
              transform={'none'}>
              Good quality cloths,
            </Text>
          </View>
          <Icon type={'Feather'} name={'search'} size={30} />
        </View>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  containerHeader: {
    borderRadius: R.unit.scale(8),
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: R.unit.scale(8),
    borderRadius: R.unit.scale(20),
    backgroundColor: R.color.white,
    elevation: R.unit.scale(6),
    opacity: R.unit.scale(1.6),
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
  innerContainerheader: {
    flexDirection: 'row',
    padding: R.unit.scale(4),
    margin: R.unit.scale(12),
    borderRadius: R.unit.scale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerimage: {
    width: R.unit.scale(30),
    height: R.unit.scale(30),
    borderRadius: R.unit.scale(30),
    justifyContent: 'center',
  },
  bodyimage: {
    width: R.unit.scale(90),
    height: R.unit.scale(90),
    borderRadius: R.unit.scale(40),
  },

  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: R.unit.scale(20),
    marginLeft: R.unit.scale(10),
  },
  innercontainertext: { flex: 1, marginLeft: R.unit.scale(14) },
  pricingTag: {
    marginTop: R.unit.scale(10),
    height: R.unit.scale(20),
    width: R.unit.scale(40),
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: R.unit.scale(10),
    backgroundColor: R.color.red,
  },
  heartIconstyle: { flexDirection: 'row', marginLeft: R.unit.scale(170) },
});
