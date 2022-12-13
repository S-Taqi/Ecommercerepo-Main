import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
//import Text from '@components/common/Text';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../store/Action';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import R from '@components/utils/R';

function Home({ navigation }) {
  const theme = useSelector(state => state.ThemeReducer);
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Jackets',
      uri: require('../../../assets/Images/a.png'),
      message: 'Order For leather jackets is placed',
      isSeen: true,
      price: 5000,
      count: 0,
    },
    {
      id: '2',
      name: 'Shirts',
      uri: require('../../../assets/Images/shirtss.png'),
      message: 'Order For shirts is placed',
      isSeen: true,
      price: 3500,
      count: 1,
    },
    {
      id: '3',
      name: 'T-shirts',
      uri: require('../../../assets/Images/shirts.png'),
      message: 'Order For T-shirts is placed',
      price: 4000,
      isSeen: true,
      count: 2,
    },
    {
      id: '4',
      name: 'Pants',
      uri: require('../../../assets/Images/pantss.png'),
      message: 'Order For Pants is placed',
      price: 3000,
      isSeen: true,
      count: 3,
    },
    {
      id: '5',
      name: 'Shirtsss',
      uri: require('../../../assets/Images/profilePic.jpg'),
      message: 'Order For Shirtsss is placed',
      price: 2000,
      isSeen: true,
      count: 4,
    },
    {
      id: '6',
      name: 'kkkkk',
      uri: require('../../../assets/Images/kkk.jpg'),
      message: 'Order For kkkkk is placed',
      price: 1000,
      isSeen: true,
      count: 5,
    },
    {
      id: '7',
      name: 'Jeansss',
      uri: require('../../../assets/Images/profilePic.jpg'),
      message: 'Order For Shirtsss is placed',
      price: 2000,
      isSeen: true,
      count: 6,
    },
    {
      id: '8',
      name: 'Swag-shirts',
      uri: require('../../../assets/Images/kkk.jpg'),
      message: 'Order For kkkkk is placed',
      price: 1000,
      isSeen: true,
      count: 7,
    },
    {
      id: '9',
      name: 'Sweaters',
      uri: require('../../../assets/Images/profilePic.jpg'),
      message: 'Order For Shirtsss is placed',
      price: 2000,
      isSeen: true,
      count: 8,
    },
    {
      id: '10',
      name: 'Dress pants',
      uri: require('../../../assets/Images/kkk.jpg'),
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
            <Text style={styles.headertitle}>80%off</Text>
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
        <View style={{ flex: 1, marginLeft: 14 }}>
          <Text style={styles.bodytitle}>{item.name}</Text>
          <Text style={styles.bodydiscriptions}>
            All good quality cloths,with comfort and geniune quality leather
          </Text>

          <View
            style={{
              marginTop: 10,
              height: 20,
              width: 40,
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 10,
              backgroundColor: 'red',
            }}>
            <Text style={styles.bodypricetitles}>{item.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 170 }}>
            <Icon type={'Entypo'} name={'heart'} size={25} color={'#E42021'} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  //   return (
  //     <TouchableOpacity
  //       onPress={() => navigation.navigate('Detail', {itemData})}>
  //       <View style={styles.containerFlatee}>
  //         <View style={styles.innerContainerheaderr}>
  //           <Image
  //             source={require('../../../assets/Images/a.png')}
  //             style={styles.headerimage}
  //           />
  //           <Feather name="plus" size={24} style={{paddingLeft: 130}} />
  //         </View>
  //       </View>
  //       <Text style={styles.bodytitle}>Id : {itemData.item.id}</Text>
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <View
      style={{
        backgroundColor: theme == 'DARK' ? '#A45A52' : 'white',
        opacity: 4.6,
        shadowOpacity: 2.5,
      }}>
      <View>
        <View style={styles.headericon}>
          <Icon
            type={'FontAwesome'}
            name={'shirtsinbulk'}
            size={40}
            //color={focused ? '#E42021' : 'black'}
          />
          <View>
            <Text
              style={{
                marginRight: 80,
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
                color: 'black',
                marginTop: 5,
              }}>
              Good quality cloths,
            </Text>
          </View>
          <Icon
            type={'Feather'}
            name={'search'}
            size={30}
            //color={focused ? '#E42021' : 'black'}
          />
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
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
      />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  containerHeader: {
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    margin: 8,
    //paddingHorizontal: 6,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 6,
    opacity: 1.6,
    shadowColor: 'black',
  },

  containerBody: {
    paddingVertical: 12,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 28,
    margin: 8,
    elevation: 6,
    shadowRadius: 19,
  },
  innerContainerheader: {
    flexDirection: 'row',
    padding: 4,
    margin: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodytitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: 'black',
    marginTop: 1,
  },
  bodydiscriptions: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 1,
  },
  bodypricetitles: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
    //paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  headerimage: {
    width: 30,
    height: 30,
    borderRadius: 80 / 2,
    justifyContent: 'center',
  },
  bodyimage: {
    width: 90,
    height: 90,
    borderRadius: 40,
  },
  headertitle: {
    color: '#E42021',
    margin: 12,
    fontFamily: 'Poppins-Bold',
  },
  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginLeft: 10,
  },
  header: {},
});
