import { StyleSheet, View } from 'react-native'
import { Card, Text, Icon, MD3Colors } from 'react-native-paper';

const DireitoView = () => {
    return (
        <View>
            <Card style={Styles.card}>
                <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                <Card.Title title="Direito" titleStyle={{ fontSize: 25, fontWeight: "bold", margin: 5 }} />
                <Card.Content>
                    <View style={Styles.cardIcons}>
                        <Icon
                            source="cash"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        <Text variant="titleSmall">Média Salarial: <strong>R$ 4.752,14</strong> </Text>
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
            <Text variant="bodyMedium" style={{ marginBottom: 10 }} >O Direito é um sistema de normas que regulam a conduta humana em sociedade, visando assegurar justiça, ordem e harmonia nas relações entre indivíduos e instituições.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>A <span style={{ color: '#7f67be', fontWeight: 'bold' }}> faculdade de direito</span> é uma das opções mais populares entre os estudantes que desejam seguir uma carreira na área jurídica. É uma formação de ensino superior que oferece formação teórica e prática para aqueles que desejam se tornar advogados, juízes, promotores, delegados, entre outras profissões relacionadas ao campo do direito.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Durante o <span style={{ color: '#7f67be', fontWeight: 'bold' }}> curso de direito</span>, os alunos aprendem sobre diversas áreas do conhecimento, tais como <span style={{ color: '#7f67be', fontWeight: 'bold' }}>direito civil, penal, trabalhista, tributário, ambiental</span>, entre outros. Além disso, eles têm a oportunidade de aprofundar seus conhecimentos em áreas específicas, através de disciplinas optativas e atividades extracurriculares.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>O curso de Direito possui duração de cinco anos, distribuida ao longo de 3.700 horas. O período é determinado para que os alunos completem a grade curricular obrigatória e cumpram com as exigências acadêmicas, que incluem disciplinas teóricas e práticas, estágios supervisionados e a elaboração de um trabalho de conclusão de curso (TCC).</Text>
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

export default DireitoView