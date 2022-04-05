import styled from 'styled-components'
import ImageNext from 'next/image'

const imageAttributes = ({ src, alt }) => {
    return ({
        src: src,
        alt: alt,
        layout: "fill",
        placeholder: 'blur',
        blurDataURL: '/images/blur.png'
    })
}

export const ImageWrapper = styled.div`
    position: relative;
`

export const Image = styled(ImageNext).attrs(imageAttributes)``
