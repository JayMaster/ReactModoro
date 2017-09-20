import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'
import { colors, fontSizes } from '~/styles'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

const { height } = Dimensions.get('window');

/*Splash.PropTypes = {
  onLoginFinished: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
} */

/*
const Splash = (props, { dispatch }) => (
    <View style = {styles.container}>
      <View>
        <Image style={styles.image} source={require('../../images/logo.png')} />
        <Text style={styles.slogan}>ReactModoro</Text>
      </View>
      <View style={styles.loginContainer}>
        <LoginButton
        style = {{
          height: 30,
          width: 100,
          marginBottom: 15
        }}
          onLoginFinished={props.onLoginFinished}
        />
        <Text style={styles.assuranceText}>Don't worry. We don't post anything to Facebook.</Text>
      </View>
    </View>
)
*/

class Splash extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isAuthed) {
      console.log('this.props: ' , this.props);
      // this.props.dispatch({ type: 'authSuccess' })
    }
  }

  render () {
    return (
      <View style = {styles.container}>
      <View>
        <Image style={styles.image} source={require('../../images/logo.png')} />
        <Text style={styles.slogan}>ReactModoro</Text>
      </View>
      <View style={styles.loginContainer}>
        <LoginButton
        style = {{
          height: 30,
          width: 100,
          marginBottom: 15
        }}
          onLoginFinished={this.props.onLoginFinished}
        />
        <Text style={styles.assuranceText}>Don't worry. We don't post anything to Facebook.</Text>
      </View>
    </View>
    )
  }
}

function mapStateToProps ({authentication}) {
  return {
    // what we return from mapStateToProps is an object
    // whatever properties that we add here (in the return), will go in as props to our component
    isAuthed: authentication.isAuthed,
    isAuthenticating: authentication.isAuthenticating
  }
}

export default connect(mapStateToProps)(Splash);

/*const mapStateToProps = state => ({

}) */

//export default connect(mapStateToProps)(Splash)


const styles = StyleSheet.create({
  container: {
    flex: 1, // so it takes up the whole view
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40
  },
  slogan: {
    color: colors.blue,
    fontSize: 40,
    margin: 20,
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: height * .4 > 300 ? 300 : height * .4
    // if height * .4 is bigger than 300, then make the height 300
  },
  loginContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    marginBottom: 40
  },
  assuranceText: {
    color: colors.secondary,
    fontSize: fontSizes.secondary,
    textAlign: 'center'
  }
})