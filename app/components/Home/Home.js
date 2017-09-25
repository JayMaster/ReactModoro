import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { ReactModoroNavbar, Gear } from '~/components'
import { colors } from '~/styles'
import { NavigationActions } from 'react-navigation';
import Score from './Score.js'
import Countdown from './Countdown'
import ProgressBar from './ProgressBar'
import TimerButtons from './TimerButtons'
import SkipRest from './SkipRest'

/*
const resetNav = NavigationActions.reset({
  index: 0,
  actions: [Navigations.navigate({ routeName: 'Home'})]
});
*/

Home.propTypes = {
  countdownRunning: PropTypes.bool.isRequired,
  timer: PropTypes.string.isRequired,
  rest: PropTypes.string.isRequired,
  // activeCountdown: PropTypes.string.isRequired,
  onToggleCountdown: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSkipRest: PropTypes.func.isRequired,
  handleToSettings: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired
} 

function Home (props) {
  return (
    <View style = {[styles.container, {backgroundColor: props.activeCountdown === 'timer' ? colors.blue : colors.red}]}>
    	<ReactModoroNavbar 
    		title ='Home'
    		rightButton={<Gear onPress={props.handleToSettings}/>}
    	/>
      <Score count = {95} />
      <Countdown formattedTime = {props[props.activeCountdown]} />
      <ProgressBar style={{marginLeft: 20, marginRight: 20}} progress = {props.progress} />
      <View style ={styles.footer}>
        {props.activeCountdown === 'timer'
          ? <TimerButtons
              countdownRunning = {props.countdownRunning}
              onToggle = {props.onToggleCountdown}
              onReset = {props.onReset}
            />
          : <SkipRest onSkipRest={props.onSkipRest}/>
        }
      </View>
    </View>
  )
}

const mapStateToProps = authentication => ({
  // isAuthenticating: authentication.isAuthenticating
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 65
  }
})

export default connect(mapStateToProps)(Home);