import styled from 'styled-components'
import { SubTitle, ImageWrapper, Image } from '../../object'

export const Container = styled.section`

    ${SubTitle} {
        text-align: center;
        padding: 30px 0;
    }
`

export const Content = styled.div`
    display: grid;
    gap: 20px;
    
    grid-template-areas: "image1"
                        "image2"
                        "image4"
                        "image3";

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    
    ${ImageWrapper} {
        height: 370px;
    }

    .image1 {
        grid-area: image1;
    }
    
    .image2 {
        grid-area: image2;
    }
    .image3 {
        grid-area: image3;
    }
    .image4 {
        grid-area: image4;
    }

    @media (min-width: 450px) {
        ${ImageWrapper} {
            height: 420px;
        }
    }

    @media (min-width: 580px) {
        ${ImageWrapper} {
            height: 500px;
        }
    }

    @media (min-width: 768px) {
        grid-template-areas: "image1 image2"
                            "image3 image4";
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 40px;
        
        ${ImageWrapper} {
            height: 370px;
        }
    }
    
    @media (min-width: 1024px) {
        width: 90vw;
        max-width: 1200px ;
        margin: 0 auto;

        ${ImageWrapper} {
            height: 500px;
        }
    }
`