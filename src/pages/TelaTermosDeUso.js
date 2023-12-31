import { ScrollView, View, Text } from 'react-native';
import styles from '../style/StyleTelaTermosEPrivacidadeDeUso';
import { IconButton } from "react-native-paper";

function TelaTermosDeUso({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <IconButton
                    icon="arrow-left"
                    iconColor={'#fff'}
                    size={28}
                    style={styles.icon}
                    onPress={() => { navigation.navigate("TelaMenu"); }}
                />
                <Text style={styles.titulo}>
                    Termos de uso
                </Text>
            </View>
            <ScrollView contentContainerStyle={{height:2250}}>
                <Text style={styles.heading}>1. Termos</Text>
                <Text style={styles.paragraph}>
                    Ao acessar o App Sorteio Fake, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
                    {`

`}Se você não concordar com algum desses termos, está proibido de usar ou acessar este app. Os materiais contidos neste app são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </Text>
                <Text style={styles.heading}>2. Uso de Licença</Text>
                <Text style={styles.paragraph}>
                    É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no app, apenas para visualização transitória pessoal e não comercial.
                    {`
                    
`}
                    Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                    {`
                `}
                </Text>
                <Text style={styles.paragraph}>- modificar ou copiar os materiais;
                    {`
                `}
                </Text>
                <Text style={styles.paragraph}>- usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
                    {`
                `}
                </Text>
                <Text style={styles.paragraph}>- tentar descompilar ou fazer engenharia reversa de qualquer software contido no app;
                    {`
                `}
                </Text>
                <Text style={styles.paragraph}>- remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
                    {`
                `}
                </Text>

                <Text style={styles.paragraph}>
                    Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por a qualquer momento.
                    {`

`}
                    Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
                </Text>
                <Text style={styles.heading}>3. Isenção de responsabilidade</Text>
                <Text style={styles.paragraph}>- Os materiais no app da são fornecidos 'como estão'. não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                    {`
                `}
                </Text>
                <Text style={styles.paragraph}>- Além disso, o não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu app ou de outra forma relacionado a esses materiais ou em apps vinculados a este app.</Text>
                <Text style={styles.heading}>4. Limitações</Text>
                <Text style={styles.paragraph}>
                    Em nenhum caso o ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em , mesmo que ou um representante autorizado da tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
                </Text>
                <Text style={styles.heading}>5. Precisão dos materiais</Text>
                <Text style={styles.paragraph}>
                    Os materiais exibidos no app da podem incluir erros técnicos, tipográficos ou fotográficos. não garante que qualquer material em seu app seja preciso, completo ou atual. pode fazer alterações nos materiais contidos em seu app a qualquer momento, sem aviso prévio. No entanto, não se compromete a atualizar os materiais.
                </Text>
                <Text style={styles.heading}>6. Links</Text>
                <Text style={styles.paragraph}>
                    O não analisou todos os apps vinculados ao seu app e não é responsável pelo conteúdo de nenhum app vinculado. A inclusão de qualquer link não implica endosso por do app. O uso de qualquer app vinculado é por conta e risco do usuário.
                </Text>
                <Text></Text>
                <Text style={styles.heading}>Modificações</Text>
                <Text style={styles.paragraph}>
                    O pode revisar estes termos de serviço do App a qualquer momento, sem aviso prévio. Ao usar este app, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </Text>
                <Text style={styles.heading}>Lei aplicável</Text>
                <Text style={styles.paragraph}>
                    Estes termos e condições são regidos e interpretados de acordo com as leis do e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </Text>
               
            </ScrollView>

        </View>
    );
}

export default TelaTermosDeUso;