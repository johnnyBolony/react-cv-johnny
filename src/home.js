import React from 'react';
import './Home.css';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Cv from './components/Cv/Cv';
import Portfolio from './components/Portfolio/Portfolio';
//import Content from './components/Content/Content'

const Home = ()=> {

    return(
        <>
        <Main/>
        <div className="Component">
            
            <div className="Block">
                <Cv/>
                <Contact/>
            </div>
            <div className="Block">
                <Portfolio/>
                </div>
            </div>
        
        
        </>
    )
}

export default Home;