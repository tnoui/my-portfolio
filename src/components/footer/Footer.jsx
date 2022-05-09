import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Tarek</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com"><BsLinkedin size={20} /></a>
            </div>

        </footer>
    )
}

export default Footer