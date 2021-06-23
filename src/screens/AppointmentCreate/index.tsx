import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { View, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'

import { Background } from '../../components/Background'
import { ModalView } from '../../components/ModalView'
import { CategorySelect } from '../../components/CategorySelect'
import { Header } from '../../components/Header'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Guilds } from '../Guilds'

import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { GuildProps } from '../../components/Guild'

export function AppointmentCreate() {

  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <ScrollView>
        <Background>
          <Header 
            title="Agendar partida"
          />

          <Text style={[styles.label, {marginLeft: 24, marginTop: 22, marginBottom: 14}]}>
            Categoria
          </Text>

          <CategorySelect 
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon 
                    ? <GuildIcon /> 
                    : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>
                
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>

            <View style={[styles.field]}>
              <View>
                <Text style={[styles.label, {marginBottom: 12}]}>
                  Dia e mês
                </Text>
                
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, {marginBottom: 12}]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, {marginBottom: 12}]}>
              <Text style={styles.label}>
                Descrição
              </Text>
              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar"/>
            </View>

          </View>
        </Background>
      </ScrollView>
      
      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </ModalView>
      
    </KeyboardAvoidingView>
  )
}
