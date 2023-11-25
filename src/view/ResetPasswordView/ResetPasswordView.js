import { View, StyleSheet } from "react-native"
import { Text, TextInput, Card, Button } from 'react-native-paper';
import { getContext } from "../../components/AuthContext/AuthContext"
import { useState } from "react";


const ResetePasswordView = ({ navigation }) => {


    const [error, setError] = useState(false)
    const [form, setForm] = useState({ id: '', login: '', senha: '', })
    const [sucesso, setSucesso] = useState(false)

    const log = getContext().login

    const savePassword = async () => {
        if (!form.login || !form.senha) {
            console.error("Preencha todos os campos");
            setError(true)
            return;
        }

        console.log({ ...form })
        console.log(JSON.stringify({ ...form }))
        const response = await log(form.id, form.login, form.senha)
        if (response) {
            const resp = fetch('http://localhost:3000/usuario/${form.id}',
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    "body": JSON.stringify({ ...form }),
                }).then((result) => {
                    setSucesso(result.status == 200)
                }).catch((error) => {
                    console.log("Erro ao atualuzar a senha", error)
                })
        }
    }


    return (
        <View style={Styles.container}>

            <Card >
                <View style={Styles.card}>
                    <Text style={Styles.txt} variant="headlineMedium">Login</Text>
                    <TextInput
                        label="Login"
                        value={form.login}
                        mode="outlined"
                        onChangeText={text => setForm({ ...form, login: text })}
                    />
                    <Text style={Styles.txt} variant="headlineMedium">Digite sua nova Senha:</Text>
                    <TextInput
                        label="Senha"
                        value={form.senha}
                        mode="outlined"
                        onChangeText={text => setForm({ ...form, senha: text })}
                    />

                    {error &&
                        <Text style={Styles.mensage}> Preencha todos os campos!</Text>
                    }

                    <Button icon="account-circle" mode="contained" style={Styles.button} onPress={savePassword}>
                        Alterar Senha
                    </Button>
                </View>
            </Card>
        </View>
    )

}

const Styles = StyleSheet.create({
    card: {
        margin: 25,

        display: "center",
    },
    container: {
        marginTop: 100,
        padding: 20
    },
    txt: {
        padding: 10,
    },
    button: {
        marginTop: 25,
    },
    mensage: {
        color: "red",
        textAlign: "center",
        marginTop: 15,
        fontWeight: "bold"
    }
})

export default ResetePasswordView