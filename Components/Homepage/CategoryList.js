import { View, Text, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';

import SearchBarIcon from '../ui/SearchBarIcon';

function CategoryList({ title }) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.Heading}>
                <Text style={styles.HeadingText}>{title}</Text>
                <SearchBarIcon name="arrow-forward" size={24} color="black" />
            </View>
            <ScrollView
                horizontal={true}
                style={styles.ScrollViewlayout}>

                <View style={styles.CategoryItem}>
                    <ImageBackground
                        style={styles.image}
                        source={require('../../assets/image/pexels-godisable-jacob-923195.jpg')}

                    >
                        <View style={styles.TextContainer}>
                            <Text style={styles.innertext}>New In</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.CategoryItem}>
                    <ImageBackground
                        style={styles.image}
                        source={require('../../assets/image/pexels-godisable-jacob-923195.jpg')}

                    >
                        <View style={styles.TextContainer}>
                            <Text style={styles.innertext}>New In</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.CategoryItem}>
                    <ImageBackground
                        style={styles.image}
                        source={require('../../assets/image/pexels-godisable-jacob-923195.jpg')}

                    >
                        <View style={styles.TextContainer}>
                            <Text style={styles.innertext}>New In</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.CategoryItem}>
                    <ImageBackground
                        style={styles.image}
                        source={require('../../assets/image/pexels-godisable-jacob-923195.jpg')}

                    >
                        <View style={styles.TextContainer}>
                            <Text style={styles.innertext}>New In</Text>
                        </View>
                    </ImageBackground>
                </View>

            </ScrollView>
        </View>
    )
}

export default CategoryList;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 0.35,
        width: '100%',
    },
    Heading: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    HeadingText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    },
    ScrollViewlayout: {
        flex: 1,
       
    },
    CategoryItem: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'blue',
        overflow: 'hidden',
        width: 200,
        marginRight: 12

    },
    image: {
        width: '100%',
        height: '100%',
        // marginHorizontal: 10,


    },
    TextContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',

    },
    innertext: {
        marginVertical: 15,
        marginHorizontal: 15,
        fontSize: 20,
        fontWeight: '300',
        color: 'white'
    }
})