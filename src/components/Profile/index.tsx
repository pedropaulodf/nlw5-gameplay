import React, { useState } from 'react'
import { View, Text, Alert, Pressable } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { ModalView } from '../../components/ModalView'
import { Avatar } from '../Avatar'

import { useAuth } from '../../hooks/auth';

import { styles } from './styles'
import { Button } from '../Button';

export function Profile() {

  const { user, signOut } = useAuth();
  
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

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

  function handleOpenLogoutModal(){
    setOpenLogoutModal(true);
  }

  function handleCloseModal(){
    setOpenLogoutModal(false);
  }

  return (
    <View style={styles.container}>

      <RectButton onPress={handleOpenLogoutModal}>
        <Avatar urlImage={user.avatar}/>
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username} numberOfLines={1} ellipsizeMode='tail'>
            { user.firstName }
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de conquista
        </Text>
      </View>

      <ModalView visible={openLogoutModal} closeModal={handleCloseModal} modalType="logout">
        <Text style={styles.textMessageLogout}>Deseja sair do Game<Text style={styles.textPlay}>Play</Text>?</Text>
        <View style={styles.groupButtons}>
          <Button 
            title="Não"
            onPress={handleCloseModal}
            buttonEnable={true}
            style={[styles.buttonNo, styles.button, {height: 50}]}
          />
          <Button 
            title="Sim"
            onPress={()=>signOut()}
            buttonEnable={true}
            style={[styles.buttonYes, styles.button, {height: 50}]}
          />
        </View>
      </ModalView>

    </View>
  )
}
