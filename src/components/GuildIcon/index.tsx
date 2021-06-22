import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'

export function GuildIcon() {
  
const uri = 'https://yt3.ggpht.com/ytc/AAUvwngHu0mU1UvMQPWZZM1mFsTJTwZH_EoymRvmG23peQ=s900-c-k-c0x00ffffff-no-rj';

  return (
    <Image
      source={{uri}}
      style={styles.image} 
      resizeMode="cover"
    
    />
  )
}
