import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { ReactModoroNavbar, Close } from '~/components'
import { colors, fontSizes } from '~/styles'
import Slider from 'react-native-slider'

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }
  static PropTypes = {
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired,
    onTimerChange: PropTypes.func.isRequired,
    onRestChange: PropTypes.func.isRequired,
    onRestComplete: PropTypes.func.isRequired,
    onTimerComplete: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  state = {}  
  
  render () {
    return (
    <View style = {styles.container}>
      <ReactModoroNavbar
        title = 'Settings'
        leftButton = {<Close onPress={this.props.onBack}/>}
      />
      <View style = {styles.sliderContainer}>
        <Text style = {styles.titleText}>Timer Duration</Text>
        <Text style = {styles.valueText}>{this.props.timerDuration}</Text>
        <Text style = {styles.minutes}>{this.props.timerDuration === 1 ? 'Minute' : 'Minutes'}</Text>
        <Slider 
          minimumValue={1}
          maximumValue={60}
          onSlidingComplete={this.props.onTimerComplete}
          thumbTintColor = {colors.border}
          step={1}
          minimumTrackTintColor={colors.blue}
          value = {this.props.timerDuration}
          onValueChange={this.props.onTimerChange}
        />
      </View>
      <View style = {styles.sliderContainer}>
        <Text style = {styles.titleText}>Rest Duration</Text>
        <Text style = {styles.valueText}>{this.props.restDuration}</Text>
        <Text style = {styles.minutes}>{this.props.restDuration === 1 ? 'Minute' : 'Minutes'}</Text>
        <Slider 
          minimumValue={1}
          maximumValue={60}
          onSlidingComplete={this.props.onRestComplete}
          thumbTintColor = {colors.border}
          step={1}
          minimumTrackTintColor={colors.blue}
          value = {this.props.restDuration}
          onValueChange={this.props.onRestChange}
        />
      </View>
      <TouchableOpacity onPress = {this.props.onLogout} style= {styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white
	},
  sliderContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  valueText: {
    fontSize: 50,
    color: colors.blue,
    textAlign: 'center',
    padding: 15
  },
  minutes: {
    color: colors.secondary,
    textAlign: 'center'
  },
  logout: {
    backgroundColor: colors.blue,
    alignItems: 'stretch',
    borderRadius: 25,
    margin: 25,
    padding: 10
  },
  logoutText: {
    color: colors.white,
    fontSize: fontSizes.secondary,
    textAlign: 'center'
  }
})
