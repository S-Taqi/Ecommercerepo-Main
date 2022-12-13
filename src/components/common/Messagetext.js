import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Messagetext = ({list, press}) => {
  return press ? (
    <View style={styles.containerPress}>
      <Text style={styles.textPress}>{list.title}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>{list.title}</Text>
    </View>
  );
};

export default Messagetext;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5f9ea0',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    paddingLeft: 5,
    paddingBottom: 2,
    fontSize: 20,
    color: 'white',
  },
  containerPress: {
    backgroundColor: '#5f9ea0',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  textPress: {
    fontSize: 20,
    color: '#5f9ea0',
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
});
