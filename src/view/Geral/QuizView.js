import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"
import { Button, Dialog } from 'react-native-paper';


const QuizView = ()=>{

    const [quiz, setQuiz] = useState({
        sobreVoce: '',
        materiaFacil: '',
        caracteristica: '',
    })

    const [sucesso, setSucesso] = useState(false)

    const saveQuiz = () => {

        if(!quiz.sobreVoce|| !quiz.materiaFacil || !quiz.caracteristica){
            console.error("Preencha todos os campos!");
            return;
        }

        const resp = fetch('http://localhost:3000/quiz',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                "body": JSON.stringify({ ...quiz, perfil: 'QUIZ' }),
            }).then((result) => {
                setSucesso(result.status == 201)
            })
    }

    return(
        <View style={Style.container}>
            <Text style={Style.title}>QUIZ</Text>

            <TextInput
                style={Style.input}
                placeholder="Conte sobre você..."
                returnKeyType="next"
                value={quiz.sobreVoce}
                onChangeText={txt => setQuiz({ ...quiz, sobreVoce: txt })}
            />
            <TextInput
                style={Style.input}
                placeholder="Qual matéria você tem mais facilidade?"
                returnKeyType="next"
                value={quiz.materiaFacil}
                onChangeText={txt => setQuiz({ ...quiz, materiaFacil: txt })}
            />
            <TextInput
                style={Style.input}
                placeholder="Qual sua principal característica?"
                returnKeyType="next"
                value={quiz.caracteristica}
                onChangeText={txt => setQuiz({ ...quiz, caracteristica: txt })}
            />
            <TouchableOpacity style={Style.btnCadastrar} onPress={saveQuiz}>
                <Text style={Style.cadastrar}>CADASTRAR RESPOSTAS</Text>
            </TouchableOpacity>

            <Dialog visible={sucesso} onDismiss={() => setSucesso(false)}>
                    <Dialog.Icon icon="account-check" />
                    <Dialog.Title style={Style.title}>SALVO!</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Enviaremos os resultados analíticos da sua orientação vocacional via e-mail.</Text>
                    </Dialog.Content>
            </Dialog>

        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292929'
      },
    title:{
        fontSize: 40,
        alignSelf: "center",
        color: "white"
    },
    subtitle:{
        fontSize: 25,
        alignSelf: "center",
        marginTop: 1,
        color: "white"
    },


    input: {
        width: '90%',
        height: 60,
        borderColor: '#705AA9',
        borderWidth: 1,
        marginTop: 15,
        paddingLeft: 10,
        borderRadius: 10,
        color: 'white',
      },


      btnCadastrar: {
        width: '90%',
        height: 40,
        backgroundColor: '#705AA9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 20,
        color: 'white',
      },
      cadastrar: {
        color: 'white',
      },
})

export default QuizView