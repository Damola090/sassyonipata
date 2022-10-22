import {View, Text, StyleSheet} from 'react-native';

function UserProfile() {
    return (
        <View style={styles.Container}>
            <Text>THis is the userProfile page</Text>
        </View>
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'blue'
    }

})