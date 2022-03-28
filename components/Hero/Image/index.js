import styled from 'styled-components'
import ImageNext from 'next/image'

export const ImageWrapper = styled.div`
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.6);
    }
`

export const IconWrapper = styled.div`
    position: relative;
`

export const Image = styled(ImageNext)`
    object-fit: cover;
    object-position: 75%;
`
