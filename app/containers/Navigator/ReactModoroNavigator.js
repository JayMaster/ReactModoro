import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator, SettingsContainer } from 'react-navigation'

import { addNavigationHelpers } from 'react-navigation'
import { Provider, connect } from 'react-redux'

import MainNavigator from '~/config/routes.js'

import store from '~/store';

const myApp = ({ dispatch, nav }) => (
  <MainNavigator
    navigation= { addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

const AppWithNavigation = connect(mapStateToProps)(myApp)

export default class ReactModoroNavigator extends Component {
  render () {
    return (
      <Provider store ={store}>
        <AppWithNavigation />
      </Provider>
    )
  }
}
