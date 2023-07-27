import { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CatsContext from '../../contexts/cat/CatContext';
import { CatCard } from './components/CatCard';

export const Cats = () => {
    const { catsState, getCats } = useContext(CatsContext);
    const { cats } = catsState;

    useEffect(() => {
      getCats();
    }, []);

    return (
      <View style={{ ...styles.listContainer }}>
        <FlatList
          data={cats}
          keyExtractor={(cat) => cat.id}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          ListHeaderComponent={(
            <Text>
              Catbreeds
            </Text>
          )}
          renderItem={({item}) => <CatCard cat={item} />}
        >

        </FlatList>
      </View>
    )
};

const styles = StyleSheet.create({
  listContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
  }
});