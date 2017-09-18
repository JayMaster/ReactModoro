import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux'


function Home (props) {
  return (
    <View>
      <Button
    	onPress={() => {
    		props.navigation.dispatch({ type: 'authSuccess' })
    	}}
    	title = "authSuccess"
        />
    </View>
  )
}

const mapStateToProps = authentication => ({
  isAuthenticating: authentication.isAuthenticating
});

export default connect(mapStateToProps)(Home);