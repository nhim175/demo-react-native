import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const CategoryStack = createStackNavigator({
  Categories,
  Category
});
CategoryStack.navigationOptions = {
  tabBarLabel: 'Home'
};
const CartStack = createStackNavigator({
  Cart
});
CartStack.navigationOptions = {
  tabBarLabel: 'Cart'
};
const OrderStack = createStackNavigator({ Orders });
OrderStack.navigationOptions = {
  tabBarLabel: 'Orders'
};
const SettingStack = createStackNavigator({ Settings });
SettingStack.navigationOptions = {
  tabBarLabel: 'Settings'
};

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrderStack,
  SettingStack
})

export default AppNavigator;
