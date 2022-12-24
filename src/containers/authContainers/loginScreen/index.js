import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '@components/common/Button';
import auth from '@react-native-firebase/auth';
import TextInput from '@components/common/TextInput';
import { useDispatch } from 'react-redux';
import { LoginReducer } from '../../../store/Action';

function LoginScreen(props) {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );
  const validPassword = new RegExp('.{6,}');
  const __doLogin = () => {
    const body = {
      email,
      password,
    };

    for (var key in body) {
      if (body[key] == '' || body[key] == null) {
        setError(`Fill the required ${key} field`);
        setValid(false);
        return;
      }
      if (!validEmail.test(body.email)) {
        setError('The email Address is badly formatted');
        setValid(false);
        return;
      }
      if (!validPassword.test(body.password)) {
        setError('Weak password, minimum 6 chars');
        setValid(false);
        return;
      }
    }

    __doSingIn(email, password);
  };

  const __doSingIn = async (email, password) => {
    try {
      setLoading(true);
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        console.log('aaas', response.user.uid);
        dispatch(LoginReducer(response.user.uid));
        database()
          .ref(`/users/${response.user.uid}`)
          .once('value')
          .then(snapshot => {
            console.log('User data: ', snapshot.val());
          });

        Alert.alert('Success ✅', 'Login Successfully');
        navigation.replace('Home');
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setValid(false);
      setLoading(false);
      return;
      // if (e.code === 'auth/email-already-in-use') {
      //   setError('That email address is already in use!');
      //   setValid(false);
      //   return;
      // }

      // if (e.code === 'auth/invalid-email') {
      //   setError('That email address is invalid!');
      //   setValid(false);
      //   return;
      // }

      // console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.wholecontainer}
        contentContainerStyle={styles.contentcontainer}>
        <View style={styles.headercontent}>
          <Text
            variant={'h1'}
            font={'WorkSansBlack'}
            gutterBottom={25}
            color={R.color.logintextcolor}
            transform={'none'}>
            Welcome
          </Text>
          <Text
            variant={'h1'}
            font={'WorkSansBlack'}
            gutterBottom={25}
            color={R.color.black}
            align={'left'}
            transform={'none'}>
            Login
          </Text>
        </View>
        <View>
          <TextInput
            placeholder={'username'}
            gutterBottom={10}
            onChangeText={text => {
              setError;
              setEmail(text);
            }}
            color={R.color.black}
            //value={authuser?}
            widthiInPercent={'100%'}
            //iconName={'Entypo'}
            //iconType={'user'}
            formError={isValid}
          />
        </View>
        <View>
          <TextInput
            label={'Password'}
            autoCapitalize={false}
            placeholder="Password"
            formError={isValid}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text
            variant={'body3'}
            font={'WorkSansextraRegular'}
            color={R.color.black}
            align={'left'}
            transform={'none'}>
            Forget password ?
          </Text>
          <Text
            onPress={() => {
              navigation.navigate('Signup');
            }}
            variant={'body3'}
            font={'WorkSansextraBold'}
            color={R.color.black}
            align={'left'}
            transform={'none'}>
            SignUp
          </Text>
        </View>
        {error ? (
          <View style={{ justifyContent: 'center' }}>
            {/* <Text style={}>{error}</Text> */}
            <Text
              variant={'body3'}
              font={'WorkSansextraBold'}
              color={R.color.logintextcolor}
              //align={'left'}
              transform={'none'}>
              {error}
            </Text>
          </View>
        ) : null}
        <Button
          size={'lg'}
          width={'100%'}
          height={50}
          onPress={__doLogin}
          variant={'body2'}
          gutterBottom={10}
          gutterTop={20}
          bgColor={R.color.logintextcolor}
          font={'PoppinsExtraBold'}
          value={'logIn'}
          disabled={loading}
          loader={loading}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingVertical: R.unit.scale(10),
    paddingHorizontal: R.unit.scale(18),
    marginBottom: R.unit.scale(20),
    width: R.unit.scale(355),
    backgroundColor: R.color.lightGray,
    elevation: R.unit.scale(6),
    borderRadius: R.unit.scale(16),
  },

  wholecontainer: {
    height: R.unit.height(1),
    width: R.unit.width(1),
  },
  headercontent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentcontainer: {
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(18),
  },
});
export default LoginScreen;
