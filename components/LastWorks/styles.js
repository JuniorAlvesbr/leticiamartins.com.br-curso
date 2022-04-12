import styled from 'styled-components'
import { SubTitle, ImageWrapper, Image } from '../../object'

export const Container = styled.section`

    ${SubTitle} {
        text-align: center;
    }
`

export const Content = styled.div`
    padding: 30px 0;
    display: grid;
    gap: 20px;
    
    grid-template-areas: "image1 image2"
                        "image3 image3"
                        "image4 image4"
                        "image5 image6";

    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
    
    ${ImageWrapper} {
        height: 270px;
    }

    ${Image} {
        object-fit: cover;
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

    .image5 {
        grid-area: image5;
    }

    .image6 {
        grid-area: image6;
    }

    @media (min-width: 550px) {
        ${ImageWrapper} {
            height: 350px;
        }
    }

    @media (min-width: 650px) {
        ${ImageWrapper} {
            height: 600px;
        }
    }

    @media (min-width: 1000px) {
        grid-template-areas: "image1 image2 image3 image3"
                            "image4 image4 image5 image6";
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    
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
    
        .image5 {
            grid-area: image5;
        }
    
        .image6 {
            grid-area: image6;
        }
    }
`