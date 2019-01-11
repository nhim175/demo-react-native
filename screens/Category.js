import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Category extends React.Component {
  static navigationOptions = {
    title: 'Category'
  };

  render() {
    return (
      <View>
        <Text>Category</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
});
