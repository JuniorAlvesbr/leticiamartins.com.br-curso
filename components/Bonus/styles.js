import styled from 'styled-components'
import { SubTitle, ImageWrapper, Text } from '../../object'

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
    padding-bottom: 20px;
    
    & > ${SubTitle} {
        font-size: 1.5rem;
        text-align: center;
        margin: 0 auto;
        padding: 25px 0;
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
            font-size: 1.15rem;
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

    & ${ImageWrapper} {
        width: 320px;
        height: 190px;
        object-fit: cover;
        margin-top: 40px;
    }

    & ${Text} {
    text-transform: uppercase;
    text-align: center;
    line-height: 1.5;
    max-width: 300px;

        s {
            text-decoration: line-through
        }

        span {
            font-size: 32px;
        }
    }

    @media(min-width: 700px) {
        & ${ImageWrapper} {
            width: 500px;
            height: 280px;
        }

        & ${Text} {
            max-width: 450px;
            font-size: 22px;
        }
    }

    @media(min-width: 1024px) {
        & ${ImageWrapper} {
            width: 600px;
            height: 350px;
        }
    }
`

