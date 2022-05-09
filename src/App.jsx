import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Testimonials />
            <Education />
            <Contact />
            <Footer />

        </>
    )
}

export default App