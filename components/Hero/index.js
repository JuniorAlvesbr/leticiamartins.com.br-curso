import ReactPlayer from "react-player"
import { ImageWrapper, IconWrapper, Image } from './Image'
import { Title, Text, Legend, Description } from './Text'
import { Container, Content, PlayerWrapper, IconContent } from "./styles"
import { Line } from '../../object/Line'
import Button from '../../object/Button'

function Hero() {
    return (
        <Container id="toTop">
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
                        url='https://www.youtube.com/embed/q65i_D8wpzo'
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

                <Button>Quero me inscrever agora</Button>

                <IconContent>
                    <IconWrapper>
                        <Image
                            src='/images/garantia7.png'
                            alt='Foto 7 dias de garantia do curso Minha casa Organizada da Leticia Martins'
                            layout='fill'
                            placeholder='blur'
                            blurDataURL='/images/blur.png'
                        />
                    </IconWrapper>

                    <IconWrapper>
                        <Image
                            src='/images/compra-segura.png'
                            alt='Foto compra segura do curso Minha casa Organizada da Leticia Martins'
                            layout='fill'
                            placeholder='blur'
                            blurDataURL='/images/blur.png'
                        />
                    </IconWrapper>

                </IconContent>

            </Content>

        </Container>
    )
}

export default Hero