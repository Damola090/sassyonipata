import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import Button from '../ui/Button';
import { MaterialIcons } from '@expo/vector-icons'

function Welcome() {

    return (
        <ImageBackground
            source={require('../../assets/image/pexels-jonaorle-7642480.jpg')}
            resizeMode='cover'
            style={styles.Container}

        >
            <View style={styles.overallScreen}>
                <View style={styles.UpperButton}>
                    <Text style={styles.UpperButtonText}>SIGN IN</Text>
                    <MaterialIcons name='arrow-forward-ios' size={24} color='white' />
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.Head}>
                        <Text style={styles.HeadText}>Ideal Store For Your Shopping</Text>
                    </View>
                    <View style={styles.ButtonContainer}>
                        <Button style={styles.Emailbackground}>SIGN UP WITH EMAIL</Button>
                        <Button style={styles.background} mode='flat'>CONTINUE WITH FACEBOOK</Button>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%'

    },
    overallScreen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'

    },
    UpperButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 50,

    },
    UpperButtonText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white'

    },
    BottomContainer: {
        marginBottom: 60,

    },
    ButtonContainer: {
        alignItems: 'center'


    },
    Head: {
        marginHorizontal: 15,
        marginVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'white',

    },
    HeadText: {
        color: 'white',
        fontSize: 35,
        fontWeight: '500',
        paddingVertical: 10,
        maxWidth: 250,

    },
    Emailbackground: {
        backgroundColor: 'white'

    },
    background: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20
    }
})
