import { Container, ImageWrapper, Image, Content, Text, Title, Line, Legend } from "./styles"

function Hero() {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src='/images/minha-casa-organizada.jpg'
                    alt='Foto Minha casa Organizada da Leticia Martins'
                    layout='fill'
                    placeholder='blur'
                    blurDataURL='/images/blur.png'
                />
            </ImageWrapper>

            <Content>
                <Title>
                    Curso online <br />
                    <span>Minha casa organizada</span>
                </Title>
                <Line />
                <Text>Conheça o método <em>simples</em> e <em>eficaz</em> para organizar a sua casa</Text>
                <Line />
                <Legend>assista o video abaixo:</Legend>
            </Content>
        </Container>
    )
}

export default Hero