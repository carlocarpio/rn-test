import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

// Screens
import HomeScreen from './home';
import FundsScreen from './funds';
import AccountScreen from './account';
import PromotionScreen from './promotion';

export default TabNavigator({
  Home: { screen: HomeScreen },
  Funds: { screen: FundsScreen },
  Account: { screen: AccountScreen },
  Promotion: { screen: PromotionScreen },
});