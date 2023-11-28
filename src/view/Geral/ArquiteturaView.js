import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Text, Icon, MD3Colors } from 'react-native-paper';

const ArquiteturaView = () => {
    return (
        <ScrollView keyboardShouldPersistTaps="always">
            <View>
                <Card style={Styles.card}>
                    <Card.Cover source={{ uri: 'https://assets.querobolsa.com.br/assets/covers/courses/arquitetura-e-urbanismo-e83d87d5930fc4846926183c36938ce57eb14ae0df4d1d053adf54c1de9fb488.jpg' }} />
                    <Card.Title title="Arquitetura e Urbanismo" titleStyle={{ fontSize: 25, fontWeight: "bold", margin: 5 }} />
                    <Card.Content>
                        <View style={Styles.cardIcons}>
                            <Icon
                                source="cash"
                                color={MD3Colors.primary50}
                                size={20}
                            />
                            <Text variant="titleSmall">Média Salarial: <Text style={{ fontWeight: 'bold' }}>R$ 3.233,37</Text></Text>
                        </View>
                        <View style={Styles.cardIcons}>
                            <Icon
                                source="calendar"
                                color={MD3Colors.primary50}
                                size={20}
                            />
                            <Text variant="titleSmall">Duração: <Text style={{ fontWeight: 'bold' }}>em média, 5 anos</Text></Text>
                        </View>
                    </Card.Content>
                </Card>

                <View style={Styles.text}>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>A <Text style={{ color: '#7f67be', fontWeight: 'bold' }}> faculdade de Arquitetura e Urbanismo</Text> é um curso rico e estimulante, onde estudantes mergulham em um universo de criatividade, design e planejamento urbano. Ao longo do curso, os alunos têm a oportunidade de explorar e aprimorar suas habilidades técnicas e artísticas, desenvolvendo uma compreensão profunda da interação entre o espaço construído e a sociedade.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>O currículo abrange uma ampla gama de disciplinas, desde os <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>fundamentos da arquitetura,</Text> como <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>desenho técnico e história da arte,</Text> até matérias mais especializadas, como estruturas e sistemas construtivos. A interdisciplinaridade é uma marca forte, permitindo aos estudantes integrar conhecimentos de <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>engenharia, design de interiores, paisagismo</Text> e outras áreas afins.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Além dos aspectos técnicos, a faculdade de Arquitetura e Urbanismo também valoriza a sensibilidade social e ambiental. Os alunos são desafiados a pensar de forma crítica sobre questões como <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>sustentabilidade,</Text> acessibilidade e impacto cultural, buscando soluções que promovam um desenvolvimento urbano mais inclusivo e equitativo.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Os estudos são complementados por projetos práticos, nos quais os alunos têm a oportunidade de aplicar os conhecimentos adquiridos em situações reais. Esses projetos variam desde intervenções em espaços urbanos existentes até a criação de edifícios e complexos arquitetônicos inovadores.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>No final do curso, os formandos emergem como profissionais capazes de conceber e executar projetos arquitetônicos de alta qualidade. Com uma compreensão abrangente do espaço e uma abordagem crítica às questões urbanas, os graduados da faculdade de Arquitetura e Urbanismo estão bem preparados para enfrentar os desafios e contribuir para a evolução do ambiente construído em nossa sociedade.</Text>
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

export default ArquiteturaView