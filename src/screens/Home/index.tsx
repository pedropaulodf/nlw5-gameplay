import React, { useState } from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Yeah, boy',
        icon: null,
        owner: false
      },
      category: '2',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Rumo ao topo',
        icon: null,
        owner: true
      },
      category: '3',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Bora queimar tudo',
        icon: null,
        owner: true
      },
      category: '4',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Rumo ao topo',
        icon: null,
        owner: true
      },
      category: '3',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '6',
      guild: {
        id: '1',
        name: 'Bora queimar tudo',
        icon: null,
        owner: true
      },
      category: '4',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '7',
      guild: {
        id: '1',
        name: 'Bora queimar tudo',
        icon: null,
        owner: true
      },
      category: '4',
      date: '22/06 às 20:45h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ];


  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

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

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />
        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({item}) => (<Appointment 
            data={item} 
            onPress={handleAppointmentDetails}
            />)}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          
        />
      </View>

    </View>
  )
}
