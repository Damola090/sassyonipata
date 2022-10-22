import { View, Text, Pressable, StyleSheet } from 'react-native';

function Button({ children, style, icon, mode, whenPressed }) {

    return (
        <Pressable
            onPress={whenPressed}
            style={({ pressed }) =>
                pressed
                    ? [styles.ButtonOuterContainer, styles.pressed]
                    : styles.ButtonOuterContainer
            }
            android_ripple={{ color : 'blue' }}

        >
            <View style={[styles.ButtonInnerContainer, style]}>
                <View style={[styles.Button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.ButtonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Button;

const styles = StyleSheet.create({
    ButtonOuterContainer: {
        width: 350,
        borderRadius: 20,
        margin: 4,
        overflow: 'hidden'

    },
    ButtonInnerContainer: {
        padding: 15,
        overflow: 'hidden'
    },
    Button: {


    },
    flat: {
        backgroundColor: 'transparent'
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        textAlign: 'center'

    },
    flatText: {
        color: 'white',
        textAlign : 'center'

    },
    pressed: {
        opacity: 0.7
    }



})