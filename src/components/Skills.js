

import React from 'react';
import Progress from './Progress'

const Skills = () => {

    return (
        <section id="skills" className="skills section-bg">



            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p></p>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">

                        <span>HTML , CSS , JQuery , Bootstarp</span>
                        <Progress done="90" />

                        <span>Javascript</span>
                        <Progress done="75" />

                        <span>React JS</span>
                        <Progress done="60" />

                        <span>Next JS</span>
                        <Progress done="60" />

                        <span>Angular JS / Angular</span>
                        <Progress done="80" />
                        <span>Node JS</span>
                        <Progress done="70" />
                    </div>
                    <div className="col-lg-6">

                        <span>Php [ CI ]</span>
                        <Progress done="80" />

                        <span>.NET MVC , C#</span>
                        <Progress done="90" />

                        <span>JAVA EE </span>
                        <Progress done="90" />

                        <span>SQL </span>
                        <Progress done="80" />

                        <span>Swift</span>
                        <Progress done="50" />

                        <span>OOP Concept</span>
                        <Progress done="80" />
                    </div>
                </div>



            </div>




        </section >
    )
}

export default Skills