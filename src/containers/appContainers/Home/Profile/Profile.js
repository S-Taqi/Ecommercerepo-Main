import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Icon from '@components/common/Icon';
import color from '@components/utils/Colors';
import Button from '@components/common/Button';
function Profile(props) {
  const { navigation } = props;

  return (
    <>
      <View style={styles.headerContainer}>
        <Text
          variant={'h5'}
          font={'Poppins-BoldItalic'}
          gutterTop={30}
          //gutterBottom={R.unit.scale(40)}
          color={R.color.white}
          align={'left'}
          style={{ width: '100%', marginLeft: R.unit.scale(20) }}
          transform={'none'}>
          Settings
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.images1}
            source={require('@assets/Images/imu.png')}
          />
          <View
            style={{
              flexDirection: 'column',
              marginTop: 30,
              marginLeft: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                variant={'body3'}
                font={'WorkSansextraRegular'}
                //gutterTop={5}
                //gutterBottom={R.unit.scale(40)}
                color={R.color.white}
                //align={'left'}
                transform={'none'}>
                HELLO
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text
                variant={'body3'}
                font={'WorkSansextraBold'}
                gutterTop={6}
                //gutterBottom={R.unit.scale(40)}
                color={R.color.white}
                //align={'left'}
                transform={'none'}>
                HELLO USER
              </Text>
              <View style={{ marginLeft: 160 }}>
                <Icon
                  type={'Feather'}
                  name={'edit'}
                  size={25}
                  color={'white'}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 30 }}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: R.color.gray2,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              marginTop: 90,
              height: 50,
              backgroundColor: R.color.white,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Text
                variant={'body2'}
                gutterTop={13}
                gutterBottom={10}
                font={'WorkSansBlackitalic'}
                color={R.color.black}
                transform={'none'}>
                My Home
              </Text>
            </View>
            <View style={{ marginTop: 13, marginRight: 10 }}>
              <Icon
                type={'Entypo'}
                name={'chevron-right'}
                size={25}
                color={'black'}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 3,
              height: 50,
              backgroundColor: R.color.white,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Text
                variant={'body2'}
                gutterTop={13}
                gutterBottom={10}
                font={'WorkSansBlackitalic'}
                color={R.color.black}
                transform={'none'}>
                Cart
              </Text>
            </View>
            <View style={{ marginTop: 13, marginRight: 10 }}>
              <Icon
                type={'Entypo'}
                name={'chevron-right'}
                size={25}
                color={'black'}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 3,
              height: 50,
              backgroundColor: R.color.white,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Text
                variant={'body2'}
                gutterTop={13}
                gutterBottom={10}
                font={'WorkSansBlackitalic'}
                color={R.color.black}
                transform={'none'}>
                Messages
              </Text>
            </View>
            <View style={{ marginTop: 13, marginRight: 10 }}>
              <Icon
                type={'Entypo'}
                name={'chevron-right'}
                size={25}
                color={'black'}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 17,
              height: 50,
              backgroundColor: R.color.white,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <View style={{ flexDirection: 'row', marginLeft: 130 }}>
              <Text
                variant={'body2'}
                gutterTop={13}
                gutterBottom={10}
                font={'WorkSansBlackitalic'}
                color={R.color.logintextcolor}
                transform={'none'}>
                Logout
              </Text>
            </View>
            <View style={{ marginTop: 10, marginRight: 120 }}>
              <Icon
                type={'AntDesign'}
                name={'logout'}
                size={25}
                color={R.color.logintextcolor}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
export default Profile;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: R.unit.scale(25),
    width: R.unit.width(1),
    flex: 1,
    //height: R.unit.height(6),
    //alignItems: 'center',
    backgroundColor: R.color.blue,
    //flexDirection: 'row',
    // borderBottomRightRadius: R.unit.scale(35),
    // borderBottomLeftRadius: R.unit.scale(35),
  },
  bodyContainer: {
    //paddingTop: R.unit.scale(15),
    //width: R.unit.width(1),
    //height: R.unit.height(6),
    //alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'flex-start',
    //marginTop: 100,
    backgroundColor: R.color.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // flexDirection: 'row',
    //borderBottomRightRadius: R.unit.scale(35),
    //borderBottomLeftRadius: R.unit.scale(35),
  },

  images1: {
    marginTop: R.unit.scale(20),
    backgroundColor: 'red',
    marginLeft: R.unit.scale(20),
    width: R.unit.scale(60),
    height: R.unit.scale(60),
    borderRadius: R.unit.scale(30),
    //justifyContent: 'center',
    //alignSelf: 'center',
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
