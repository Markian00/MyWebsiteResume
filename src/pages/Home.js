import React from "react"

import "./animations.css"

import placeholder from "./placeholder.png"

const Home = () => {

    const rmargins = {
        marginTop: '0px',
        marginBottom: '0px'
    }

    const homeheading = {
        background: 'white',
        margin: 'auto',
        padding: '0px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '50px',
    }

    const bubble_paragraph_left = {

        //background: 'linear-gradient(90deg, rgba(158,172,231,1) 0%, rgba(137,138,241,1) 100%)',
        fontSize: '23px',
        width: '50%',
        //borderRadius: '25px',
        fontFamily: 'sans-serif',
        marginBottom: '20px',
        //marginRight: '20px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color: '#ffffff',
        lineHeight: '40px'
    }

    const bubble_paragraph_right = {

        //background: 'white',
        fontSize: '23px',
        width: '50%',
        //borderRadius: '25px',
        fontFamily: 'sans-serif',
        marginBottom: '20px',
        //marginLeft: '20px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color: 'white',
        lineHeight: '40px'
    }

    const button_paragraph_right = {
        textAlign: 'center',
        maxWidth: '500px',
        background: 'linear-gradient(90deg, rgba(72,84,169,1) 0%, rgba(61,76,154,1) 100%)',
        fontSize: '23px',
        padding: '40px',
        borderRadius: '25px',
        fontFamily: 'sans-serif',
        marginBottom: '20px',
        marginLeft: '10px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'block',
        color: '#ffffff',
        lineHeight: '40px'
    }

    const button_paragraph_center = {
        textAlign: 'center',
        maxWidth: '500px',
        background: 'linear-gradient(90deg, rgba(92,99,194,1) 0%, rgba(78,88,176,1) 100%)',
        fontSize: '23px',
        padding: '40px',
        borderRadius: '25px',
        fontFamily: 'sans-serif',
        marginBottom: '20px',
        marginRight: '10px',
        marginLeft: '10px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'block',
        color: '#ffffff',
        lineHeight: '40px'
    }

    const button_paragraph_left = {
        textAlign: 'center',
        maxWidth: '500px',
        background: 'linear-gradient(90deg, rgba(106,110,212,1) 0%, rgba(96,102,199,1) 100%)',
        fontSize: '23px',
        padding: '40px',
        borderRadius: '25px',
        fontFamily: 'sans-serif',
        marginBottom: '20px',
        marginRight: '10px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'block',
        color: '#ffffff',
        lineHeight: '40px'
    }

    const bubble_standard = {
        textAlign: 'center',
        fontSize: '23px',
        padding: '30px',
        //borderRadius: '25px',
        fontFamily: 'sans-serif',
        marginBottom: '0px',
        marginRight: '100px',
        marginLeft: '100px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color: 'black',
        lineHeight: '40px'
    }

    const smallheight = {
        fontSize: '27px',
        margin: 'auto',
        marginTop: '10px',
        marginBottom: '10px'
    }

    const welcome = {

        background: '#EDC25E',
        fontSize: '23px',
        width: '100%',
        //borderRadius: '25px',
        marginTop: '-5px',
        marginBottom: '-30px',
        fontFamily: 'sans-serif',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color: 'black',
        lineHeight: '40px'
    }

    const margin_right = {

        //background: '#9e7db1',
        fontSize: '23px',
        borderRadius: '25px',
        fontFamily: 'sans-serif',
        width: '50%',
        marginTop: '-10px',
        //marginRight: '10px',
        marginLeft: '100px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        padding: '30px',
        color: '#ffffff',
        lineHeight: '40px'
    }

    const centered = {
        margin: 'auto',
        textAlign: 'center'
    }

    const fill = {
        width: '50%',
        marginRight: '25%',
        marginLeft: '25%'
    }

    const divsplit = {
        background: 'black',
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: "100%"
    }

    const back = {
        background: 'black'
    }

    const vertdivide = {
        background: ''
    }

    const seperator = {
        background: '#9A7623',
        width: "100%",
        height: "20px"
    }

    return (
        <>

            <div style={welcome}>
                <div style={bubble_standard}>
                    <h1 style={centered}> Welcome </h1>
                    <p>
                        Hello! Welcome to my website for employers, my name is <u>Markian Voronovych. </u>
                        On this website you'll be able to easily locate <u>my resume, my projects</u>, and
                        <u> anything else </u> you might want to know about me. If you are here, I have probably
                        applied to work at your company. I believe I am a <u>self-starter</u>, a
                        <u> hard worker</u>, and a <u>creative problem-solver</u>. I hope that your journey through
                        my
                        website brings you to the same conclusion.
                    </p>
                </div>
            </div>
            <div style={seperator}></div>

            <div style={divsplit}  className="fade">
                <div style={bubble_paragraph_left}>
                    <h4 style={smallheight}>
                        Technical Skills
                    </h4>
                    <p style={smallheight}>
                        C++
                    </p>
                    <p style={smallheight}>
                        Python
                    </p>
                    <p style={smallheight}>
                        Java
                    </p>
                    <p style={smallheight}>
                        JavaScript
                    </p>
                    <p style={smallheight}>
                        Node.js
                    </p>
                    <p style={smallheight}>
                        React
                    </p>
                    <p style={smallheight}>
                        PyGame
                    </p>
                    <p style={smallheight}>
                        Qt GUI Design
                    </p>
                    <p style={smallheight}>
                        Swing GUI Design
                    </p>

                    <p></p>
                </div>
                <div style={bubble_paragraph_right}>
                    <h4 style={smallheight}>
                        Personal Interests
                    </h4>
                    <p style={smallheight}>
                        Hackathons
                    </p>
                    <p style={smallheight}>
                        Discrete Math
                    </p>
                    <p style={smallheight}>
                        Psychology
                    </p>
                    <p style={smallheight}>
                        Finance
                    </p>
                    <p style={smallheight}>
                        Gaming
                    </p>
                    <p style={smallheight}>
                        Body Building
                    </p>
                    <p style={smallheight}>
                        Nutrition
                    </p>
                    <p style={smallheight}>
                        Golf
                    </p>
                    <p style={smallheight}>
                        Bouldering
                    </p>
                    <p></p>
                </div>
            </div>

            <div style={back}>
                <img className="fade" src={placeholder} alt="Markian's Face" style={fill}/>
            </div>

            <div style={divsplit}>
                <a href="https://github.com/Markian00" style={centered}>
                    <button style={button_paragraph_left}>
                        GitHub
                    </button>
                </a>
                <a href="https://github.com/Markian00" style={centered}>
                    <button style={button_paragraph_center}>
                        LinkedIn
                    </button>
                </a>
                <a href="https://app.joinhandshake.com/stu/users/45887067" style={centered}>
                    <button style={button_paragraph_right}>
                        HandShake
                    </button>
                </a>
            </div>


        </>
    );
};

export default Home

//CODE BY MARKIAN VORONOVYCH 2023