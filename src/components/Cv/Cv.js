import React from 'react';
import './Cv.css';
import mypicture from '../../pictures/Capture.PNG';
import rimon from "../../pictures/rimon.jpg";
import swrthmr from "../../pictures/swrthmr.jpg";
const Cv = ()=> {
    return (
        <div className="Cv">
            <img src={mypicture}></img>
            <h1>CV</h1>
            <p>Yonatan Goel,<br/>Currently Resides in Rehovot,<br/>Born at 1989 <br/>Phone: 054-5322381</p>
            
            <table cellspacing="10">
                        <tbody><tr>
                            <th><h5>Work</h5></th>
                            <th><h5>Description</h5></th>
                        </tr>
                        <tr>
                            <td>
                                <img src={rimon}></img>
                                <p>Tech Support at "Internet Rimon" (isp company) <br/> 2018 - Ongoing.</p>
                            </td>

                            <td>
                                <p>Tech support phone representive, assisting and finding solutions for rimon's customers in areas such as: connectivity issues, content filtering, application support and Router configuaration.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={swrthmr}></img>
                                <p>Salesman &amp; shift manager at "Sport Wertheimer" <br/> 2016-2017</p></td>
                            <td>
                                <p>
                                    Assisting customers in the sport equipment shop to find the right equipment for their physical-activity needs
                                </p>
                            </td>
                        </tr>
                        

                    </tbody></table>
        </div>
    )
}

export default Cv;