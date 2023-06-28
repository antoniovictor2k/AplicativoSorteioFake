import { React, useState, useEffect } from "react";
import { TextInput, Button, Avatar } from "react-native-paper";
import { View, ScrollView, Text, Image } from "react-native";

import styles from "../style/StyleTelaSobre";

function TelaSobre() {
    return (
        <ScrollView style={styles.containerPrincipal}>
            <Text style={styles.titulo}>Sorteio Fake</Text>
            <Text style={styles.text}>
                {'   '}Bem-vindo ao Sorteio Fake, o aplicativo perfeito para fazer brincadeiras e trolagens com seus amigos! Com o Sorteio Fake, você pode criar sorteios fictícios e surpreender a todos com resultados inusitados.
                {`

    `}

                Quer instigar a curiosidade e deixar seus amigos se perguntando o que está acontecendo? Com o nosso aplicativo, você pode criar sorteios falsos com prêmios improváveis e divertidos. Desde "Uma viagem de helicóptero para a Antártica" até "Uma ilha particular no Caribe", as possibilidades são infinitas!
                {`

    `}

                O Sorteio Fake oferece uma interface simples e intuitiva para criar sorteios fictícios de maneira rápida e fácil. Personalize o número de participantes, defina a quantidade de prêmios e escreva descrições criativas para cada um deles. Quanto mais criativa a trolagem, mais surpresos e intrigados seus amigos ficarão!
                {`

    `}

                Nossa equipe se esforçou para criar um ambiente divertido e realista para suas brincadeiras. Ao anunciar os resultados fictícios, você pode compartilhar notificações personalizadas que farão seus amigos se questionarem se realmente foram sorteados. Mas lembre-se, tudo não passa de uma pegadinha amigável!
                {`

    `}

                O Sorteio Fake foi desenvolvido para proporcionar momentos de risadas e descontração entre amigos. Certifique-se de deixar claro que os sorteios são completamente fictícios e não têm nenhum valor real. Nosso objetivo é espalhar alegria e diversão através de brincadeiras saudáveis!
                {`
                
    `}

                Está pronto para surpreender seus amigos com sorteios falsos e criar momentos inesquecíveis? Baixe agora o Sorteio Fake e comece a trollar com estilo! Divirta-se e lembre-se de compartilhar as reações engraçadas com a gente.
            </Text>
            <Text style={styles.titulo}>Desenvolvedor</Text>
            <Text style={styles.text}>
                {'   '} Antonio Victor é um programador junior especializado em JavaScript.
                {`

    `}

                Com conhecimentos sólidos nessa linguagem versátil, ele está construindo uma carreira promissora no desenvolvimento de software.
                {`

    `}
                Com habilidades em desenvolvimento web e móvel, Antonio Victor traz soluções inovadoras para o mundo da tecnologia.
                {`

    `}
                Seu comprometimento em aprimorar suas habilidades mostra seu desejo de crescer e se destacar nessa área em constante evolução.
            </Text>
            <Text style={styles.titulo}>Linguagem e Programas</Text>
            <Text style={styles.text}>
                {'   '} App criado com React Native, JavaScript e CSS para interfaces modernas e responsivas.{`
    `}
                Compartibilidade Android e IOS.
            </Text>
            <Text style={styles.dev}>Dev Antonio Victor</Text>

        </ScrollView>
    )
}

export default TelaSobre;