import { Container, UsersIcon, List, Item, CheckIcon, Content, TextContent, Text } from "./styles";
import { SubTitle } from '../../object/SubTitle'
import { BlackLine } from '../../object/Line'
import Button from '../../object/Button'

const list = [
    'Para quem quer curtir sua casa com mais tranquilidade.',
    'Tem dificuldades em deixar seu lar em ordem.',
    'Se sente sozinha com a desordem a casa.',
    'Para quem quer desfrutar de conforto, agilidade e praticidade nas tarefas do dia a dia.'
]

const text = [
    'Acesso vitalício, podendo rever o conteúdo sempre que desejar;',
    'Todo o curso é online e você pode ver na hora que quiser, no conforto da sua casa;',
    'Acesso imediato do conteúdo;',
    'As aulas são gravadas, podendo ser assististas em qualquer dispositivo, computador, notebook, celular ou tablet;',
    'Cada aula na plataforma, tem um espaço reservado para você fazer perguntas e tirar suas dúvidas',
    'Atualizações constantes do mercado, que vão somar ainda mais no seu conhecimento;'
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

            <Button href="#price">Eu quero agora</Button>
        </Container >
    )
}
