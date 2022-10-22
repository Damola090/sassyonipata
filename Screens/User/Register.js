import {View, Text, StyleSheet} from 'react-native';

function Register() {
    return (
        <View style={styles.Container}>
            <Text>THis is the Register page</Text>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'yellow'
    }

})