import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Icon from '@components/common/Icon';

function Profile() {
  const data = [
    {
      id: '1',
      title: 'My home',
    },
    {
      id: '2',
      title: 'Cart',
    },
    {
      id: '3',
      title: 'Messages',
    },
  ];
  const list = () => {
    return data.map(element => {
      return (
        <View
          style={{
            marginTop: 3,
            height: 50,
            backgroundColor: R.color.white,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            variant={'body2'}
            gutterTop={13}
            gutterBottom={10}
            font={'WorkSansBlackitalic'}
            color={R.color.black}
            style={{ marginLeft: 12 }}
            transform={'none'}>
            {element.title}
          </Text>
          <View style={{ marginTop: 13, marginRight: 10 }}>
            <Icon
              type={'Entypo'}
              name={'chevron-right'}
              size={25}
              color={'black'}
            />
          </View>
        </View>
      );
    });
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Text
          variant={'h5'}
          font={'Poppins-BoldItalic'}
          gutterTop={30}
          gutterBottom={R.unit.scale(20)}
          color={R.color.white}
          align={'left'}
          style={{ width: '100%', marginLeft: R.unit.scale(10) }}
          transform={'none'}>
          Settings
        </Text>

        <View style={styles.headerContents}>
          <View style={styles.ImageView}>
            <Image
              style={styles.images1}
              source={require('@assets/Images/imu.png')}
            />
            <View style={styles.headerContentsText}>
              <Text
                variant={'body3'}
                font={'WorkSansextraRegular'}
                color={R.color.white}
                transform={'none'}>
                HELLO
              </Text>

              <Text
                variant={'body3'}
                font={'WorkSansextraBold'}
                gutterTop={6}
                color={R.color.white}
                transform={'none'}>
                HELLO USER
              </Text>
            </View>
          </View>
          <View>
            <Icon type={'Feather'} name={'edit'} size={25} color={'white'} />
          </View>
        </View>

        <View style={styles.SettingBodyContainer}>
          <View style={styles.SettingBodyContainerTitles}>{list()}</View>
          <View style={styles.logoutButton}>
            <View style={styles.logoutButtonContent}>
              <Text
                variant={'body2'}
                font={'WorkSansBlackitalic'}
                color={R.color.logintextcolor}
                transform={'none'}>
                Logout
              </Text>
              <View style={styles.logoutIconSpacing}>
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
    backgroundColor: R.color.blue,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: R.color.white,
    borderTopRightRadius: R.unit.scale(20),
    borderTopLeftRadius: R.unit.scale(20),
  },

  images1: {
    backgroundColor: 'red',
    width: R.unit.scale(60),
    height: R.unit.scale(60),
    borderRadius: R.unit.scale(30),
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
  SettingBodyContainer: {
    flex: 1,
    backgroundColor: R.color.gray2,
    borderTopRightRadius: R.unit.scale(20),
    borderTopLeftRadius: R.unit.scale(20),
    marginTop: R.unit.scale(20),
  },
  SettingBodyContainerTitles: { marginTop: R.unit.scale(100) },
  logoutButton: {
    marginTop: R.unit.scale(17),
    height: R.unit.scale(50),
    backgroundColor: R.color.white,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  logoutButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIconSpacing: { margin: R.unit.scale(8) },
  headerContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(10),
    marginBottom: R.unit.scale(12),
  },
  ImageView: { flexDirection: 'row' },
  headerContentsText: {
    flexDirection: 'column',
    marginLeft: R.unit.scale(20),
  },
});
