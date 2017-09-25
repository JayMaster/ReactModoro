import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/authentication'
import { showFlashNotification } from '~/redux/flashNotification'
import { handleAndUpdateTimer, handleAndUpdateRest } from '~/redux/settings'


class SettingsContainer extends Component {
  static propTypes = {
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired
  }

  state = {
    timerDuration: this.props.timerDuration,
    restDuration: this.props.restDuration,
  }

  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  
  handleTimerComplete = () => {
    this.props.dispatch(handleAndUpdateTimer(this.state.timerDuration)) // this returns a promise
      .then(() => {this.props.dispatch(showFlashNotification({text: 'Duration Saved!'}))})
      .catch(() => {this.props.dispatch(showFlashNotification({text: 'Error updating Timer Duration!'}))})
  }
  
  handleRestComplete = () => {
    this.props.dispatch(handleAndUpdateRest(this.state.restDuration))
      .then(() => {this.props.dispatch(showFlashNotification({text: 'Duration Saved!'}))})
      .catch(() => {this.props.dispatch(showFlashNotification({text: 'Error updating Timer Duration!'}))})
}

  handleLogout = () => {
    this.props.dispatch(handleUnauth()) // handleUnauth is in authentication redcuer
  }

  goBack = () => {
  	this.props.navigation.dispatch({ type: 'GO_BACK'})
  }

  render () {
    return (
      <Settings
        onBack={this.goBack}
        onLogout = {this.handleLogout}
        onRestComplete = {this.handleRestComplete}
        onTimerComplete = {this.handleTimerComplete}
        onTimerChange = {this.handleTimerChange}
        onRestChange = {this.handleRestChange}
        timerDuration = {this.state.timerDuration}
        restDuration = {this.state.restDuration}
      />
    )
  }
}

function mapStateToProps ({settings}) {
  return {
    timerDuration: settings.timerDuration,
    restDuration: settings.restDuration
  }
}

export default connect(mapStateToProps)(SettingsContainer)
