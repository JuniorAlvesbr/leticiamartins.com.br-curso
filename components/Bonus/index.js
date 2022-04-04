import { Container, Text, List, Item, ImageWrapper, Image, TextBox } from "./styles";
import { IconFactCheck, IconSafety, IconChat, IconCertificate } from './styles'
import { SubTitle } from '../../object/SubTitle'
import Button from '../../object/Button'

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

            <ImageWrapper>
                <Image
                    src="/images/ebook.jpg"
                    alt="Imagem do ebook da Leticia Martins"
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/images/blur.png'
                />
            </ImageWrapper>

            <TextBox>
                <Text>1 ebook - minha casa organizada</Text>
                <Text>1 ebook - guia prático de dobras</Text>
                <Text><span>todos bem moderno, com designer exclusivo, fácil leitura e compreensão</span></Text>
            </TextBox>

            <Button>quero me inscrever agora</Button>
        </Container >
    )
}
