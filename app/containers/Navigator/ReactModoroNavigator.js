import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import { addNavigationHelpers } from 'react-navigation'
import { Provider, connect } from 'react-redux'

import MainNavigator from '~/config/routes.js'

import store from '~/store';

// import { Splash } from '~/components' // now comes through Routes

// import { Routes } from '~/config/routes.js'

/* export default class ReactModoroNavigator extends Component {
  render () {
    return (
      <View>
        <Text>
          ReactModoroNavigator
        </Text>
      </View>
    )
  }
} */

/*export const ReactModoroNavigator = StackNavigator({
  Splash: {
    screen: Splash,
  }
}) */

// what is dispatch and nav and where do they come from

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
