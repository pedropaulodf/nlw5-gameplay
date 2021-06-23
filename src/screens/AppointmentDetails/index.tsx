import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

import { View, Text, ImageBackground, FlatList } from 'react-native'

import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Header } from '../../components/Header'
import { Member } from '../../components/Member'

import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function AppointmentDetails() {

  const members = [
    {
      id: '1',
      username: 'Pedro Paulo',
      avatar_url: 'https://github.com/pedropaulodf.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Ana Pereira',
      avatar_url: 'https://github.com/pedropaulodf.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Peter Parker',
      avatar_url: 'https://github.com/pedropaulodf.png',
      status: 'online'
    },
    {
      id: '4',
      username: 'Peter Quill',
      avatar_url: 'https://github.com/pedropaulodf.png',
      status: 'online'
    }
  ]

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
        <BorderlessButton>
          <Fontisto 
            name="share"
            size={20}
            color={theme.colors.primary}
          />
        </BorderlessButton>
      }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
          É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>

      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 3"
      />
      
      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member 
            data={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>


    </Background>
  )
}
