import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native'

export default function Magnus (props) {
  return (
    <View>
      <Text>
        Magnus
      </Text>
      <Button
      	onPress= {() => props.navigation.dispatch({ type: 'goToVittel' })}
      	title= 'goToVittel'
      />
    </View>
  )
}

const styles = StyleSheet.create({

})
