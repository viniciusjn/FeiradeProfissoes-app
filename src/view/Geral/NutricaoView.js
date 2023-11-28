import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Text, Icon, MD3Colors } from 'react-native-paper';

const NutricaoView = () => {
    return (
        <ScrollView keyboardShouldPersistTaps="always">
            <View>
                <Card style={Styles.card}>
                    <Card.Cover source={{ uri: 'https://assets.querobolsa.com.br/assets/covers/courses/nutricao-694936d382952c5cfc54fc78d73f44df0e8bd023dcbc8cdfae128a76cdac49ad.jpg' }} />
                    <Card.Title title="Nutrição" titleStyle={{ fontSize: 25, fontWeight: "bold", margin: 5 }} />
                    <Card.Content>
                        <View style={Styles.cardIcons}>
                            <Icon
                                source="cash"
                                color={MD3Colors.primary50}
                                size={20}
                            />
                            <Text variant="titleSmall">Média Salarial: <Text style={{ fontWeight: 'bold' }}>R$ 2.976,61</Text></Text>
                        </View>
                        <View style={Styles.cardIcons}>
                            <Icon
                                source="calendar"
                                color={MD3Colors.primary50}
                                size={20}
                            />
                            <Text variant="titleSmall">Duração: <Text style={{ fontWeight: 'bold' }}>em média, 4 anos</Text></Text>
                        </View>
                    </Card.Content>
                </Card>

                <View style={Styles.text}>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>A nutrição é a ciência que estuda os nutrientes presentes nos alimentos, suas funções no organismo e a forma como devem ser consumidos para garantir uma alimentação equilibrada e saudável, visando a prevenção e tratamento de doenças e a promoção da saúde.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>O <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>curso de nutrição</Text> é uma graduação que tem como objetivo formar profissionais capacitados para orientar e promover a <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>saúde</Text> por meio da <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>alimentação.</Text> Durante a graduação, os estudantes aprendem sobre os diversos nutrientes presentes nos alimentos, suas funções no organismo e a forma como devem ser consumidos para garantir uma alimentação equilibrada e saudável.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Além disso, os estudantes de nutrição também estudam sobre as principais doenças relacionadas à alimentação, como diabetes, obesidade, hipertensão, entre outras, e como a alimentação pode auxiliar no tratamento dessas doenças.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Durante o curso, os alunos têm aulas práticas em laboratórios de nutrição, onde aprendem a elaborar cardápios equilibrados e adequados às necessidades individuais de cada pessoa. Eles também podem realizar estágios em hospitais, clínicas, escolas e empresas, onde aplicam na prática os conhecimentos adquiridos em sala de aula.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Após a formação, o nutricionista pode atuar em diversas áreas, como em <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>hospitais, clínicas, consultórios, escolas, indústrias alimentícias,</Text> entre outras. Ele pode trabalhar na elaboração de cardápios, no atendimento individualizado, na promoção de programas de educação alimentar, na pesquisa científica, entre outras áreas.</Text>
                </View>
            </View>
        </ScrollView>
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

export default NutricaoView