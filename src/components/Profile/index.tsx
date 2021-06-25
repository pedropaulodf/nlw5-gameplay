import React from 'react'
import { View, Text, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles'
import { Avatar } from '../Avatar'
import { useAuth } from '../../hooks/auth';

export function Profile() {

  const { user, signOut } = useAuth();
  
  // const textos = [
  //   "Hoje é dia de conquista",
  //   "Hoje a vitória será sua!",
  //   "Hoje GG não escapa",
  //   "Hoje é dia de ganhar"
  // ];
  // const randomIndex = Math.floor(Math.random() * 4);
  
  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => signOut()
      }
    ])
  }

  return (
    <View style={styles.container}>

      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar}/>
      </RectButton>

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
