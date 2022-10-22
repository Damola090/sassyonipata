import { View, Text, Pressable, StyleSheet} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function SearchBarIcon({ name, size, color, whenPressed }) {

    return (
        <View style={styles.OuterIconContainer}>

            <Pressable
            onPress={whenPressed}
            style={({ pressed }) => 
                        pressed
                            ? [styles.innerIconContainer, styles.pressed]
                            : styles.innerIconContainer
        
        }
            >
            <Ionicons name={name} size={size} color={color} />
                
            </Pressable>
        </View>

    )
}

export default SearchBarIcon;


const styles = StyleSheet.create({
    OuterIconContainer: {

    },
    innerIconContainer: {
       
    },
    pressed: {
        opacity: 0.7
        
    }

})