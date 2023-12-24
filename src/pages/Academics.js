import React from "react"
import home from "./Home";
import UM from "./icons/University of Michigan Image.jpg"
import UT from "./icons/University of Toronto Image.jpg"
import PSI from "./icons/PSI.jpeg"
import Collapsible from 'react-collapsible'

const homeheading = {
    margin: 'auto',
    padding: '0px',
    textAlign: 'center',
    fontFamily: 'Andale Mono, monospace',
    fontWeight: 'bold',
    fontSize: '57px',
    marginTop: '50px',
    color: '#d0b36d'
}

const dash = {
    background: '#d0b36d',
    height: '10px',
    width: '40%',
    marginTop: "40px",
    marginLeft: '30%'
}

const divsplit = {
    //background: 'black',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '0px',
    width: "85%"
}

const university_text = {
    background: '#f9f0d8',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '0px',
    width: "100%",
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1.25vw',
    fontWeight: 'normal',
}

const university_paragraph = {
    marginLeft: '5%',
    width: '45%'
}

const uni_image = {
    width: '50%'
}

const gpa_paragraph = {
    textAlign: 'center',
    background: '#d0b36d',
    fontSize: '8vw',
    padding: '5%',
    width: '80%',
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

const dropwindow = {
    lineHeight: '80px',
    borderRadius: '1vw',
    marginLeft: "12%",
    marginRight: '12%',
    width: '76%',
    background: '#d0b36d',
    textAlign: 'center',
    fontFamily: 'Andale Mono, monospace',
    fontSize: '3vw',
    fontWeight: 'bold',
    marginBottom: '70px'

}

const collapse={
    width: '100%',
    padding: '20%',
    marginTop: '100px',
    textAlign: 'center'
}

const fill = {
    width: '100%'
}

const annotation = {
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontSize: '1.3vw',
    fontFamily: 'Andale Mono, monospace',
    marginTop: '-15%'
}

const rmargin = {
    marginBottom: '5px',
    marginTop: '10px',
    textAlign: 'left',
    lineHeight: '1.3vw',
    color: 'black',
    fontWeight: 'normal'
}

const Academics = () => {
    window.scrollTo(0,0)
    return (
        <>
            <h1 style={homeheading}>
                My Education
            </h1>
            <hr style={dash}/>
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

            <div style={dropwindow}>
                <Collapsible trigger="University of Michigan (2023 - 2025)" style={collapse}>
                    <div style={university_text}>
                        <div style={divsplit}>
                            <div style={uni_image}>
                                <img src={UM} alt="University of Michigan" style={fill}/>
                                <p style={rmargin}>
                                    Email For Full Transcript
                                </p>
                                <p style={rmargin}>
                                    Other Crucial Classes:
                                </p>
                                <a href='https://dept.math.lsa.umich.edu/courses/116/1Syllabus-F23.html'>
                                    <p style={rmargin}>
                                        MATH116: Calculus 2
                                    </p>
                                </a>
                                <a href='https://dept.math.lsa.umich.edu/courses/214/syllabus.html'>
                                    <p style={rmargin}>
                                        MATH214: Applied Linear Algebra (In Progress)
                                    </p>
                                </a>
                            </div>
                            <div style={university_paragraph}>
                                <p style={rmargin}>
                                    Country: United States
                                </p>
                                <p style={rmargin}>
                                    City: Ann Arbor, MI
                                </p>
                                <p style={rmargin}>
                                    Declared Major: Computer Science
                                </p>
                                <p style={rmargin}>
                                    Start Month: January 2023
                                </p>
                                <p style={rmargin}>
                                    Graduation Month: May 2025
                                </p>
                                <p></p>
                                <p style={rmargin}>
                                    Computer Science Classes Taken:
                                </p>
                                <a href='https://eecs183.github.io/eecs183.org/#:~:text=EECS%20183%20is%20an%20introductory,problem%2Dsolving%20and%20algorithmic%20thinking.'>
                                    <p style={rmargin}>
                                        EECS 183: Elementary Programming Concepts
                                    </p>
                                </a>
                                <a href='https://eecs280.org/syllabus.html#:~:text=EECS%20280%20is%20a%20second,Recursion'>
                                    <p style={rmargin}>
                                        EECS 280: Programming and Intro Data Structures
                                    </p>
                                </a>
                                <a href='https://www.eecs.umich.edu/courses/eecs281/syllabus#:~:text=EECS%20281%20is%20an%20introductory,algorithms%20at%20the%20undergraduate%20level.'>
                                    <p style={rmargin}>
                                        EECS 281: Data Structures and Algorithms
                                    </p>
                                </a>
                                <a href='https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-301/#:~:text=EECS%20301%3A%20Probabilistic%20Methods%20in%20Engineering&text=This%20course%20covers%20basic%20concepts%20of%20probability%20theory%20and%20random%20processes.'>
                                    <p style={rmargin}>
                                        EECS 301: Probabilistic Methods in Engineering (In Progress)
                                    </p>
                                </a>
                                <a href='https://eecs370.github.io/'>
                                    <p style={rmargin}>
                                        EECS 370: Intro to Computer Organization (In Progress)
                                    </p>
                                </a>
                                <a href='https://eecs376.org/'>
                                    <p style={rmargin}>
                                        EECS 376: Foundations of Computer Science (In Progress)
                                    </p>
                                </a>

                            </div>
                        </div>
                        <hr/>

                    </div>
                </Collapsible>
            </div>

            <div style={dropwindow}>
                <Collapsible trigger="University of Toronto (2021 - 2022)" style={collapse}>
                    <div style={university_text}>
                        <div style={divsplit}>
                            <div style={uni_image}>
                                <img src={UT} alt="University of Toronto" style={fill}/>
                                <p style={rmargin}>
                                    Other Crucial Classes:
                                </p>
                                <a href='https://artsci.calendar.utoronto.ca/course/mat135h1'>
                                    <p style={rmargin}>
                                        MAT135H1: Calculus I
                                    </p>
                                </a>
                                <a href='https://artsci.calendar.utoronto.ca/course/mat136h1'>
                                    <p style={rmargin}>
                                        MAT136H1: Calculus II
                                    </p>
                                </a>
                            </div>
                            <div style={university_paragraph}>
                                <p style={rmargin}>
                                    Country: Canada
                                </p>
                                <p style={rmargin}>
                                    City: Toronto, ON
                                </p>
                                <p style={rmargin}>
                                    Declared Major: Computer Science
                                </p>
                                <p style={rmargin}>
                                    Start Month: September 2021
                                </p>
                                <p style={rmargin}>
                                    Transfer Month: December 2022
                                </p>
                                <p></p>
                                <p style={rmargin}>
                                    Computer Science Classes Taken:
                                </p>
                                <a href='https://artsci.calendar.utoronto.ca/course/csc108h1'>
                                    <p style={rmargin}>
                                        CSC108H1: Introduction to Computer Programming
                                    </p>
                                </a>
                                <a href='https://artsci.calendar.utoronto.ca/course/csc148h1'>
                                    <p style={rmargin}>
                                        CSC148H1: Introduction to Computer Science
                                    </p>
                                </a>
                                <a href='https://artsci.calendar.utoronto.ca/course/csc165h1'>
                                    <p style={rmargin}>
                                        CSC165H1: Mathematical Expression and Reasoning for Computer Science
                                    </p>
                                </a>
                                <a href='https://artsci.calendar.utoronto.ca/course/csc207h1'>
                                    <p style={rmargin}>
                                        CSC207H1: Software Design
                                    </p>
                                </a>
                                <a href='https://artsci.calendar.utoronto.ca/course/csc236h1'>
                                    <p style={rmargin}>
                                        CSC236H1: Introduction to the Theory of Computation
                                    </p>
                                </a>
                            </div>
                        </div>
                        <hr/>

                    </div>
                </Collapsible>
            </div>

            <div style={dropwindow}>
                <Collapsible trigger="Highschool: PSI (IB Diploma)" style={collapse}>
                    <div style={university_text}>
                        <div style={divsplit}>
                            <div style={uni_image}>
                                <img src={PSI} alt="Pechersk School International" style={fill}/>
                            </div>
                            <div style={university_paragraph}>
                                <p style={rmargin}>
                                    Country: Ukraine
                                </p>
                                <p style={rmargin}>
                                    City: Kyiv
                                </p>
                                <p style={rmargin}>
                                    Diploma: International Baccalaureate
                                </p>
                                <p style={rmargin}>
                                    Graduation: June 2021
                                </p>
                                <p></p>
                                <p style={rmargin}>
                                    University Transfer Credit Classes:
                                </p>
                                <p style={rmargin}>
                                    IB History of Europe HL
                                </p>
                                <p style={rmargin}>
                                    IB Biology HL
                                </p>
                                <p style={rmargin}>
                                    IB Economics HL
                                </p>
                                <p></p>
                                <p style={rmargin}>
                                    Extracurriculars:
                                </p>
                                <p style={rmargin}>
                                    Head of Charitable Organization: Djerela Projects
                                </p>
                                <p style={rmargin}>
                                    Volunteer: Children of the World to Children of Ukraine
                                </p>
                            </div>
                        </div>
                        <hr/>

                    </div>
                </Collapsible>
            </div>

        </>

    );
};

export default Academics

//CODE BY MARKIAN VORONOVYCH 2023