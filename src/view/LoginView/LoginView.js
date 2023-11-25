import { View, StyleSheet } from "react-native"
import { Text, TextInput, Card, Button } from 'react-native-paper';
import { getContext } from "../../components/AuthContext/AuthContext";
import { useState } from "react";


const LoginView = ({ navigation }) => {

    const [form , setForm] = useState({login:'', senha:''})
    const [error, setError] = useState(false)

    const log = getContext().login

    const logando = async () => {
        const response = await log(form.login, form.senha)
        if (response) {
            navigation.navigate('DashboardView')
        }else {
            setError(true)
            setForm({login: '', senha: ''})
        }
    }

    return (
        <View style={Styles.container}>

            <Card >
                <View style={Styles.card}>
                    <Text variant="headlineLarge">Login</Text>
                    <TextInput
                        label="Login"
                        value={form.login}
                        mode="outlined"
                        onChangeText={text => setForm({...form, login: text})}
                    />

                    <Text variant="headlineLarge">Senha</Text>
                    <TextInput
                        label="Digite sua senha"
                        value={form.senha}
                        mode="outlined"
                        secureTextEntry
                        right={<TextInput.Icon icon="eye" />}
                        onChangeText={text => setForm({...form, senha: text})}
                    />

                    <Button mode="text" style={Styles.ButtonSenha} onPress={() => navigation.navigate('ResetPasswordView')}>Esqueceu sua senha?</Button>

                    { error &&
                    <Text style={Styles.mensage}> Login ou senha incorreta!</Text>
                    }

                    <Button icon="account-circle" mode="contained" style={Styles.button} onPress={logando}>
                        Logar
                    </Button>
                </View>
            </Card>
        </View>
    )
}

const Styles = StyleSheet.create({
    button: {
        marginTop: 25,
    },
    card: {
        margin: 25,
        // padding: 15,
        display: "center",
    },
    container: {
        marginTop: 100,
        padding: 20
    },
    mensage: {
        color: "red",
        textAlign: "center",
        marginTop: 15,
        fontWeight: "bold"
    },
    ButtonSenha: {
        textAlign: "right",
        marginTop: 10,
        textDecorationLine: 'underline',
    }
})

export default LoginView
