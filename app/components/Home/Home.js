import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from 'react-navigation';

/*
const resetNav = NavigationActions.reset({
  index: 0,
  actions: [Navigations.navigate({ routeName: 'Home'})]
});
*/

function Home (props) {
  return (
    <View>
      <Text>This is Home.</Text>
    </View>
  )
}

const mapStateToProps = authentication => ({
  isAuthenticating: authentication.isAuthenticating
});

export default connect(mapStateToProps)(Home);