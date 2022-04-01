import { Container, Image, ImageWrapper, Content, Text } from "./styles";
import { SubTitle } from '../../object/SubTitle'

export default function AboutMe() {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src="/images/Leticia-Martins.png"
                    alt="Foto de perfil da Leticia Martins"
                    layout="fill"
                    placeholder='blur'
                    blurDataURL='/images/blur.png'
                />
            </ImageWrapper>

            <Content>
                <SubTitle>Sobre Mim</SubTitle>
                <Text>Prazer, sou a Leticia Martins, certificada em personal organizer desde 2017.</Text>

                <Text>
                    Organizar pra mim vai muito além de dispôr um objeto num determinado local, organizar é ter <em>facilidade, liberdade, controle</em>, de tudo que você tem na sua casa, você não fica refém dela, mas executa as tarefas da casa com muita <em>praticidade e agilidade</em>.
                </Text>

                <Text>
                    Pensando nisso, desenvolvi esse curso, com todo <em>amor</em> e <carinho>carinho</carinho> e com minha experiência, para que você tenha facilidade e simplicidade no seu dia a dia, através da sua casa organizada.
                </Text>

            </Content>
        </Container>
    )
}