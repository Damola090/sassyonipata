import { View, Text, StyleSheet } from 'react-native';
import Button from '../ui/Button';
import FormInput from '../ui/FormInput';

function LoginForm({ title }) {

    return (
        <View style={styles.FormContainer}>
            <View style={styles.headContainer}>
                <Text style={styles.headContainerText}>{title}</Text>
            </View>
            <View style={styles.FormContent}>
                <FormInput>Email</FormInput>
                <FormInput>Password</FormInput>

                <View style={styles.Buttons}>
                    <Button style={styles.SignupBackground} mode='flat'>SIGN IN</Button>
                    <Text style={styles.middleText}>OR</Text>
                    <Button style={styles.FacebookBackground} mode='flat'>SIGN IN WITH FACEBOOK</Button>
                </View>
            </View>
        </View>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    FormContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%'

    },
    headContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    headContainerText: {
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
        width: 300,
        marginHorizontal: 25


    },
    FormContent: {
        flex: 2.5,
        padding: 20

    },
    Buttons: {
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',

    },
    SignupBackground: {
        backgroundColor: 'black',

    },
    middleText: {
        marginVertical: 20

    },
    FacebookBackground: {
        backgroundColor: 'blue'
    }

})