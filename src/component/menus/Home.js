import React from "react";
import StartUps from "./StartUps";
import Investor from "./Investor";
import './Home.css'
const Home = () => {
    return(
        <div>
            <h2>Our Top Start-Ups</h2>
            <StartUps />
            <br />
            <h2>Our Top Investors</h2>
            <Investor />
        </div>
    )
}

export default Home;