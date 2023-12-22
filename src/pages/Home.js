import React from "react"

import "./animations.css"

import Cpp from "./icons/C++ Logo Inverted.png"
import Java from "./icons/Java Logo Inverted.png"
import Python from "./icons/Python Logo Inverted.png"
import JavaScript from "./icons/JavaScript Logo Inverted.png"
import CSS from "./icons/Css Logo Inverted.png"
import HTML from "./icons/HTML Logo Inverted.png"
import GoldLogo from "./icons/MyLogoGold.png"
import GoldCircle from "./icons/GoldLogoCircle.png"

import placeholder from "./placeholder.png"

const Home = () => {

    const homeheading = {
        background: 'black',
        margin: 'auto',
        marginTop: '0px',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '30px',
        color: "#EDC25E",
    }

    const bubble_paragraph = {

        //background: 'white',
        fontSize: '23px',
        width: '50%',
        //borderRadius: '25px',
        fontFamily: 'sans-serif',
        marginBottom: '0px',
        marginLeft: '0px',
        marginRight: '0px',
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
    const divsplitlist = {
        background: 'black',
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: "80%",
        textAlign: 'center',
        margin: 'auto'
    }

    const back = {
        background: 'black'
    }

    const seperator = {
        background: '#9A7623',
        width: "100%",
        height: "20px",
        marginTop: "20px",
        marginBottom: "20px"

    }

    const dash = {
        background: '#9A7623',
        width: "35%",
        height: "5px",
        margin: "auto",
        color: '#9A7623'
    }

    const imagecol = {
        background: 'black',
        marginBottom: '40px',
        width: '33%',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color:'white',
        textAlign: 'center'
    }

    const logo = {
        marginTop: "70px",
        width: '35%'
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

            <h1 style={homeheading}>
                Markian's Skills
            </h1>

            <div style={divsplit}>
                <div style={imagecol} className="fade">
                    <img src={Cpp} alt="C++ Logo" style={fill}/>
                    <p> C++ </p>
                </div>

                <div style={imagecol} className="fade">
                    <img src={Java} alt="Java Logo" style={fill}/>
                    <p> Java </p>
                </div>

                <div style={imagecol} className="fade">
                    <img src={Python} alt="Python Logo" style={fill}/>
                    <p> Python </p>
                </div>

            </div>

            <div style={divsplit}>
                <div style={imagecol} className="fade">
                    <img src={JavaScript} alt="JavaScript Logo" style={fill}/>
                    <p> JavaScript </p>
                </div>

                <div style={imagecol} className="fade">
                    <img src={CSS} alt="CSS Logo" style={fill}/>
                    <p> CSS </p>
                </div>

                <div style={imagecol} className="fade">
                    <img src={HTML} alt="HTML Logo" style={fill}/>
                    <p> HTML </p>
                </div>

            </div>

            <div style={seperator}></div>

            <div style={divsplitlist}>

                <div style={bubble_paragraph}>
                    <h4 style={smallheight} className="fade">
                        Frameworks
                    </h4>
                    <hr style={dash} className="fade"/>
                    <p style={smallheight} className="fade">
                        ReactJS
                    </p>
                    <p style={smallheight} className="fade">
                        PyGame
                    </p>
                    <p style={smallheight} className="fade">
                        Qt GUI
                    </p>
                    <p style={smallheight} className="fade">
                        Swing GUI
                    </p>
                    <p style={smallheight} className="fade">
                        Node.js
                    </p>

                    <p></p>
                </div>

                <div className="fade">
                    <img src={GoldCircle} alt="Website Logo" style={logo}/>
                </div>

                <div style={bubble_paragraph}>
                    <h4 style={smallheight} className="fade">
                        Personal Interests
                    </h4>
                    <hr style={dash} className="fade"/>
                    <p style={smallheight} className="fade">
                        Discrete Math
                    </p>
                    <p style={smallheight} className="fade">
                        Finance
                    </p>
                    <p style={smallheight} className="fade">
                        Body Building
                    </p>
                    <p style={smallheight} className="fade">
                        Gaming
                    </p>
                    <p style={smallheight} className="fade">
                        Golf
                    </p>

                    <p></p>
                </div>
            </div>

            <div style={seperator}></div>

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