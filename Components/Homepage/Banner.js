import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function Banner() {
    return (
        <View style={styles.outerContainer}>
            <ImageBackground
                source={require('../../assets/image/pexels-godisable-jacob-923195.jpg')}
                style={styles.banner}
            >

                <Text style={styles.innerText}>Balogun</Text>

            </ImageBackground>
        </View>
    )
}

export default Banner;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 0.4,
        backgroundColor: 'red',
        width: 400,
        borderRadius: 20,
        overflow: 'hidden',
    },
    banner: {
        flex: 1,
        width: '100%',
    },
    innerText: {
        width: '100%'
    }
})