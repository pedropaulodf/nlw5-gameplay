import React, { useState, useRef, useEffect } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { View, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-easy-toast';

import { Background } from '../../components/Background'
import { ModalView } from '../../components/ModalView'
import { CategorySelect } from '../../components/CategorySelect'
import { Header } from '../../components/Header'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Guilds } from '../Guilds'

import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { GuildProps } from '../../components/Guild'
import { useNavigation } from '@react-navigation/core';

export function AppointmentCreate() {

  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [buttonSaveEnabled, setButtonSaveEnabled] = useState(false);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();
  const toastRef = useRef<any>();

  function handleChangeDay(value: string){

    if (value.length === 2 && value === '00') {
      toastRef.current.show('Dia inválido! Vai de 1 até 31', 2000);
      setDay('');
      return;
    }

    if(parseInt(value) > 31){
      toastRef.current.show('Dia inválido! Vai de 1 até 31', 2000);
      setDay('');
      return;
    }
    
    if(value === ''){
      toastRef.current.show('Dia em branco', 2000);
      setDay('');
      return;
    }
    
    setDay(value);
  }

  function handleChangeMonth(value: string){

    if (value.length === 2 && value === '00') {
      toastRef.current.show('Mês inválido! Vai de 1 até 12', 2000);
      setMonth('');
      return;
    }

    if(parseInt(value) > 12){
      toastRef.current.show('Mês inválido! Vai de 1 até 12', 2000);
      setMonth('');
      return;
    }
    
    if(value === ''){
      toastRef.current.show('Mês em branco', 2000);
      setMonth('');
      return;
    }

    setMonth(value);
  }

  function handleChangeHour(value: string){

    if(parseInt(value) > 23){
      toastRef.current.show('Hora inválida! Vai de 00 até 23', 2000);
      setHour('');
      return;
    }

    if(value === ''){
      toastRef.current.show('Hora em branco', 2000);
      setHour('');
      return;
    }

    setHour(value);
  }

  function handleChangeMinute(value: string){

    if(parseInt(value) > 59){
      toastRef.current.show('Minutos inválidos! Vai de  1 até 59', 2000);
      setMinute('');
      return;
    }

    if(value === ''){
      toastRef.current.show('Minutos em branco', 2000);
      setMinute('');
      return;
    }

    setMinute(value);
  }

  function handleChangeDescription(value: string){

    if(value.length === 0){
      toastRef.current.show('Descrição é obrigatória!', 2000);
      setDescription('');
      return;
    }

    setDescription(value);
  }

  // Função que checa se todos os valores estão corretos e ativa ou desativa o botão
  function checkBlankFormValues(){
    if (day !== '' && month !== '' && hour !== '' && minute !== '' && description !== '' && category !== '' && guild.id !== undefined) {
      setButtonSaveEnabled(true);
      return true;
    }else{
      setButtonSaveEnabled(false);
      return false;
    }
  }

  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }

  function handleCloseModal(){
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
    
  }

  useEffect(() => {
    checkBlankFormValues();
  }, [day, month, hour, minute, description, category, guild])

  async function handleSave(){

    if (!checkBlankFormValues()) {
      toastRef.current.show('Confira o formulário, algo está em branco!', 2000);
      return;
    }

    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <Background>
        <Header 
          title="Agendar partida"
        />

        <ScrollView>
          <Text style={[styles.label, {marginLeft: 24, marginTop: 22, marginBottom: 14}]}>
            Categoria
          </Text>

          <CategorySelect 
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon 
                    ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> 
                    : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={[styles.label, {textAlign: 'center'}]}>
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
                  <SmallInput 
                    maxLength={2}
                    value={day}
                    onChangeText={handleChangeDay}
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput 
                    maxLength={2}
                    value={month}
                    onChangeText={handleChangeMonth}
                  />
                </View>
              </View>

              <View>
                <Text style={[styles.label, {marginBottom: 12}]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput 
                    maxLength={2} 
                    value={hour}
                    onChangeText={handleChangeHour}
                  />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput 
                    maxLength={2} 
                    value={minute}
                    onChangeText={handleChangeMinute}
                  />
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
              onChangeText={handleChangeDescription}
            />

            <View style={styles.footer}>
              <Button 
                title="Agendar"
                onPress={handleSave}
                buttonEnable={buttonSaveEnabled}
              />
            </View>

          </View>
        </ScrollView>
        
        <ModalView visible={openGuildsModal} closeModal={handleCloseModal}>
          <Guilds handleGuildSelected={handleGuildSelect} />
        </ModalView>
      
      </Background>
      
      <Toast 
        ref={toastRef} 
        position='top' 
        style={{backgroundColor: theme.colors.primary}}
        textStyle={{color: theme.colors.heading}}
      />

    </KeyboardAvoidingView>
  )
}
