import { View, Text, StyleSheet,  } from 'react-native'
import icon from './img/icon.png'
import { Avatar } from 'react-native-paper';

const Navbar = ({titulo}) => {

    return (
        <View style={Styles.container}>
            <Avatar.Image size={48} source={icon} />
            <Text style={Styles.text}>{titulo}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {
        fontSize: 27,
        alignSelf: "center",
        fontWeight: "bold",
        letterSpacing: 2,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    }
})

export default Navbar