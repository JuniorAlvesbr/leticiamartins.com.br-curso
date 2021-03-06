import { Container, Description } from "./styles";
import { Button, SubTitle, Text } from '../../object'

export default function Price() {
    return (
        <Container id="price">
            <SubTitle>
                curso online <br></br>
                <em>organize sua casa</em>
            </SubTitle>

            <Text>de <s>R$597,00</s> por apenas 12x</Text>
            <Text><em>R$</em><strong>29,<span>64</span></strong></Text>
            <Text><span>ou 297,00 á vista</span></Text>

            <Button href="https://pay.hotmart.com/N69221252K?bid=1651088642711" target="_blank">
                Compre Agora
            </Button>

            <Description>Eu preciso te lembrar, você terá todo o meu amparo!</Description>
            <Description>Você terá o meu <strong>suporte</strong> do início ao fim.</Description>
        </Container>
    )
}