import { Container } from "./styles";
import { Button, SubTitle, Text } from '../../object'

export default function Price() {
    return (
        <Container>
            <SubTitle>
                curso online <br></br>
                <em>minha casa organizada</em>
            </SubTitle>
            <Text>por apenas 12x</Text>
            <Text><em>R$</em><strong>42,00</strong></Text>
            <Text><span>ou 497,00 á vista</span></Text>
            <Button>Compre Agora</Button>
        </Container>
    )
}