import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/auth';

export function Profile() {

  const { user } = useAuth();
  
  // const textos = [
  //   "Hoje é dia de conquista",
  //   "Hoje a vitória será sua!",
  //   "Hoje GG não escapa",
  //   "Hoje é dia de ganhar"
  // ];
  // const randomIndex = Math.floor(Math.random() * 4);
  
  return (
    <View style={styles.container}>

      <Avatar urlImage={user.avatar}/>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username} numberOfLines={1}>
            { user.firstName }
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de conquista
        </Text>
      </View>

    </View>
  )
}
