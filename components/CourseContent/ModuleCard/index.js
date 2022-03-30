import styled from 'styled-components'

const Card = styled.div`
    width: 320px;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.fourth};
`

const Title = styled.p`
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.third};
    border-radius: 5px;
    padding: 10px;
`

const SubTitle = styled.p`
    font-size: 0.8rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 16px 2px;
    line-height: 18px;
`

const Description = styled(SubTitle)`
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