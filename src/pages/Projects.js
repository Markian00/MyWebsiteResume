import React from "react"
import Carousel from 'react-bootstrap/Carousel'

const gap = {
    marginTop: '3.7vw'
}

const carouselbox = {
    textAlign: 'center',
    background: '#d0b36d',
    borderRadius: '25px',
    fontFamily: 'Andale Mono, monospace',
    fontSize: 'calc(8px + 1vw)',
    width: '70%',
    marginTop: '10px',
    marginRight: '15%',
    marginLeft: '15%',
    marginBottom: '20px',
    padding: '2vw',
    color: 'black',
    lineHeight: 'calc(10px + 2vw)',
    height: 'calc(400px + 35vw)'
}

const smallcarouselbox = {
    textAlign: 'center',
    background: '#d0b36d',
    borderRadius: '25px',
    fontFamily: 'Andale Mono, monospace',
    fontSize: 'calc(8px + 1vw)',
    width: '70%',
    marginTop: '10px',
    marginRight: '15%',
    marginLeft: '15%',
    marginBottom: '20px',
    padding: '2vw',
    color: 'black',
    lineHeight: 'calc(10px + 2vw)',
    height: 'calc(240px + 22vw)'
}

const subheader = {
    textAlign: 'center',
    fontSize: 'calc(10px + 2vw)',
    width: '100%',
    margin: 'auto',
    //borderRadius: '25px',
    marginTop: '-5px',
    marginBottom: '4vw',
    flexBasis: '100%',
    flex: '1',
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 'calc(10px + 4vw)'
}

const header = {
    textAlign: 'center',
    background: 'black',
    fontSize: 'calc(10px + 3vw)',
    borderRadius: '25px',
    fontFamily: 'Andale Mono, monospace',
    margin: 'auto',
    padding: '2vw',
    color: 'white',
    lineHeight: '40px'
}

const specifics = {
    textAlign: 'center',
    background: 'black',
    fontSize: 'calc(6px + 1.3vw)',
    fontFamily: 'Andale Mono, monospace',
    margin: 'auto',
    marginTop: '-20px',
    padding: '2vw',
    color: 'white',
    lineHeight: '20px'
}

const annotation = {
    lineHeight: 'calc(10px + 1vw)',
    textAlign: 'left',
    fontFamily: 'Andale Mono, monospace',
    fontSize: 'calc(10px + 0.7vw)',
    fontWeight: 'bold'
}
const Projects = () => {
    window.scrollTo(0,0)
    return (
        <div>
            <h1 style={header}>Personal Projects</h1>
            <h1 style={specifics}>Available on Github</h1>
            <Carousel prevLabel = {null} nextLabel = {null} indicators={false}>
                <Carousel.Item>
                    <div style={smallcarouselbox}>
                        <h style={subheader}> The Website Resume</h>
                        <div style={gap}></div>
                        <p> This is the project you are currently viewing! I started this project with the intention of
                            displaying my resume in a more unique and attractive way. This project is my second time
                            using ReactJS and Bootstrap. My first time was when I worked for Legion DC Consulting.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: Javascript, JSX, CSS
                            and HTML
                        </p>
                        <p style={annotation}>
                            Tech Stack: ReactJS and Bootstrap, all run on AWS
                            amplify
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={smallcarouselbox}>
                        <h style={subheader}> Tic Tac Toe</h>
                        <div style={gap}></div>
                        <p> I made this project to refresh my knowledge of python and pygame before an online
                            assessment for BlackRock. The game has a simple UI that allows for Multiplayer and
                            Singleplayer play against a bot. Executable can be downloaded in GitHub.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: Python
                        </p>
                        <p style={annotation}>
                            Tech Stack: PyGame
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={smallcarouselbox}>
                        <h style={subheader}> Stock Information Site (In Progress)</h>
                        <div style={gap}></div>
                        <p> My backend is comprised of a MongoDB database and a data fetching and processing API. The API provides publicly available data on any stock. When provided with 2 stocks and a date the API returns correlation between them. The website allows for you to put in your portfolio data to give you a "Portfolio diversification" measure. It stores your portfolio data as part of your user info.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: Python, Javascript
                        </p>
                        <p style={annotation}>
                            Tech Stack: ReactJS, MongoDB, Node.js,
                        </p>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={smallcarouselbox}>
                        <h style={subheader}> Top Down Platformer (Failed)</h>
                        <div style={gap}></div>
                        <p> Project with 3 team members that was focused on building a simple platformer where the
                            player could interact with NPCs dynamically (Using LLM/ML). Failed
                            due to loss of our C# specialist. Python scripts that create text for the AI and enable
                            conversation are available upon request (My half of the project).
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: Python, C#
                        </p>
                        <p style={annotation}>
                            Tech Stack: Unity, Flask, RESTful API
                        </p>

                    </div>
                </Carousel.Item>
            </Carousel>
            <div style={gap}></div>


            <h1 style={header}>School Projects</h1>
            <h1 style={specifics}>Available only on Request</h1>
            <Carousel prevLabel = {null} nextLabel = {null} indicators={false}>
                <Carousel.Item>
                    <div style={carouselbox}>
                        <h style={subheader}> EECS370: Intro to Computer Organization</h>
                        <div style={gap}></div>
                        <p>
                            Project 1: Unassigned
                        </p>
                        <p>
                            Project 2: Unassigned
                        </p>
                        <p>
                            Project 3: Unassigned
                        </p>
                        <p>
                            Project 4: Unassigned
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: C++
                        </p>
                        <p style={annotation}>
                            University of Michigan: Ann Arbor
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselbox}>
                        <h style={subheader}> EECS281: Data Structures and Algorithms</h>
                        <div style={gap}></div>
                        <p>
                            Project 1: 3D Maze Solver using DFS, BFS and Route Tracing
                        </p>
                        <p>
                            Project 2: Zombie Tower Defense Game using priority queues and implementing templated
                            containers, inheritance and interface programming, streaming algorithms
                        </p>
                        <p>
                            Project 3: Online Banking System through hash tables, heaps and creating larger data
                            structures through composition
                        </p>
                        <p>
                            Project 4: Zoo Management System that implements optimization algorithms (eg. Traveling
                            Salesperson and Knapsack) as well as path finding algorithms like Djikstra's, Prim's and
                            Kruskall's.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: C++
                        </p>
                        <p style={annotation}>
                            University of Michigan: Ann Arbor
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselbox}>
                        <h style={subheader}> EECS280: Programming and Intro Data Structures</h>
                        <div style={gap}></div>
                        <p>
                            Project 1: Statistical Analysis, program data analysis for a study (different one selected
                            annually).
                        </p>
                        <p>
                            Project 2: Computer vision, resize an image without any visible visual distortion (size up
                            or size down)
                        </p>
                        <p>
                            Project 3: Euchre, simulate a game of Euchre and build a Euchre AI.
                        </p>
                        <p>
                            Project 4: Machine learning, use the UMich Piazza API to build and train an algorithm that
                            can label Piazza posts based on their content.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: C++
                        </p>
                        <p style={annotation}>
                            University of Michigan: Ann Arbor
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselbox}>
                        <h style={subheader}> EECS183: Elementary Programming Concepts</h>
                        <div style={gap}></div>
                        <p>
                            Project 1: Given an amount of loaves, calculate how much of each ingredient is needed to
                            bake them.
                        </p>
                        <p>
                            Project 2: Program a game of rock paper scissors allowing for singleplayer and multiplayer.
                        </p>
                        <p>
                            Project 3: Write a program that can encode and decode text using several ciphers
                        </p>
                        <p>
                            Project 4: Program a single player "Elevator Management" game and write a bot that maximizes
                            your score.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: C++
                        </p>
                        <p style={annotation}>
                            University of Michigan: Ann Arbor
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselbox}>
                        <h style={subheader}> CSC207H1: Intro to Software Design</h>
                        <div style={gap}></div>
                        <p>
                            Project: Working in a group of 5 people we built a mock online marketplace. This involved
                            building an in memory database and a UI in Swing. The focus of the project was how to use
                            SOLID principles for clean architecture to create a well-organized and scalable
                            implementation. Using GitHub for version control and project organization made the whole
                            group much more comfortable with programming in groups. After a semester of work we
                            successfully completed the app and presented it to our professors and TAs. The app supported
                            login, logout, ordering, payment and data verification.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: Java
                        </p>
                        <p style={annotation}>
                            University of Toronto: Saint George
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselbox}>
                        <h style={subheader}> CSC148H1: Intro to Computer Science</h>
                        <div style={gap}></div>
                        <p>
                            Project 1: Racoon Trash Can Game, implement a game where you herd raccoons into trashcans.
                            Write an AI for the racoons and the player in this strategy game. Heavily utilizes
                            recursion.
                        </p>
                        <p>
                            Project 2: Implementation of a database using several different kinds of trees (BST, AVL...)
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: Python
                        </p>
                        <p style={annotation}>
                            University of Toronto: Saint George
                        </p>


                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselbox}>
                        <h style={subheader}> CSC108H1: Intro to Computer Programming</h>
                        <div style={gap}></div>
                        <p>
                            Project 1: The Slide Game, simple assignment focused on understanding docstrings and
                            implementing described methods to complete a game.
                        </p>
                        <p>
                            Project 2: Implementation of the game battleship, multiplayer and singleplayer against an
                            AI.
                        </p>
                        <p>
                            Project 3: Write a program that can use data on people's favorite books and authors to
                            extract statistics like the overall favorite authors.
                        </p>
                        <div style={gap}></div>
                        <p style={annotation}>
                            Languages: Python
                        </p>
                        <p style={annotation}>
                            University of Toronto: Saint George
                        </p>


                    </div>
                </Carousel.Item>

            </Carousel>
            <div style={gap}></div>
        </div>
    );
};

export default Projects

//CODE BY MARKIAN VORONOVYCH 2023