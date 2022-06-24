import { Container } from "./styles";
import { ImageWrapper, Image } from '../../object'

export default function Device() {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src="/images/devices.jpg"
                    alt="Acesse o curso minha casa organizada em qualquer plataforma"
                />
            </ImageWrapper>
        </Container>
    )
}