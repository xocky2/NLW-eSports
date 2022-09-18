import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View, Image, FlatList,Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { GameParams } from '../../@types/navigation';

import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';


export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function hendleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.0.5:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={hendleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}

            />
          </TouchableOpacity>
          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar"
        />
        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard 
            data={duos[0]}
            onConnect ={() => {}}
            />
          )}
          horizontal
          style ={styles.containerList}
          contentContainerStyle ={[ duos.length > 0 ?  styles.contentList:styles.emptyListContent]}
          showsHorizontalScrollIndicator= {false}
          ListEmptyComponent={ ()=> (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para esse jogo ainda
            </Text>
          )}

        />
      </SafeAreaView>
    </Background>
  );
}