import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '@components/common/Button';
import auth from '@react-native-firebase/auth';
import TextInput from '@components/common/TextInput';

function SignScreen(props) {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );
  const validPassword = new RegExp('.{6,}');

  const __doSignUp = () => {
    const body = {
      username,
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
        setError('Weak password, minimum 6 characters');
        setValid(false);
        return;
      }
    }
    _doCreateUser(email, password, username);
  };

  const _doCreateUser = async (email, password, username) => {
    try {
      setLoading(true);
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
        username,
      );

      let loginobj = {
        userId: response.user.uid,
        userName: username,
        email: email,
        photoUrl: '',
      };

      if (response && response.user) {
        database().ref(`/users/${response.user.uid}`).set(loginobj);
        Alert.alert('Success ✅', 'Signin successfully');
        navigation.navigate('Login');
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setValid(false);
      setLoading(false);
      return;
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
            SignUp
          </Text>
          <Text
            variant={'h1'}
            font={'WorkSansBlack'}
            gutterBottom={25}
            color={R.color.black}
            align={'left'}
            transform={'none'}>
            To Continue
          </Text>
        </View>
        <TextInput
          placeholder={'username'}
          gutterBottom={10}
          onChangeText={text => {
            setUsername(text);
          }}
          color={R.color.black}
          widthiInPercent={'100%'}
          formError={isValid}
        />
        <TextInput
          placeholder={'Email'}
          gutterBottom={10}
          onChangeText={text => {
            setEmail(text);
          }}
          color={R.color.black}
          widthiInPercent={'100%'}
          formError={isValid}
        />
        <TextInput
          placeholder={'password'}
          gutterBottom={10}
          onChangeText={text => setPassword(text)}
          color={R.color.black}
          widthiInPercent={'100%'}
          secureTextEntry={true}
          formError={isValid}
          showPassword={false}
        />
        {error ? (
          <View style={{ justifyContent: 'center' }}>
            <Text
              variant={'body3'}
              font={'WorkSansextraBold'}
              color={R.color.logintextcolor}
              transform={'none'}>
              {error}
            </Text>
          </View>
        ) : null}
        <Button
          size={'lg'}
          width={'100%'}
          height={50}
          onPress={__doSignUp}
          variant={'body2'}
          gutterBottom={10}
          gutterTop={20}
          bgColor={R.color.logintextcolor}
          font={'PoppinsExtraBold'}
          value={'SignUp'}
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
    height: R.unit.scale(555),
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
export default SignScreen;
