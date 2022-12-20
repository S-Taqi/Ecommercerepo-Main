import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Alert } from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '@components/common/Button';
import auth from '@react-native-firebase/auth';

function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  // const handleSubmit = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(username, password)
  //     .then(() => {
  //       setLoading(true);
  //       navigation.navigate('Home');
  //       console.log('User account created & signed in!');
  //     })

  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       } else {
  //         console.error(error);
  //       }
  //     });
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );
  const validPassword = new RegExp('.{8,}');
  const __doSignUp = () => {
    const body = {
      email,
      password,
    };

    for (var key in body) {
      if (body[key] == '' || body[key] == null || body.email == 'gmail') {
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

    __doCreateUser(email, password);
  };

  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        setLoading(true);
        Alert.alert('Success ✅', 'Account created successfully');
        navigation.navigate('Login');
        setLoading(false);
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

        {/* <TextInput
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
        /> */}
        <TextInput
          style={styles.input}
          label={'Email'}
          autoCapitalize={false}
          keyboardType="email-address"
          //style={styles.textInputStyle}
          placeholder="Mail address"
          onChangeText={text => {
            setError;
            setEmail(text);
          }}
          error={isValid}
        />

        <TextInput
          label={'Password'}
          secureTextEntry
          autoCapitalize={false}
          style={styles.input}
          //selectionColor={blue}
          placeholder="Password"
          error={isValid}
          onChangeText={text => setPassword(text)}
        />
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
              navigation.navigate('SigninScreen');
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
          onPress={__doSignUp}
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
