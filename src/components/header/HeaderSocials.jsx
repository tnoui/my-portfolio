import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/tarek-noui-a4328222b/" target="_blank"><BsLinkedin size={40} /></a>
            <a href="https://github.com/tnoui" target="_blank"><FaGithub size={40} /></a>
        </div>
    )
}

export default HeaderSocials