import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, Pressable, PressableProps } from 'react-native'

import { styles } from './styles'

type Props = PressableProps & {
  title: String;
  buttonEnable?: boolean;
}

export function Button({title, buttonEnable, ...rest} : Props) {
  return (
    <Pressable 
      style={[styles.container, !buttonEnable ? {opacity: 0.4} : {}]} 
      disabled={!buttonEnable}
      {...rest}
    >
      <Text style={styles.title} >
        {title}
      </Text>
    </Pressable>
  )
}
