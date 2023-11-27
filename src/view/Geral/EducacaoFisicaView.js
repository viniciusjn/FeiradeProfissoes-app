import { StyleSheet, View } from 'react-native'
import { Card, Text, Icon, MD3Colors } from 'react-native-paper';

const EducacaoFisicaView = () => {
    return (
        <View>
            <Card style={Styles.card}>
                <Card.Cover source={{ uri: 'https://plus.unsplash.com/premium_photo-1661730410704-b2af2a84b45b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                <Card.Title title="Educação Física" titleStyle={{ fontSize: 25, fontWeight: "bold", margin: 5 }} />
                <Card.Content>
                    <View style={Styles.cardIcons}>
                        <Icon
                            source="cash"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        <Text variant="titleSmall">Média Salarial: <strong>R$ 3.804,75</strong> </Text>
                    </View>
                    <View style={Styles.cardIcons}>
                        <Icon
                            source="calendar"
                            color={MD3Colors.primary50}
                            size={20}
                        />
                        <Text variant="titleSmall">Duração: <strong>em média, 4 anos</strong> </Text>
                    </View>
                    {/* <Text variant="bodyMedium">Card content</Text> */}
                </Card.Content>
            </Card>

        <View style={Styles.text}>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }} >A Educação Física é a ciência que estuda os movimentos corporais, a prática de atividades físicas e a formação de hábitos saudáveis de vida. Seu objetivo é promover o desenvolvimento físico, mental e social dos indivíduos, contribuindo para o aumento de sua qualidade de vida. A educação física é uma das áreas do conhecimento que estuda as atividades de manutenção, desenvolvimento ou reabilitação da saúde dos indivíduos.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }} >A<span style={{ color: '#7f67be', fontWeight: 'bold' }}>faculdade de Educação Física</span>é uma excelente escolha para quem deseja seguir carreira na área da saúde e do esporte. Ela permite que os alunos se tornem profissionais qualificados, capazes de desenvolver programas de atividades físicas que sejam seguros e eficazes para a saúde.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Os estudantes<span style={{ color: '#7f67be', fontWeight: 'bold' }}>graduados em Educação Física</span>são capazes de compreender o processo de treinamento em relação à saúde e ao bem-estar, além de desenvolver programas de atividade física que possam melhorar a condição física dos seus clientes. Eles também podem ajudar a educar as pessoas sobre a importância de uma vida saudável e com hábitos alimentares saudáveis.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Os alunos também aprendem sobre como motivar os clientes a se dedicarem aos programas de atividade física. Eles aprendem sobre as técnicas de motivação, bem como como manter o interesse dos clientes. Isso inclui o uso de metas realistas, oferecendo feedback positivo e criar um ambiente de aprendizagem que estimule a participação dos alunos.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Além disso, os estudantes também aprendem sobre a anatomia e fisiologia humana, assim como os princípios e técnicas de treinamento para melhorar a saúde. Eles também aprendem sobre as lesões esportivas e como preveni-las, bem como como tratar as lesões.</Text>
            <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Vale relembrar que o curso de Educação Física é disponibilizado como bacharelado e licenciatura.</Text>
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

export default EducacaoFisicaView