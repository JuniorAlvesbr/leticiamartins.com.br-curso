import { Container, Content, Input, Label, Tab, TabContent } from "./styles";
import { SubTitle, Text } from '../../object'

const ListQuestion = [
    {
        label: 'O que está incluso no investimento do curso?',
        tabContent: 'O acesso ao curso incluindo, mais de 30 aulas gravadas, 4 aulas bônus de nossas parceiras, 2 em, certificado de conclusão e acesso vitalício do curso.'
    },
    {
        label: 'Como vou receber todo esse material?',
        tabContent: 'O recebimento é direto pela plataforma através de video aulas e material em PDF.'
    },
    {
        label: 'Por quanto tempo terei acesso a esse conteúdo?',
        tabContent: 'Acesso vitalício para rever sempre que desejar.'
    },
    {
        label: 'Já fiz outros cursos de organização, será que esse é para mim?',
        tabContent: 'Com certeza! Este curso é muito completo e didático. Aqui você conta com toda a experiência e      didática de ensino da Leticia Martins, que é uma profissional que já está há mais de 4 anos atuando no mercado de organização.'
    },
    {
        label: 'Não encontrou a resposta para sua dúvida?',
        tabContent: 'Nos envie um e-mail para leticiamartins.organizer@gmail.com, que nossa equipe de suporte irá te    responder.'
    },
]

export default function Questions() {
    return (
        <Container>
            <SubTitle>Duvidas frequentes</SubTitle>

            <Content>
                {ListQuestion.map(({ label, tabContent }, index) => (
                    <Tab key={index}>
                        <Input id={index} />
                        <Label htmlFor={index}>{label}</Label>
                        <TabContent>{tabContent}</TabContent>
                    </Tab>
                ))}
            </Content>

        </Container>
    )
}