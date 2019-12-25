import React , { useState }from 'react';
import './Portfolio.css';
import ProjectThumb from './ProjectThumb/ProjectThumb';
import projects from './Projects';
const Portfolio = ()=> {



    

    return (
        <div className="Portfolio">
            <h1>Portfolio</h1>
            <div className="Projects">
               {
                   projects.map(val =>(
                       <ProjectThumb
                       title={val.title}
                       info={val.info}
                       picture={val.picture}
                       src={val.src}
                       />
                ))
               } 
               </div>
        </div>
    )
}

export default Portfolio;