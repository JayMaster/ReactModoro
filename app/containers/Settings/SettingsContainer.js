import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/authentication'
import { showFlashNotification } from '~/redux/flashNotification'

class SettingsContainer extends Component {
  static propTypes = {}

  /*
  in this case, using Redux wouldn't make a lot of sense, since
  the settings are saved in firebase and apart from this file,
  nowhere else in the app
  */
  state = {
    timerDuration: 20,
    restDuration: 5,
  }

  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  
  handleTimerComplete = () => {
    this.props.dispatch(showFlashNotification({text: 'Duration Saved!'}))
  }
  
  handleRestComplete = () => {
    console.log('Finished Sliding Rest Timer')
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

export default connect()(SettingsContainer)
