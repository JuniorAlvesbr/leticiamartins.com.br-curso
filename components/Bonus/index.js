import { Container, Text, List, Item } from "./styles";
import { IconFactCheck, IconSafety, IconChat, IconCertificate } from './styles'
import { SubTitle } from '../../object/SubTitle'

const list = [
    <div>
        <IconFactCheck />
        <Text>método exclusivo com <em>+ de 30 aulas</em>, com conteúdo teórico e prático.'</Text>
    </div>,
    <div>
        <IconSafety />
        <Text>4 bônus exclusivo de, decoração, imagem e estilo, manipulação de alimentos e auto maquiagem.</Text>
    </div>,
    <div>
        <IconChat />
        <Text>área exclusiva dentro da plataforma, para tirar dúvidas.</Text>
    </div>,
    <div>
        <IconCertificate />
        <Text>certificado de conclusão do curso.</Text>
    </div>
]

export default function Bonus() {
    return (
        <Container>
            <SubTitle>lembrando que você <em>recebe</em>:</SubTitle>
            <List>
                {list.map((item, index) => <Item key={index}>{item}</Item>)}
            </List>
            <SubTitle as='h3'>você terá todo esse <em>conteúdo</em> e <em>ainda mais</em>:</SubTitle>
        </Container >
    )
}
