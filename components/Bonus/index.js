import {
    Container,
    List,
    Item, Content,
    Description,
    IconFactCheck,
    IconSafety,
    IconChat,
    IconCertificate,
} from './styles'

import { SubTitle, ImageWrapper, Image, Button, Text } from '../../object/'

const BonusList = [
    <div>
        <IconFactCheck />
        <Text>método exclusivo com <em>+ de 30 aulas</em>, com conteúdo teórico e prático.</Text>
    </div>,
    <div>
        <IconSafety />
        <Text>
            <strong>3 bônus exclusivo de</strong>, <span>organização alimentar, imagem e estilo e automaquiagem.</span>
        </Text>
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

            <SubTitle>Lembrando que <br></br> você <em>recebe:</em></SubTitle>

            <List>
                {BonusList.map((bonus, index) => <Item key={index}>{bonus}</Item>)}
            </List>

            <SubTitle as="h3">Você terá todo esse <br></br> <em>conteúdo</em> e <em>ainda mais</em>:</SubTitle>

            <Content>
                <ImageWrapper>
                    <Image
                        src="/images/consultoria.jpg"
                        alt="Ebook do curso Minha casa Organizada da Leticia Martins"
                    />
                </ImageWrapper>
                <Text>1 Hora gratuita de consultoria online individual</Text>

                <ImageWrapper>
                    <Image
                        src="/images/casa-organizada.jpg"
                        alt="Ebook do curso Minha casa Organizada da Leticia Martins"
                    />
                </ImageWrapper>

                <Text>1 ebook <br></br>Minha casa organizada</Text>
                <Text><s>R$67,00</s></Text>
                <Text><span>00,00</span></Text>

                <ImageWrapper>
                    <Image
                        src="/images/guia-dobras.jpg"
                        alt="Ebook do curso Minha casa Organizada da Leticia Martins"
                    />
                </ImageWrapper>

                <Text>1 ebook <br></br>Guia prático de dobras</Text>
                <Text><s>R$67,00</s></Text>
                <Text><span>00,00</span></Text>

                <Text italic="true">
                    Ebooks bem moderno, com designer exclusivo, fácil leitura e compreensão
                </Text>

            </Content>

            <Button href="https://pay.hotmart.com/N69221252K?bid=1651088642711" target="_blank">
                quero me inscrever agora
            </Button>
        </Container >
    )
}