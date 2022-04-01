import styled from 'styled-components'
import ImageNext from 'next/image'
import { SubTitle } from '../../object/SubTitle'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #BF6D8D 9.84%, #000000 42.24%);
    border-top: 2px solid #000000;

    ${SubTitle} {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`

export const Image = styled(ImageNext)`
    object-fit: contain;
`

export const Content = styled.article`
    width: 280px;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    margin-bottom: 24px;

    > em {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.third}
    }
`