import React from 'react'
import resume from '../../assets/Resume_2022.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Contact me</a>
        </div>
    )
}

export default CTA