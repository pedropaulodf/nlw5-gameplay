import React, { useState, useCallback } from 'react'
import { View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Load } from '../../components/Load';

import { styles } from './styles';

export function Home() {
  
  const navigation = useNavigation();

  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected:AppointmentProps){
    navigation.navigate('AppointmentDetails', {guildSelected});
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if(category){
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load/> : 
        <View style={styles.content}>
          <ListHeader 
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />
          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Appointment 
                data={item} 
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 60}}
          />
        </View>
}

    </View>
  )
}
