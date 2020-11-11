import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  button: {
    width: '200@ms',
    height: '40@ms',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: '16@ms'
  }
})

export default CustomButton
