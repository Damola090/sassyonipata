import { View, Text, ScrollView, StyleSheet} from 'react-native';

import Banner from '../Banner';
import CategoryList from '../CategoryList';
import SearchBar from '../SearchBar';

function Home() {
    return (
    <View
        style={styles.mainContainer}
        >
            <SearchBar />
            <Banner />
            <CategoryList title="Categories" />
            <CategoryList title="Collections" />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: 'black',
        alignItems: 'center',
        // marginTop: 35,
    }
})