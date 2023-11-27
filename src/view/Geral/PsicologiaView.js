import { StyleSheet, View } from 'react-native'
import { Card, Text, Icon, MD3Colors } from 'react-native-paper';

const PsicologiaView = () => {
    return (
        <View>
            <Card style={Styles.card}>
                <Card.Cover source={{ uri: 'https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                <Card.Title title="Psicologia" titleStyle={{ fontSize: 25, fontWeight: "bold", margin: 5 }} />
                <Card.Content>
                    <View style={Styles.cardIcons}>
                        <Icon
                            source="cash"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        <Text variant="titleSmall">Média Salarial: <strong>R$ 2.919,89</strong> </Text>
                    </View>
                    <View style={Styles.cardIcons}>
                        <Icon
                            source="calendar"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        <Text variant="titleSmall">Duração: <strong>em média, 5 anos</strong> </Text>
                    </View>
                </Card.Content>
            </Card>

        <View style={Styles.text}>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>A Psicologia é o estudo da mente e do comportamento humano, bem como suas interações com o meio ambiente. É uma ciência que visa diagnosticar, compreender, explicar e promover mudanças nos comportamentos humanos. A palavra vem dos termos gregos psico (alma) e logía (estudo).</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>A <span style={{ color: '#7f67be', fontWeight: 'bold' }}>faculdade de Psicologia</span> é um curso de graduação com cinco anos de duração em nível superior. Ele abrange diversos aspectos da psicologia, incluindo a <span style={{ color: '#7f67be', fontWeight: 'bold' }}>psicologia clínica</span>, a <span style={{ color: '#7f67be', fontWeight: 'bold' }}>psicologia social</span>, a <span style={{ color: '#7f67be', fontWeight: 'bold' }}>psicologia educacional</span> e a <span style={{ color: '#7f67be', fontWeight: 'bold' }}>psicopatologia.</span>Além disso, o curso de Psicologia também abrange tópicos específicos como: desenvolvimento infantil, neuropsicologia e dinâmicas de grupo.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>O curso de Psicologia fornece aos estudantes conhecimentos teóricos e práticos que permitem que eles entendam melhor as questões relacionadas ao comportamento humano e às relações interpessoais. Ao longo da faculdade de Psicologia, os alunos aprendem sobre os principais conceitos, como a teoria da personalidade, o desenvolvimento humano, a psicopatologia e a psicoterapia.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Além disso, os alunos também são ensinados sobre técnicas de avaliação, diagnóstico e tratamento de pacientes. O curso de Psicologia também se concentra na aplicação prática da psicologia. Os estudantes estudam tópicos como: a realização de testes psicológicos e o aconselhamento durante o atendimento.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Os alunos também aprendem sobre a ética e a <span style={{ color: '#7f67be', fontWeight: 'bold' }}>legislação</span> profissional relacionadas à área. No final da faculdade de Psicologia, os alunos devem fazer um estágio de prática supervisionada para adquirir experiência prática. Os estudantes de Psicologia também são incentivados a participar de atividades de extensão para aprimorar suas habilidades e conhecimentos.</Text>
        </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    cardIcons: {
        flexDirection: "row",
        margin: 5,
    },
    text: {
        alignSelf: "center",
        margin: 15,
        padding: 10,
    }
})

export default PsicologiaView