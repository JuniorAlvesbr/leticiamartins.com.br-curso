import ReactPlayer from "react-player"
import { Container, ImageWrapper, Image, Content, Text, Title, Line, Legend, PlayerWrapper, Description } from "./styles"

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

                <PlayerWrapper>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=p-a3oyMTcRk&t=13s'
                        playing={false}
                        loop={true}
                        muted={false}
                        controls={true}
                        width="100%"
                        height="100%"
                    />
                </PlayerWrapper>

                <Description>
                    Neste curso você vai aprender o <em>passo a passo</em> da organização que funciona, cada <em>etapa</em> da organização que vai <em>facilitar a sua rotina</em>, aprendendo exatamente por onde começar para atingir o seu resultado tão esperado!
                </Description>
            </Content>

        </Container>
    )
}

export default Hero