import { StyleSheet, View } from 'react-native'
import { Card, Text, Icon, MD3Colors } from 'react-native-paper';

const MedicinaView = () => {
    return (
        <View>
            <Card style={Styles.card}>
                <Card.Cover source={{ uri: 'https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                <Card.Title title="Medicina" titleStyle={{ fontSize: 25, fontWeight: "bold", margin: 5 }} />
                <Card.Content>
                    <View style={Styles.cardIcons}>
                        <Icon
                            source="cash"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        <Text variant="titleSmall">Média Salarial: <strong>R$ 8.226,53</strong> </Text>
                    </View>
                    <View style={Styles.cardIcons}>
                        <Icon
                            source="calendar"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        <Text variant="titleSmall">Duração: <strong>Até 6 anos</strong> </Text>
                    </View>
                </Card.Content>
            </Card>

        <View style={Styles.text}>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>A Medicina é a ciência responsável por prevenir, diagnosticar e tratar doenças, promovendo a saúde e o bem-estar das pessoas. Ela também envolve a educação, prevenção e gerenciamento dos fatores que podem afetar a saúde dos pacientes.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>O <span style={{ color: '#7f67be', fontWeight: 'bold' }}>curso de Medicina</span> é um dos mais desafiadores e completos que existem. Ele envolve profundos conhecimentos científicos, mas também tem um lado humano muito importante. O curso é dividido em três grandes partes: a graduação, a residência médica e a especialização.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Na graduação, o aluno de medicina aprende tudo o que é necessário para o exercício da profissão. Isso inclui conhecimentos básicos sobre <span style={{ color: '#7f67be', fontWeight: 'bold' }}>anatomia, bioquímica, fisiologia, histologia, farmacologia, imunologia, biofísica</span>, entre outros. Além disso, também é ensinado a fazer diagnósticos, aplicar tratamentos adequados e realizar cirurgias.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Após a graduação, o aluno de medicina deve fazer a residência médica, que é um programa de treinamento prático supervisionado por médicos da área de <span style={{ color: '#7f67be', fontWeight: 'bold' }}>saúde</span>. Nessa fase, o aluno tem contato direto com pacientes, e é responsável por realizar diagnósticos e tratamentos.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Por fim, o aluno pode optar por fazer uma especialização, que é uma pós-graduação na área de medicina que o aluno deseja seguir. Existem diversas especializações, como <span style={{ color: '#7f67be', fontWeight: 'bold' }}>cardiologia, dermatologia, ginecologia, neurologia, pediatria, psiquiatria</span>, entre outras.</Text>
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

export default MedicinaView