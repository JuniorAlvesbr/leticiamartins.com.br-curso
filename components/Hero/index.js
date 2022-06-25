import ReactPlayer from "react-player"
import { IconWrapper, Image } from './Image'
import { Container, Content, Title, Text, Legend, Description, PlayerWrapper, IconContent } from "./styles"
import { Line } from '../Line'
import Button from '../../object/Button'

function Hero() {
    return (
        <Container id="top">
            <Content>
                <Title>Já pensou em ter mais <em>conforto, praticidade e economia</em> no seu dia a dia?</Title>
                <Text as="p">Conheça o método <em>simples</em> e <em>eficaz</em> para organizar a sua casa</Text>
                <Line />
                <Legend>assista o video abaixo:</Legend>

                <PlayerWrapper>
                    <ReactPlayer
                        url='https://www.youtube.com/embed/q65i_D8wpzo'
                        playing={true}
                        loop={false}
                        muted={false}
                        controls={true}
                        light={true}
                        width="100%"
                        height="100%"
                    />
                </PlayerWrapper>

                <Description as="p">
                    Acabe de uma vez por toda com a <em>bagunça</em> e a <em>desordem</em> da sua <em>casa</em>, evitando o <em>estresse</em> e o <em>cansaço</em> no seu dia dia.
                </Description>

                <Button href="#price">Quero me inscrever agora</Button>

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