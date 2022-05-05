import { useState, useEffect } from 'react'
import { Link, Wrapper, FacebookIcon, InstagramIcon, ToTop } from './styles'

export default function SocialButton() {
    const [isActive, setIsActive] = useState(false)

    const handleScroll = () => {
        let scroll = window.scrollY

        if (scroll > 500) {
            setIsActive(true)
            return
        }

        setIsActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <Wrapper active={isActive}>
            <Link href="https://facebook.com/leticiamartinsorganizer"><FacebookIcon /></Link>
            <Link href="https://www.instagram.com/leticiamartins.organizer"><InstagramIcon /></Link>
            <a href="#top"><ToTop /></a>
        </Wrapper>
    )
}