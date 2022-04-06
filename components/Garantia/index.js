import { Container, TextBox } from "./styles"
import { ImageWrapper, Image, SubTitle, Text } from '../../object'

export default function Garantia() {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src="/images/garantia.png"
                    alt="7 dias de garantia do curso minha casa organizada"
                />
            </ImageWrapper>

            <TextBox>
                <SubTitle>Garantia <em>total</em> de <em>7 dias</em></SubTitle>

                <Text>
                    É simples, se você não gostar do material ou achar que não é para você, eu te devolvo o investimento, mas pode apostar, você vai ficar encantado com a nossa entrega.
                </Text>

                <Text>
                    Uma garantia blindada do curso online - <strong>minha casa organizada</strong>, pois respeitamos seu tempo e seu dinheiro e desejamos ter pessoas satisfeitas com nosso conteúdo.
                </Text>
            </TextBox>

        </Container>
    )
}