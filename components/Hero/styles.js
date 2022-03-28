import styled from 'styled-components'
import ImageNext from 'next/image'
import Button from '../Button'

export const Container = styled.section`
    position: relative;
    height: 1000px;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 21.63%, #000000 40.21%);
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    height: 400px;
`

export const Image = styled(ImageNext)`
    object-fit: cover;
    object-position: 75%;
`

export const Content = styled.article`
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Button} {
        margin-top: 10px;
        margin-bottom: 10px;
    }

`
export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    
    > span {
        color: ${({ theme }) => theme.colors.third};
        text-transform: uppercase;
    }
`

export const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    line-height: 1.2;
    text-transform: uppercase;
    width: 220px;

    > em {
        color: ${({ theme }) => theme.colors.third}
    }
`

export const Line = styled.hr`
    width: 180px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 10px 0;
`

export const Legend = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
`

export const PlayerWrapper = styled.div`
    position: relative;
    height: 260px;
`

export const Description = styled(Text)`
    font-size: 1.2rem;
    text-transform: none;
    width: 290px;
    line-height: 2;
`

export const Wrapper = styled.div`
    display: flex;
`

export const IconWrapper = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    z-index: 10;
`