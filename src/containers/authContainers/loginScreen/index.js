import React, { useState } from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import R from '@components/utils/R';
import { ScrollView } from 'react-native-gesture-handler';
import Text from '@components/common/Text';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../store/Action';
import Loader from '@components/common/Loader';
import Button from '@components/common/Button';
import auth from '@react-native-firebase/auth';

function LoginScreen({ navigation, props }) {
  const [username, onChangeusername] = useState('');
  const [password, onChangepassword] = useState('');

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector(state => state.ThemeReducer);
  console.log(theme, 'bbbbb');
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );

  const handleSubmit = () => {
    // const body = {
    //   username,
    //   password,
    // };

    // for (var key in body) {
    //   if (body[key] == '' || body[key] == null) {
    //     return alert(`Plese fill ${key} field`);
    //   }
    //   if (!validEmail.test(body.username)) {
    //     return alert('please fill valid email');
    //   }
    // }

    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        setLoading(true);
        navigation.navigate('Home');
        console.log('User account created & signed in!');
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        // if (
        //   error ===
        //   error.filter(
        //     e =>
        //       e ==
        //       'Error: [auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]',
        //   )
        // ) {
        //   console.log('show alert');
        // }
        else {
          console.error(error);
        }
      });
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          height: '100%',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
          alignItems: 'center',
          width: '100%',
          backgroundColor: theme == 'DARK' ? '#A45A52' : 'white',
          paddingHorizontal: 18,
        }}>
        <View style={{ width: '100%' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              variant={'h1'}
              font={'WorkSansBlack'}
              gutterBottom={25}
              color={R.color.logintextcolor}
              style={{ padding: 6 }}
              transform={'none'}>
              Welcome
            </Text>
            <Text
              variant={'h1'}
              font={'WorkSansBlack'}
              gutterBottom={25}
              color={R.color.black}
              align={'left'}
              style={{ padding: 6 }}
              transform={'none'}>
              Login
            </Text>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeusername}
            placeholder="username"
            placeholderTextColor="white"
            value={username}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangepassword}
            value={password}
            placeholder="password"
            keyboardType="numeric"
            placeholderTextColor="white"
            secureTextEntry
          />
          <Text
            variant={'body3'}
            font={'WorkSansextraRegular'}
            //gutterBottom={25}
            color={R.color.black}
            align={'left'}
            style={{ paddingHorizontal: 12 }}
            transform={'none'}>
            Forget password ?
          </Text>

          <Button
            size={'lg'}
            width={'100%'}
            height={50}
            onPress={handleSubmit}
            variant={'body2'}
            gutterBottom={10}
            gutterTop={20}
            bgColor={'red'}
            font={'PoppinsExtraBold'}
            value={'logIn'}
            //iconName={'login'}
            //iconType={'Entypo'}
            //iconStyle={26}
            disabled={loading}
            loader={loading}
          />
          {/* <TouchableOpacity
            onPress={() => {
              if (theme === 'DARK') {
                dispatch(changeTheme('LIGHT'));
              } else {
                dispatch(changeTheme('DARK'));
              }
            }}
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              paddingVertical: 15,
              elevation: 9,
              shadowOpacity: 0.25,
              backgroundColor: '#E42021',
              borderRadius: 22,
              marginTop: 30,
            }}>
            <Text
              variant={'body1'}
              font={'WorkSansmedium'}
              //gutterBottom={25}
              color={R.color.white}
              align={'left'}
              style={{ paddingHorizontal: 12 }}
              transform={'none'}>
              Theming
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'lightgrey',
    elevation: 6,
    borderRadius: 16,
  },
  tinyLogo: {
    marginLeft: 100,
    width: 150,
    height: 150,
  },
});
export default LoginScreen;
