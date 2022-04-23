import styled from 'styled-components'

const Card = styled.div`
    width: 320px;
    height: 152px;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.fourth};
`

const Title = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.third};
    border-radius: 5px;
    padding: 10px;
`

const SubTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 16px 2px;
`

const Description = styled(SubTitle)`
    font-size: 1.1rem;
    text-transform: lowercase;
    font-weight: 400;
`

function ModuleCard({ title = "", subTitle = "", description = "" }) {
    return (
        <Card>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Description>{description}</Description>
        </Card>
    )
}

export default ModuleCard