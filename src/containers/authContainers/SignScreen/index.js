import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '@components/common/Button';
import auth from '@react-native-firebase/auth';
import TextInput from '@components/common/TextInput';
import Icon from '@components/common/Icon';

function LoginScreen(props) {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );
  const validPassword = new RegExp('.{8,}');
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
        setError('Weak password, minimum 6 chars');
        setValid(false);
        return;
      }
    }

    __doCreateUser(username, email, password);
  };

  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        Alert.alert('Success ✅', 'Signin successfully');
        navigation.navigate('Login');
      }
    } catch (e) {
      console.error(e.message);
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
            setError;
            setUsername(text);
          }}
          color={R.color.black}
          //value={authuser?}
          widthiInPercent={'100%'}
          iconName={'Entypo'}
          iconType={'user'}
          formError={isValid}
        />
        <TextInput
          placeholder={'Email'}
          gutterBottom={10}
          onChangeText={text => {
            setError;
            setEmail(text);
          }}
          color={R.color.black}
          //value={authuser?}
          widthiInPercent={'100%'}
          iconName={'Entypo'}
          iconType={'user'}
          formError={isValid}
        />
        <TextInput
          placeholder={'password'}
          gutterBottom={10}
          onChangeText={text => setPassword(text)}
          color={R.color.black}
          //value={authuser?}
          widthiInPercent={'100%'}
          secureTextEntry={true}
          iconName={'Entypo'}
          iconType={'user'}
          formError={isValid}
          showPassword={true}
        />

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
