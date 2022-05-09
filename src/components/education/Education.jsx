import React from 'react'
import './education.css'
import UDEM from '../../assets/udem.png'
import UMTL from '../../assets/umtl.png'
import CSL from '../../assets/csl2.png'

const Education = () => {
    return (
        <section id='education'>

            <h5>Background</h5>
            <h2>Education</h2>

            <div className="container education__container_1">
                <div className="education__image_1">
                    <img src={UMTL} alt="Université de Montréal" />
                </div>

                <div className="education__college">
                    <div className="education__description">
                        <h2>Université de Montréal</h2>
                        <h3>Bachelor's degree - Computer Science </h3>
                        <h3>2021-2023</h3>
                    </div>
                </div>

            </div>

            <div className="container education__container_2">
                <div className="education__image_2">
                    <img src={CSL} alt="CSL" />
                </div>

                <div className="education__college">
                    <div className="education__description">
                        <h2>Cégep de Saint-Laurent</h2>
                        <h3>Diplôme d'études collégiales - Sciences de la nature, Sciences pures et appliquées </h3>
                        <h3>2018-2020</h3>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Education