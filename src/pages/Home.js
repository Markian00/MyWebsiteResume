import React from "react"


const Home = () => {

    const homeheading = {
        margin: 'auto',
        padding: '0px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '50px',
    }

    const margin_left = {

        background: '#9e7db1',
        fontSize: '23px',
        borderRadius: '25px',
        fontFamily: 'sans-serif',
        width: '50%',
        marginTop: '20px',
        marginRight: '100px',
        marginLeft: '50px',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        display: 'flex',
        padding: '30px',
        color: '#ffffff',
        lineHeight: '40px'
    }

    const margin_right = {

        background: '#9e7db1',
        fontSize: '23px',
        borderRadius: '25px',
        fontFamily: 'sans-serif',
        width: '50%',
        marginTop: '20px',
        marginRight: '50px',
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
        margin: 'auto'
    }

    const divsplit = {
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: "100%"
    }

    return (
        <>
            <h1 style={homeheading}>Markian Voronovych</h1>
            <hr/>
            <div style={divsplit}>
                <div className="FacePhoto" style={margin_right}>
                    <img src="" alt="Markian Voronovych Portrait"/>
                </div>
                <div style={margin_left}>
                    <h1 style={centered}> Welcome </h1>
                    <p>
                        Hello! Welcome to my website for employers, my name is <u>Markian Voronovych. </u>
                        On this website you'll be able to easily locate <u>my resume, my projects</u>, and
                        <u> anything else </u> you might want to know about me. If you are here, I have probably
                        applied to work at your company. I believe I am a <u>self-starter</u>, a
                        <u> hard worker</u>, and a <u>creative problem-solver</u>. I hope that your journey through my
                        website brings you to the same conclusion.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home

//CODE BY MARKIAN VORONOVYCH 2023