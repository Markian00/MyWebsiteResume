import React from "react"

import "./Home.css"

import Cpp from "./icons/C++ Logo Inverted.png"
import Java from "./icons/Java Logo Inverted.png"
import Python from "./icons/Python Logo Inverted.png"
import JavaScript from "./icons/JavaScript Logo Inverted.png"
import CSS from "./icons/Css Logo Inverted.png"
import HTML from "./icons/HTML Logo Inverted.png"
import cloudIcon from "./icons/inverted Server Icon.png"
import designIcon from "./icons/Design Icon Inverted.png"
import GoldCircle from "./icons/GoldLogoCircle.png"
import selfImage from "./icons/MeBlackAndWhite.jpg"

import GitHub from "./icons/GitHub Icon Inverted.png"
import LinkedIn from "./icons/LinkedIn Icon Inverted.png"
import Handshake from "./icons/Handshake Icon Inverted.png"

import placeholder from "./placeholder.png"
import languageIcon from "./icons/Languages Icon Inverted.png";

const Home = () => {

    const homeheading = {
        background: 'black',
        margin: 'auto',
        marginTop: '0px',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'Andale Mono, monospace',
        fontSize: '2.5vw',
        fontWeight: 'bold',
        marginBottom: '3.4vw',
        color: "white",
    }

    const bubble_paragraph = {

        //background: 'white',
        fontSize: '1vw',
        width: '50%',
        //borderRadius: '25px',
        fontFamily: 'Andale Mono, monospace',
        marginBottom: '0px',
        marginLeft: '0%',
        marginRight: '0%',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color: 'white',
        lineHeight: '2.4vw'
    }

    const button_paragraph = {
        borderRadius: '1.2vw',
        textAlign: 'center',
        fontSize: '2vw',
        marginLeft: '30%',
        marginRight: '30%',
        width: '40%',
        fontFamily: 'Andale Mono, monospace',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'block',
        color: 'black',
        lineHeight: '2.4vw',
        boxSizing: 'borderBox',
        borderStyle: 'solid',
        outline: 'none',
    }

    const cloud_paragraph = {
        textAlign: 'center',
        background: '#d0b36d',
        fontSize: '2vw',
        padding: '5%',
        width: '60%',
        fontFamily: 'Andale Mono, monospace',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'block',
        color: 'black',
        lineHeight: '4vw',
        boxSizing: 'borderBox',
        borderRadius: '1vw',
        marginBottom: '100px',
        marginTop: '100px',
        marginLeft: '4%',
        marginRight: '4%',

    }

    const bubble_standard = {
        textAlign: 'center',
        fontSize: '1.4vw',
        padding: '2vw',
        //borderRadius: '25px',
        fontFamily: 'Andale Mono, monospace',
        marginBottom: '0px',
        marginRight: '100px',
        marginLeft: '100px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color: 'black',
        lineHeight: '2.4vw'
    }

    const smallheight = {
        fontSize: '2vw',
        margin: 'auto',
        marginTop: '10px',
        marginBottom: '10px'
    }

    const welcome = {

        background: '#EDC25E',
        fontSize: '1.7vw',
        width: '100%',
        //borderRadius: '25px',
        marginTop: '-5px',
        marginBottom: '0px',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        color: 'black',
        lineHeight: '2.4vw'
    }

    const centered = {
        margin: 'auto',
        textAlign: 'center'
    }

    const fill = {
        width: '80%',
        marginRight: '10%',
        marginLeft: '10%',
        maxWidth: '10000px'
    }

    const icon = {
        width: '50%',
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
        height: "10px",
        marginTop: "0px",
        marginBottom: "0px",
        color: '#9A7623'

    }

    const dash = {
        background: 'white',
        width: "84%",
        height: "3px",
        marginLeft: "7%",
        marginBottom: '30px',
        color: 'white'
    }

    const blackdash = {
        background: 'black',
        width: "84%",
        height: "6px",
        outline: 'none',
        borderStyle: 'solid',
        borderColor: 'black',
        marginLeft: "7%",
        marginBottom: '30px',
        color: 'black'
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
        fontWeight: 'bold',
        fontSize: '1.3vw'
    }

    const logo = {
        marginTop: "70px",
        width: '35%'
    }

    const cloud = {
        width: '22%',
        marginTop: '80px',
        marginBottom: '100px',
        marginLeft: '3%',
        marginRight: '3%'

    }

    const namebubble ={
        width: '30%',
        marginLeft: '10%',
        background: 'black',
        color: 'white',
        fontSize: '4vw',
        fontFamily: 'Andale Mono, monospace',
        fontWeight: 'bold',
        marginBottom: '0px',
        marginTop: '60px',
        lineHeight: '3.6vw'
    }

    const careerbubble ={

        width: '30%',
        marginLeft: '10%',
        background: 'black',
        color: 'white',
        fontSize: '2.2vw',
        fontFamily: 'Courier New, monospace',
        marginTop: '5px'
    }

    const annotation = {
        width: '20%',
        textAlign: 'center',
        marginLeft: '40%',
        marginRight: '40%',
        background: 'black',
        color: 'white',
        fontSize: '1.1vw',
        fontFamily: 'Courier New, monospace',
        marginTop: '0px'
    }

    const scale = {
        fontSize: '1.3vw'
    }

    window.scrollTo(0,0)

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
            <div style={seperator}></div>

            <div className="fade">
                <p style={namebubble}> Markian Voronovych </p>
                <p style={careerbubble}> Software Engineer </p>
                <hr style={dash}/>
                <img src={selfImage} alt="Markian Voronovych" style={fill}/>
                <hr style={dash}/>

                <div style={divsplit}>
                    <div style={imagecol}>
                        <a href="https://github.com/Markian00" style={centered}>
                            <button style={button_paragraph} className='btn'>

                                <img src={GitHub} alt='github' style={fill}/>
                            </button>
                        </a>

                    </div>
                    <div style={imagecol}>
                        <a href="https://www.linkedin.com/in/markian-voronovych-1b930322b" style={centered}>
                            <button className='btn' style={button_paragraph}>

                                <img src={LinkedIn} alt='github' style={fill}/>
                            </button>
                        </a>
                    </div>
                    <div style={imagecol}>
                        <a href="https://app.joinhandshake.com/stu/users/45887067" style={centered}>
                            <button className='btn' style={button_paragraph}>

                                <img src={Handshake} alt='github' style={fill}/>
                            </button>
                        </a>

                    </div>


                </div>

                <hr style={dash}/>

            </div>


            <div style={homeheading}>
                Markian's Skills
                <p style={annotation}>
                    Hover under the icons to see applicable frameworks
                </p>
            </div>


            <div style={divsplitlist}>
                <div style={imagecol} className="fade">
                <img src={Cpp} alt="C++ Logo" style={icon}/>
                    <div className='box'>
                        <p style={close}>
                            C++ Tools:
                        </p>
                        <p style={scale}>
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
                        <p style={scale}>
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
                        <p style={scale}>
                            Pandas, PyGame
                        </p>
                    </div>
                </div>

            </div>

            <div style={divsplitlist}>
                <div style={imagecol} className="fade">
                    <img src={JavaScript} alt="JavaScript Logo" style={icon}/>
                    <div className='box'>
                        <p style={close}>
                            JavaScript Tools:
                        </p>
                        <p style={scale}>
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

            <hr style={dash}/>

            <div style={divsplit}>
                <img src={cloudIcon} style={cloud} alt="Clip Art Server"/>
                <div style={cloud_paragraph}>
                    <h1 style={centered}>
                        Databases and The Cloud
                    </h1>
                    <hr style={blackdash}/>
                    <p>
                        Experience with AWS, Firebase and other Google Cloud Tools. In the process of learning SQL and
                        Vertex AI for upcoming projects.
                    </p>
                </div>
            </div>

            <hr style={dash}/>

            <div style={divsplit}>

                <div style={cloud_paragraph}>
                    <h1 style={centered}>
                        Design and Architecture
                    </h1>
                    <hr style={blackdash}/>
                    <p>
                        Lots of experience with building software in groups. Familiar with Solid Clean Architecture
                        Principles, Agile Methodology Software Development, and proper practice in several languages.
                    </p>
                </div>
                <img src={designIcon} style={cloud} alt="Clip Art Gears"/>
            </div>

            <hr style={dash}/>

            <div style={divsplit}>
                <img src={languageIcon} style={cloud} alt="Clip Art Text Bubble"/>
                <div style={cloud_paragraph}>
                    <h1 style={centered}>
                        Languages
                    </h1>
                    <hr style={blackdash}/>
                    <p>
                        I fluently speak English and have lots of experience with code documentation, essays and
                        presentations. I speak Ukrainian and Russian conversationally with good reading comprehension
                        and decent writing abilities.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home

//CODE BY MARKIAN VORONOVYCH 2023