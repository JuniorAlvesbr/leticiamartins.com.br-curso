import { Container, UsersIcon, List, Item, CheckIcon, Content, TextContent, Text } from "./styles";
import { SubTitle } from '../../object/SubTitle'
import { BlackLine } from '../../object/Line'
import Button from '../Button'

const list = [
    'Para quem quer curtir sua casa com mais tranquilidade.',
    'Tem dificuldades em deixar seu lar em ordem.',
    'Se sente sozinha com a desordem a casa.',
    'Para quem quer desfrutar de conforto, agilidade e praticidade nas tarefas do dia a dia.'
]

const text = [
    'TODO O CURSO É ONLINE E VOCÊ PODE VER NA HORA QUE QUISER, NO CONFORTO DA SUA CASA;',
    'ACESSO IMEDIATO DO CONTEÚDO;',
    'AS AULAS SÃO GRAVADAS, PODENDO SER ASSISTIDAS QUANTAS VEZES DESEJAR;',
    'CADA AULA NA PLATAFORMA, TEM UM ESPAÇO RESERVADO PARA VOCÊ FAZER PERGUNTAS E TIRAR SUAS DÚVIDAS.',
]

export default function WhoisCourse() {
    return (
        <Container>
            <SubTitle>Para quem é o curso minha casa Organizada</SubTitle>
            <BlackLine />
            <UsersIcon />

            <Content>
                <List>
                    {list.map((item, index) => <Item key={index}><CheckIcon /><span>{item}</span></Item>)}
                </List>

                <TextContent>
                    {text.map((item, index) => <Text key={index}>{item}</Text>)}
                </TextContent>
            </Content>

            <Button>Eu quero agora</Button>
        </Container >
    )
}
