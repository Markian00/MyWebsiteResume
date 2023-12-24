import React from "react"

const margin_left = {

    background: '#d0b36d',
    fontSize: '23px',
    borderRadius: '25px',
    fontFamily: 'sans-serif',
    width: '50%',
    marginTop: '60px',
    marginRight: '100px',
    marginLeft: '50px',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    display: 'flex',
    padding: '30px',
    color: 'black',
    lineHeight: '40px'
}

const margin_right = {

    background: '#d0b36d',
    fontSize: '23px',
    borderRadius: '25px',
    fontFamily: 'sans-serif',
    width: '50%',
    marginTop: '60px',
    marginRight: '50px',
    marginLeft: '100px',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: '1',
    display: 'flex',
    padding: '30px',
    color: 'black',
    lineHeight: '40px'
}

const projheader = {
    
}

const centered = {
    margin: 'auto'
}

const gap = {
    marginTop: '100px'
}

const divsplit = {
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    width: "100%"
}
const Projects = () => {
    window.scrollTo(0,0)
    return (
        <div>
            <h1>Under Construction</h1>
            <div style={divsplit}>
                <div style={margin_right}>
                    <p>
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                    </p>

                </div>
                <div style={margin_left}>
                    <p>
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                    </p>

                </div>
            </div>
            <div style={divsplit}>
                <div style={margin_right}>
                    <p>
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                    </p>

                </div>
                <div style={margin_left}>
                    <p>
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                        In Progress - In Progress - In Progress - In Progress - In Progress - In Progress -
                    </p>

                </div>
            </div>
            <hr style={gap}/>
        </div>
    );
};

export default Projects

//CODE BY MARKIAN VORONOVYCH 2023