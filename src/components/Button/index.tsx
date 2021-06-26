import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text } from 'react-native'

import { styles } from './styles'

type Props = RectButtonProps & {
  title: String;
  buttonEnable?: boolean;
}

export function Button({title, buttonEnable, ...rest} : Props) {
  return (
    <RectButton 
      style={[styles.container, !buttonEnable ? {opacity: 0.4} : {}]} 
      enabled={buttonEnable}
      {...rest}
    >
      <Text style={styles.title} >
        {title}
      </Text>
    </RectButton>
  )
}
