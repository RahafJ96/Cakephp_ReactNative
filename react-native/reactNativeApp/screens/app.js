import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import home from './home';
import Login from './loginPage';
import Register from './register';
import Profile from './profile';

const UsersManager = StackNavigator({
    Home: { screen: home },
    Login: { screen: Login },
    Register: { screen: Register },
    Profile: { screen: Profile }

});
export default UsersManager;