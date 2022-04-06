import styled from 'styled-components'
import { SubTitle, Text, ImageWrapper, Image } from '../../object'

import { MdFactCheck } from 'react-icons/md'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { BsChatLeftText } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa'

export const IconFactCheck = styled(MdFactCheck)``
export const IconSafety = styled(AiOutlineSafetyCertificate)``
export const IconChat = styled(BsChatLeftText)``
export const IconCertificate = styled(FaAward)``

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > ${SubTitle} {
        font-size: 1.1rem;
        text-align: center;
        margin: 0 auto;
        padding-top: 50px;
    }

    @media (min-width: 700px) {
        & > ${SubTitle} {
            font-size: 1.6rem;
        }
    }
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    @media(min-width: 700px) {
        width: 600px;
    }

    @media(min-width: 1200px) {
        width: 100%;
    }
`

export const Item = styled.li`
    width: 250px;
    height: 200px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.third};
    border-radius: 10px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
                
        & ${IconFactCheck}, ${IconSafety}, ${IconChat}, ${IconCertificate} {
            color: ${({ theme }) => theme.colors.primary}; 
            font-size: 3rem 
        }

        & ${Text} {
            text-transform: uppercase;
            width: 200px;
            text-align: center;
            line-height: 21px;
            padding-top: 6px;

            & em {
            color: ${({ theme }) => theme.colors.primary};
        }

        & span {
            text-transform: lowercase;
            font-style: italic;
            font-weight: 400;
            }
        }
    }
`

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    gap: 30px;

    & ${ImageWrapper} {
        width: 280px;
        height: 290px;
        margin-bottom: 10px;

        ${Image} {
            object-fit: contain;
        }
    }

    @media(min-width: 700px) {
        flex-direction: row;

        & ${ImageWrapper} {
            width: 370px;
            height: 550px;
        }
    }

    @media(min-width: 1200px) {
        & ${ImageWrapper} {
            width: 580px;
            height: 650px;
        }
    }
`

export const TextBox = styled.div`
    background-color: ${({ theme }) => theme.colors.fourth};
    border-radius: 12px;
    width: 320px;
    padding: 14px;

    & > ${Text} {
        text-transform: uppercase;
        line-height: 18px;
        text-align: center;

        span {
            text-transform: lowercase;
            font-style: italic;
        }
    }

    @media(min-width: 700px) {
        width: 350px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        ${Text} {
            font-size: 1.2rem;
            line-height: 20px;
        }
    }

    @media(min-width: 1200px) {
        width: 503px;
        height: 350px;

        ${Text} {
            font-size: 1.5rem;
            line-height: 30px;
            width: 400px;
        }
    }
`

