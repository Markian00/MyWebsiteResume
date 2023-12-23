import React from "react"

import "./Home.css"

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

    const button_paragraph = {
        textAlign: 'center',
        background: '#EDC25E',
        fontSize: '18px',
        padding: '40px',
        width: '100%',
        fontFamily: 'sans-serif',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'block',
        color: 'black',
        lineHeight: '40px',
        boxSizing: 'borderBox'
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

    const icon = {
        marginRight: '25%',
        marginLeft:'25%',
        textAlign: 'center'
    }

    const divsplit = {
        background: 'black',
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
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

    const close = {
        marginBottom: '0px',
        marginTop: '0px',
        fontWeight: 'bold'
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
                    <img src={Cpp} alt="C++ Logo" style={icon}/>
                    <div className='box'>
                        <p style={close}>
                            C++ Tools:
                        </p>
                        <p>
                            Qt Creator
                        </p>
                    </div>
                </div>

                <div style={imagecol} className="fade">
                    <img src={Java} alt="Java Logo" style={icon}/>
                    <div className='box'>
                        <p style={close}>
                            Java Tools:
                        </p>
                        <p>
                            Swing UI
                        </p>
                    </div>
                </div>

                <div style={imagecol} className="fade">
                    <img src={Python} alt="Python Logo" style={icon}/>
                    <div className='box'>
                        <p style={close}>
                            Python Tools:
                        </p>
                        <p>
                            Pandas, PyGame
                        </p>
                    </div>
                </div>

            </div>

            <div style={divsplit}>
                <div style={imagecol} className="fade">
                    <img src={JavaScript} alt="JavaScript Logo" style={icon}/>
                    <div className='box'>
                    <p style={close}>
                            JavaScript Tools:
                        </p>
                        <p>
                            Node.JS, React
                        </p>
                    </div>

                </div>

                <div style={imagecol} className="fade">
                    <img src={CSS} alt="CSS Logo" style={icon}/>
                    <div className='box'>
                        <pre style={close}>
                            {"\nCSS"}
                        </pre>
                    </div>
                </div>

                <div style={imagecol} className="fade">

                    <img src={HTML} alt="HTML Logo" style={icon}/>
                    <div className='box'>
                        <pre style={close}>
                            {"\nHTML"}
                        </pre>
                    </div>
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

            <div style={divsplitlist}>
                <a href="https://github.com/Markian00" style={centered}>
                    <button style={button_paragraph}>
                        GitHub
                    </button>
                </a>
                <a href="www.linkedin.com/in/markian-voronovych-1b930322b" style={centered}>
                    <button style={button_paragraph}>
                        LinkedIn
                    </button>
                </a>
                <a href="https://app.joinhandshake.com/stu/users/45887067" style={centered}>
                    <button style={button_paragraph}>
                        HandShake
                    </button>
                </a>
            </div>
            <img className="fade" src={placeholder} alt="Markian's Face" style={fill}/>


        </>
    );
};

export default Home

//CODE BY MARKIAN VORONOVYCH 2023