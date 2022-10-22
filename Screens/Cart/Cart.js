import {View, Text, StyleSheet} from 'react-native';


function Cart() {
    return (
        <View style={styles.container}>
            <Text>This is the Cart Page</Text>
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})
