import { View, TextInput, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function FormInput({children, value, updateValue }) {
    
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputHead}>{children}</Text>
            <TextInput 
            style={styles.input}
            onChangeText={updateValue}
            value={value}
            />
            {/* <Ionicons name="ios-checkmark-done-circle" size={24} color="black" /> */}
        </View>
    )
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        // borderBottomWidth: 2,
        // borderBottomColor: 'black',
        marginBottom: 20
    },
    inputHead: {
        // backgroundColor: 'red'
    },
    input: {
        padding: 10,
        // backgroundColor: 'green',
        borderBottomWidth: 2,
        borderBottomColor: 'black'

    }

})