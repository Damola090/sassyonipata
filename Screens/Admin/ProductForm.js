import {View, Text, StyleSheet} from 'react-native';

function ProductForm() {
    return (
        <View style={styles.Container}>
            <Text>THis is the login page</Text>
        </View>
    )
}

export default ProductForm;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'red'
    }

})