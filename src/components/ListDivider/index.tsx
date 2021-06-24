import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

type Props = {
  isCentered?: boolean
}

export function ListDivider({ isCentered }:Props) {
  return (
    <View 
      style={[styles.container, 
        isCentered ? {
          width: '72%',
          marginVertical: 10,
          // marginTop: 20,
          // marginBottom: 20,
        } : {
          width: '76%',
          marginTop: -1,
          marginBottom: 30
        }
      ]} 
    />
  )
}
