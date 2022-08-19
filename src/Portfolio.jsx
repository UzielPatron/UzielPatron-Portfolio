import React from 'react'
import { AboutMe } from './components/AboutMe';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';

import './stylesheets/Portfolio.css';

export const Portfolio = () => {
    
        

    return (
        <>
            <header>
                <NavBar />
            </header>
            <section className="section-home">
                <Home />
            </section>

            <div className="sections-background">
                <section id="section-technologies">
                    <Technologies />
                </section>
                <section>
                    <Projects />
                </section>
                <section>
                    <AboutMe />
                </section>
            </div>
        </>
  )
}
