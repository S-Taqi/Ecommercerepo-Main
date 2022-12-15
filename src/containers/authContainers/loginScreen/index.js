import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '@components/common/Button';
import auth from '@react-native-firebase/auth';

function LoginScreen({ navigation }) {
  const [username, onChangeusername] = useState('');
  const [password, onChangepassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
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
        } else {
          console.error(error);
        }
      });
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
          color={R.color.black}
          align={'left'}
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
  tinyLogo: {
    marginLeft: R.unit.scale(100),
    width: R.unit.scale(150),
    height: R.unit.scale(150),
  },
  wholecontainer: {
    height: R.unit.scale(600),
    width: R.unit.scale(380),
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
