import { Container, Content } from "./styles";
import { Image, ImageWrapper, SubTitle } from '../../object'

export default function LastWorks() {
    return (
        <Container>
            <SubTitle>Trabalhos Realizados</SubTitle>

            <Content>
                <ImageWrapper className="image1">
                    <Image
                        src="/images/armario.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image2">
                    <Image
                        src="/images/meias.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image3">
                    <Image
                        src="/images/gaveta.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image4">
                    <Image
                        src="/images/sapateira.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
            </Content>
        </Container>
    )
}