import {View, Text, StyleSheet} from 'react-native';


function Products() {
    return (
        <View style={styles.container}>
            <Text>This is the Cart Page</Text>
        </View>
    )
}

export default Products;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    }
})
