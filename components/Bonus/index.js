import { Container, List, Item, Content, TextBox } from "./styles";
import { IconFactCheck, IconSafety, IconChat, IconCertificate } from './styles'
import { SubTitle, Text, ImageWrapper, Image, Button } from '../../object/'

const BonusList = [
    <div>
        <IconFactCheck />
        <Text>método exclusivo com <em>+ de 30 aulas</em>, com conteúdo teórico e prático.</Text>
    </div>,
    <div>
        <IconSafety />
        <Text>
            <strong>3 bônus exclusivo de</strong>, <span>organização alimentar, imagem e estilo e automaquiagem</span>
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
                        src="/images/ebook.jpg"
                        alt="Ebook do curso Minha casa Organizada da Leticia Martins"
                    />
                </ImageWrapper>

                <TextBox>
                    <Text>1 ebook - minha casa organizada</Text>
                    <Text>1 ebook - guia prático de dobras</Text>
                    <Text>
                        <span>
                            todos bem moderno, com designer <br></br>
                            exclusivo, fácil leitura e compreensão
                        </span>
                    </Text>
                </TextBox>
            </Content>

            <Button href="#price">quero me inscrever agora</Button>

        </Container >
    )
}