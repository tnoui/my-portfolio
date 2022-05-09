import React from 'react'
import './testimonials.css'
import { IoLogoPython } from 'react-icons/io'
import { FaJava } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { IoLogoHtml5 } from 'react-icons/io'
import { IoLogoCss3 } from 'react-icons/io'
import { SiCplusplus } from 'react-icons/si'
import { SiC } from 'react-icons/si'
import { SiReact } from 'react-icons/si'



const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Skills</h5>
            <h2> I have</h2>
            <div className="container testimonials__container">

                <div className="testimonials__backend">
                    <h3>Backend Developement</h3>
                    <div className="testimonials__content">
                        <article className="testimonials__details">
                            <IoLogoPython className='testimonials__details-icon' size={70} />

                        </article>
                        <article className="testimonials__details">
                            <FaJava className='testimonials__details-icon' size={70} />

                        </article>
                        <article className="testimonials__details">
                            <SiCplusplus className='testimonials__details-icon' size={70} />

                        </article>
                        <article className="testimonials__details">
                            <SiC className='testimonials__details-icon' size={70} />

                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}

                <div className="testimonials__frontend">
                    <h3>Frontend Developement</h3>
                    <div className="testimonials__content">
                        <article className="testimonials__details">
                            <SiJavascript className='testimonials__details-icon' size={70} />

                        </article>
                        <article className="testimonials__details">
                            <IoLogoHtml5 className='testimonials__details-icon' size={70} />

                        </article>
                        <article className="testimonials__details">
                            <IoLogoCss3 className='testimonials__details-icon' size={70} />

                        </article>
                        <article className="testimonials__details">
                            <SiReact className='testimonials__details-icon' size={70} />

                        </article>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Testimonials