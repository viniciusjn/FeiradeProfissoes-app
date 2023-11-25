import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Avatar, Button, Card, Text, IconButton, MD3Colors } from 'react-native-paper';

const HomeView = ({ navigation }) => {

    return (
        <View>
            <Card style={Styles.card}>
                <Card.Cover source={{ uri: 'https://picsum.photos/id/20/3670/2462' }} />
                <Card.Title title="Feira de Profissões" subtitle="Aplicativo móvel que abrange varias cursos de faculdade" titleStyle={{ fontSize: 25, fontWeight:"bold" }}/>
                <Card.Content>
                    {/* <Text variant="titleLarge">Conect Life</Text>
                    <Text variant="bodyMedium">Card content</Text> */}
                </Card.Content>
            </Card>
            <View style={Styles.icons}>
                <View style={Styles.cardIcons}>
                    <IconButton
                        icon="account-circle"
                        iconColor={MD3Colors.primary50}
                        size={70}
                        onPress={() => navigation.navigate('LoginView')}
                    />
                    <Text variant="bodyLarge">Login</Text>
                </View>
                <View style={Styles.cardIcons}>
                    <IconButton
                        icon="account-multiple-plus"
                        iconColor={MD3Colors.primary50}
                        size={70}
                        onPress={() => navigation.navigate('CadastroView')}
                    />
                    <Text variant="bodyLarge">Cadastre-se</Text>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {
        fontSize: 28,
        alignSelf: "center",
        marginTop: 80
    },
    button: {
        backgroundColor: "gray",
        color: "white",
        padding: 15,
        alignSelf: "center",
        marginTop: 40,
        width: 120,
        alignItems: "center"
    },
    icons: {
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginTop: 40
    },
    card: {
        
    },
    cardIcons: {
        justifyContent: "space-evenly",
        alignItems: "center",
    }
})

export default HomeView
