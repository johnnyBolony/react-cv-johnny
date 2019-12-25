import React from 'react';
import './ProjectThumb.css';
const ProjectThumb = ({title,info,picture,src})=> {
    return (
        <div className="ProjectThumb">
            
            
            <a href={src}>
            <img src={picture}></img>
            <h3>{title}</h3>
            <p>{info}</p>
                </a>
        </div>
    )
}

export default ProjectThumb;