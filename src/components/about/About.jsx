import React from 'react'
import './about.css'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__content">

                <p>

                    I'm a second year Computer Science student at the Université de Montréal looking for an
                    intership that will allow me to utilize my problem solving skills and learn new technologies
                    to further enhance my abilities in the computer science field.
                </p>
                <div className="talk">
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About