import { Container, List, Item } from "./styles";
import { IconFactCheck, IconSafety, IconChat, IconCertificate } from './styles'
import { SubTitle } from '../../object/SubTitle'

const list = [
    <Item>
        <IconFactCheck />
        método exclusivo com <em>+ de 30 aulas</em>, com conteúdo teórico e prático'
    </Item>,
    <Item>
        <IconSafety />
        4 bônus exclusivo de, decoração, imagem e estilo, manipulação de alimentos e auto maquiagem.
    </Item>,
    <Item>
        <IconChat />
        'área exclusiva dentro da plataforma, para  tirar dúvidas.'
    </Item>,
    <Item>
        <IconCertificate />
        'certificado de conclusão do curso'
    </Item>
]

export default function Bonus() {
    return (
        <Container>
            <SubTitle>lembrando que você <em>recebe</em>:</SubTitle>
            <List>
                {list.map(item => item)}
            </List>
            <SubTitle as='h3'>você terá todo esse <em>conteúdo</em> e <em>ainda mais</em>:</SubTitle>
        </Container >
    )
}
