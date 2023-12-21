import React from "react"

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