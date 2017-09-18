import React, { PropTypes, Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Me extends Component {
  render () {
    return (
      <View>
      	<Text>Me</Text>
      </View>
    )
  }
}

const mapStateToProps = authentication => ({
  isAuthenticating: authentication.isAuthenticating
});

export default connect(mapStateToProps)(Me);