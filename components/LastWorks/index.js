import { Container, Content } from "./styles";
import { Image, ImageWrapper, SubTitle } from '../../object'

export default function LastWorks() {
    return (
        <Container>
            <SubTitle>Ultimos Trabalhos</SubTitle>

            <Content>
                <ImageWrapper className="image1">
                    <Image
                        src="/images/image1.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image2">
                    <Image
                        src="/images/image2.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image3">
                    <Image
                        src="/images/image3.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image4">
                    <Image
                        src="/images/image4.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image5">
                    <Image
                        src="/images/image5.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
                <ImageWrapper className="image6">
                    <Image
                        src="/images/image6.jpg"
                        alt="Ultimos trabalhos da Leticia Martins"
                    />
                </ImageWrapper>
            </Content>
        </Container>
    )
}