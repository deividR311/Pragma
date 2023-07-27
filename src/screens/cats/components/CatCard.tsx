import { StyleSheet, View, Text, Image } from 'react-native';
import { Dimensions } from "react-native";
import { Cat } from '../../../models/Cat';

var width = Dimensions.get('window').width;

interface Props {
    cat : Cat;
}

export const CatCard = ({ cat } : Props) => {
    const { name, origin, intelligence } = cat;

  return (
    <View style={{
        ...styles.cardContainer
    }}>
        <Text style={styles.cardText}>{ name }</Text>
        <View style={styles.imgContainer}>
            <Image style={styles.image} source={require('../../../assets/images/defaultCat.jpg')} />
        </View>
        <View>
            <Text style={styles.cardText}>Origin: {origin} - Intelligence: {intelligence}</Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#E8E8E8',
        width: width - 10,
        height: 300,
        marginBottom: 25,
        borderRadius: 5
    },

    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgContainer: {
        backgroundColor : 'blue',
        height: '85%'
    },

    cardText: {
        fontWeight: 'bold',
        color: 'black'
    }
});
