import { StyleSheet, View, ScrollView } from 'react-native'
import { Card, Text, Icon, MD3Colors } from 'react-native-paper';

const SistemasInformacaoView = () => {
    return (
        <ScrollView keyboardShouldPersistTaps="always">
            <View>
                <Card style={Styles.card}>
                    <Card.Cover source={{ uri: 'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                    <Card.Title title="Sistemas de Informação" titleStyle={{ fontSize: 25, fontWeight: "bold", margin: 5 }} />
                    <Card.Content>
                        <View style={Styles.cardIcons}>
                            <Icon
                                source="cash"
                                color={MD3Colors.primary50}
                                size={20}
                            />
                            <Text variant="titleSmall">Média Salarial: <Text style={{ fontWeight: 'bold' }}>R$ 4.000,57</Text> </Text>
                        </View>
                        <View style={Styles.cardIcons}>
                            <Icon
                                source="calendar"
                                color={MD3Colors.primary50}
                                size={20}
                            />
                            <Text variant="titleSmall">Duração: <Text style={{ fontWeight: 'bold' }}>em média, 4 anos</Text> </Text>
                        </View>
                    </Card.Content>
                </Card>

                <View style={Styles.text}>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Sistemas de Informação é a ciência que estuda como coletar, armazenar, processar, analisar e distribuir informações por meio de tecnologias, incluindo hardware, software e rede. Desse modo, as organizações adquirem maior eficiência nos processos, tomando decisões informadas.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>O Curso de <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>Sistemas de Informação</Text> é um curso voltado para a área de <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>tecnologia da Informação</Text> , que tem como objetivo formar profissionais capacitados para apoiar as organizações na gestão de informações e na criação de soluções informáticas.</Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Durante o curso, os alunos aprendem sobre os princípios básicos da computação, bem como sobre as tecnologias de informação modernas, como <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>redes, sistemas de armazenamento de dados, linguagens de programação, segurança da informação e projetos de software.</Text></Text>
                    <Text variant="bodyMedium" style={{ marginBottom: 10 }}>Além disso, os alunos adquirem habilidades analíticas, de <Text style={{ color: '#7f67be', fontWeight: 'bold' }}>comunicação</Text> e de liderança que são essenciais para atuar na área de TI. O curso de Sistemas de Informação fornece aos alunos os conhecimentos e habilidades necessários para atuar como desenvolvedores de software, administradores de sistemas, analistas de negócios, engenheiros de segurança de rede e especialistas em telecomunicações.</Text>
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

export default SistemasInformacaoView