import React from 'react'
import { View, FlatList } from 'react-native'
import { GuildProps } from '../../components/Guild'
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './styles'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }:Props) {

  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '2',
      name: 'Rumo ao topo',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '3',
      name: 'Rumo ao topo',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '4',
      name: 'Rumo ao topo',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '5',
      name: 'Rumo ao topo',
      icon: 'imagem.png',
      owner: true
    },
    {
      id: '6',
      name: 'Rumo ao topo',
      icon: 'imagem.png',
      owner: true
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelected(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 60}}
      />
    </View>
  )
}
