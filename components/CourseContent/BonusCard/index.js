import styled from 'styled-components'
import { ImageWrapper, Image } from '../../../object/Image'

const Card = styled.div`
    ${ImageWrapper} {
        width: 320px;
        height: 310px;
        object-fit: contain;
    }
`

const Content = styled.div`
    border: 4px solid ${({ theme }) => theme.colors.third};
    border-radius: 10px;
    padding: 16px;
    max-width: 320px;
    height: 100px;
`

const Title = styled.p`
    font-weight: 700;
    line-height: 18px;
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

export default function BonusCard({ title, description, image, alt }) {
    return (
        <Card>
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
            <ImageWrapper>
                <Image
                    src={image}
                    alt={alt}
                />
            </ImageWrapper>
        </Card>
    )
}