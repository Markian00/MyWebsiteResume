import React from "react"
import home from "./Home";

const homeheading = {
    margin: 'auto',
    padding: '0px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '40px',
    marginTop: '50px',
    color: '#d0b36d'
}

const divsplit = {
    background: 'black',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '0px',
    width: "85%"
}

const gpa_paragraph = {
    textAlign: 'center',
    background: '#d0b36d',
    fontSize: '8vw',
    padding: '5%',
    width: '33%',
    fontFamily: 'Andale Mono, monospace',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    display: 'block',
    color: 'black',
    lineHeight: '4vw',
    boxSizing: 'borderBox',
    borderRadius: '4vw',
    marginBottom: '100px',
    marginTop: '50px',
    marginLeft: '6%',
    marginRight: '6%',
    fontWeight: 'bold'

}

const annotation = {
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontSize: '1.3vw',
    fontFamily: 'Andale Mono, monospace',
    marginTop: '-15%'
}
const Academics = () => {
    return (
        <>
            <h1 style={homeheading}>
                My University Education
            </h1>
            <div style={divsplit}>
                <p style={gpa_paragraph}>
                    <p style={annotation}>
                        Cumulative GPA 2023
                    </p>
                    3.77
                </p>
                <p style={gpa_paragraph}>
                    <p style={annotation}>
                        Semester GPA Fall 2023
                    </p>
                    3.92
                </p>
            </div>
        </>

    );
};

export default Academics

//CODE BY MARKIAN VORONOVYCH 2023