import React, { useState, useEffect } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { View, Text, ImageBackground, FlatList, Alert, Share, Platform } from 'react-native'
import * as Linking from 'expo-linking'

import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Header } from '../../components/Header'
import { Member, MemberProps } from '../../components/Member'
import { Load } from '../../components/Load'

import BannerImg from '../../assets/banner.png'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { AppointmentProps } from '../../components/Appointment'
import { api } from '../../services/api'
import { LinearGradient } from 'expo-linear-gradient'

type Params = {
  guildSelected: AppointmentProps;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

const { CDN_IMAGE } = process.env;

export function AppointmentDetails() {


  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);

  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const uri = `${CDN_IMAGE}/icons/${guildSelected.guild.id}/${guildSelected.guild.icon}.png`;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

      setWidget(response.data);

    } catch (error) {
      Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation(){
    const message = Platform.OS === 'ios' 
    ? `Junte-se a ${guildSelected.guild.name}`
    : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    })

  }

  function handleOpenGuild(){
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          guildSelected.guild.owner && 
          <BorderlessButton onPress={handleShareInvitation} >
            <Fontisto 
              name="share"
              size={20}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      
        <ImageBackground
          source={{uri}}
          style={styles.banner}
        >
          <LinearGradient
            style={{position:'absolute',width:'100%',height:'100%'}}
            colors={['rgba(0,0,0,0.00)','rgba(0,0,0,0.00)', 'rgba(0,0,0,0.80)']}
          >
            <View style={styles.bannerContent}>
              <Text style={styles.title}>
                { guildSelected.guild.name }
              </Text>

              <Text style={styles.subtitle}>
                { guildSelected.description }
              </Text>
            </View>

          </LinearGradient>
        </ImageBackground>
      {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          
          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Member 
                data={item}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      }

      {
        guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon 
            title="Entrar na partida" 
            onPress={handleOpenGuild}
          />
        </View>
      }

    </Background>
  )
}
