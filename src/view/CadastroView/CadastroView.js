
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Button, TextInput, Dialog } from 'react-native-paper';
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { getContext } from "../../components/AuthContext/AuthContext";
import { buscaCep, saveAluno } from "../../lib/UtilService";

const CadastroView = ({ navigation }) => {

    const [error, setError] = useState(false)

    const [user, setUser] = useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        endereco: '',
        bairro: '',
        numero: '',
        cidade: '',
        idade: '',
        instituicao: '',
    }
    )

    const [sucesso, setSucesso] = useState(false)

    const buscarCep = () => {

        buscaCep(user.cep).then((json) => {
            setUser({ ...user, endereco: json.logradouro, bairro: json.bairro, cidade: json.localidade + ' - ' + json.uf })
        })
    }

    const saveUser = () => {

        if (!user.nome || !user.email || !user.senha || !user.cep || !user.endereco || !user.bairro || !user.numero || !user.cidade || !user.idade || !user.instituicao) {
            console.error("Preencha todos os campos");
            setError(true)
            return;
        }

        console.log({ ...user, perfil: 'ALUNO' })
        console.log(JSON.stringify({ ...user, perfil: 'ALUNO' }))

        setSucesso(saveAluno(user))
    }



    return (
        <ScrollView keyboardShouldPersistTaps="always">
            <View style={Styles.container}>
                <Navbar titulo="CADASTRO" />
                <TextInput style={Styles.input}
                    label="Nome"
                    returnKeyType="next"
                    value={user.nome}
                    onChangeText={txt => setUser({ ...user, nome: txt })}
                />

                <TextInput style={Styles.input}
                    label="Email"
                    returnKeyType="next"
                    value={user.email}
                    onChangeText={txt => setUser({ ...user, email: txt })}
                />

                <TextInput style={Styles.input}
                    label="Senha"
                    returnKeyType="done"
                    value={user.senha}
                    onChangeText={txt => setUser({ ...user, senha: txt })}
                    secureTextEntry
                />

                <TextInput style={Styles.input}
                    label="CEP"
                    returnKeyType="next"
                    value={user.cep}
                    onChangeText={txt => setUser({ ...user, cep: txt })}
                    onBlur={buscarCep}
                />

                <TextInput style={Styles.input}
                    label="Endereço"
                    returnKeyType="next"
                    value={user.endereco}
                    onChangeText={txt => setUser({ ...user, endereco: txt })}
                />

                <TextInput style={Styles.input}
                    label="Bairro"
                    returnKeyType="next"
                    value={user.bairro}
                    onChangeText={txt => setUser({ ...user, bairro: txt })}
                />

                <TextInput style={Styles.input}
                    label="Numero"
                    returnKeyType="next"
                    value={user.numero}
                    onChangeText={txt => setUser({ ...user, numero: txt })}
                />

                <TextInput style={Styles.input}
                    label="Cidade"
                    returnKeyType="next"
                    value={user.cidade}
                    onChangeText={txt => setUser({ ...user, cidade: txt })}
                />

                <TextInput style={Styles.input}
                    label="Idade"
                    returnKeyType="next"
                    value={user.idade}
                    onChangeText={txt => setUser({ ...user, idade: txt })}
                />

                <TextInput style={Styles.input}
                    label="Instituição"
                    returnKeyType="next"
                    value={user.instituicao}
                    onChangeText={txt => setUser({ ...user, instituicao: txt })}
                />

                {error &&
                    <Text style={Styles.mensage}> Preencha Todos os dados!</Text>
                }

                <Button mode="contained" style={Styles.button} onPress={saveUser}>
                    Sign Up
                </Button>

                <Dialog visible={sucesso} onDismiss={() => setSucesso(false)}>
                    <Dialog.Icon icon="account-check" />
                    <Dialog.Title style={Styles.title}>Cadastro</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Usuario salvo com sucesso!</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => navigation.navigate('HomeView')}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        marginTop: 13,
    },
    button: {
        marginTop: 24,
    },
    title: {
        textAlign: 'center',
    },
    mensage: {
        color: "red",
        textAlign: "center",
        marginTop: 15,
        fontWeight: "bold"
    }
})


export default CadastroView