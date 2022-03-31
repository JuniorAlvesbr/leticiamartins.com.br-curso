import styled from 'styled-components'

const Card = styled.div`
    border: 4px solid ${({ theme }) => theme.colors.third};
    border-radius: 10px;
    padding: 16px;
    width: 260px;
    height: 100px;
`

const Title = styled.p`
    font-weight: 700;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
`

const Description = styled.p`
    font-weight: 400;
    font-style: italic;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-top: 6px;
`

export default function BonusCard({ title, description }) {
    return (
        <Card>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}