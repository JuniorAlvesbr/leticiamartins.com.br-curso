import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, Icon } from './styles'

export default function TopButton() {
    const [isActive, setIsActive] = useState(false)

    const handleScroll = () => {
        let scrollY = window.scrollY

        if (scrollY > 550) {
            setIsActive(true)
            return
        }

        setIsActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <Link href="#toTop">
            <Button active={isActive}>
                <Icon />
            </Button>
        </Link>
    )
}