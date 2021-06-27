import React, { useState, useEffect, useRef } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { View, Text, ImageBackground, FlatList, Alert, Share, Platform } from 'react-native'
import * as Linking from 'expo-linking'
import Toast from 'react-native-easy-toast';

import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Header } from '../../components/Header'
import { Member, MemberProps } from '../../components/Member'
import { Load } from '../../components/Load'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { AppointmentProps } from '../../components/Appointment'
import { api } from '../../services/api'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'

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

  const toastRef = useRef<any>();

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);

  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
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

  async function handleDeleteAppoitment(guildId: string) {

      try {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
        
        let indexAppointmentStorage = storage.findIndex(x => x.id === guildId );
        storage.splice(indexAppointmentStorage, 1);
        
        return await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify(storage))
        .then(() => {
          toastRef.current.show('Agendamento excluído', 2000);
          navigation.navigate('Home');
        })
        .catch((error) => {
          toastRef.current.show('Erro ao excluir!', 2000);
          return false;
        });
  
      } catch (error) {
        return false;
      }

  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
            <BorderlessButton onPress={() => handleDeleteAppoitment(guildSelected.id)}>
              <Fontisto 
                name="trash"
                size={20}
                color={theme.colors.heading}
              />
            </BorderlessButton>
            {guildSelected.guild.owner && 
            <BorderlessButton onPress={handleShareInvitation}  style={{marginLeft: 20}}>
              <Fontisto 
                name="share"
                size={20}
                color={theme.colors.primary}
              />
            </BorderlessButton>}
          </View>
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

      <Toast 
        ref={toastRef} 
        position='top' 
        style={{backgroundColor: theme.colors.primary}}
        textStyle={{color: theme.colors.heading}}
      />
    </Background>
  )
}
