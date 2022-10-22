import {View, Text, TextInput, StyleSheet} from 'react-native';

import SearchBarIcon from '../ui/SearchBarIcon';

import {Ionicons} from '@expo/vector-icons';

function SearchBar() {

    return (
        <View style={styles.SearchContainer}>
            <SearchBarIcon name="search-sharp" size={24} color="black" />
            <TextInput 
            style={styles.input}
            placeholder="Search any Items....."
            // onChangeText={}
            // value={}            
            />
            <SearchBarIcon name="md-filter-sharp" size={24} color="black" />
        </View>
    )

}

export default SearchBar;


const styles = StyleSheet.create({
    SearchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '100%',
        // backgroundColor: 'red',
        borderRadius: 15
    },
    input: {
        flex: 1,
        // marginHorizontal: 10

    }
    
})