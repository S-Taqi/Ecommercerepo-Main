import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Icon from '@components/common/Icon';
import color from '@components/utils/Colors';

function Profile(props) {
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
        <View>
          <Text
            variant={'h3'}
            font={'Poppins-Black'}
            gutterTop={14}
            gutterBottom={R.unit.scale(40)}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%' }}
            transform={'none'}>
            HELLO USER
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Icon type={'Entypo'} name={'bell'} size={25} color={'#E42021'} />
        <View>
          <Text
            variant={'body1'}
            font={'Poppins-Black'}
            gutterTop={3}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%' }}
            transform={'none'}>
            Notification
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <Icon type={'AntDesign'} name={'right'} size={25} color={'#E42021'} />
        </TouchableOpacity>
      </View>
      <View style={styles.shoppingCartview}>
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
          style={styles.cartmargin}>
          <Icon type={'AntDesign'} name={'right'} size={25} color={'#E42021'} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoutview}>
        <Icon type={'Feather'} name={'log-out'} size={25} color={'#E42021'} />
        <View>
          <Text
            variant={'body1'}
            font={'Poppins-Black'}
            gutterTop={3}
            color={R.color.black}
            align={'center'}
            style={{ width: '100%' }}
            transform={'none'}>
            Logout
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.arrow}>
          <Icon type={'AntDesign'} name={'right'} size={25} color={'#E42021'} />
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Profile;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: R.unit.scale(15),
    width: R.unit.scale(380),
    alignItems: 'center',
    backgroundColor: R.color.gray,
    borderBottomRightRadius: R.unit.scale(35),
    borderBottomLeftRadius: R.unit.scale(35),
  },

  images1: {
    marginTop: R.unit.scale(30),
    width: R.unit.scale(40),
    height: R.unit.scale(40),
    borderRadius: R.unit.scale(30),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: R.color.gray,
    borderRadius: R.unit.scale(30),
    margin: R.unit.scale(20),
    padding: R.unit.scale(6),
  },
  arrow: { marginLeft: R.unit.scale(110) },
  logoutview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: R.color.gray,
    borderRadius: R.unit.scale(20),
    margin: R.unit.scale(12),
    padding: R.unit.scale(6),
  },
  shoppingCartview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: R.color.gray,
    borderRadius: R.unit.scale(20),
    margin: R.unit.scale(12),
    padding: R.unit.scale(6),
  },
  cartmargin: {
    marginLeft: R.unit.scale(110),
  },
});
