import React from "react"
import Logo from './headerLogo.png'
import {Link} from "react-router-dom";

const LAST_UPDATED = "January 2024"
class Footer extends React.Component {
    render(){

        const foot = {
            background: '#d0b36d',
            fontSize: 'calc(7px + 0.8vw)',
            width: '100%',
            //borderRadius: '25px',
            marginTop: '-5px',
            fontFamily: 'sans-serif',
            color: 'black',
            lineHeight: 'calc(10px + 1.1vw)',
            height: '1.4vw'
        }

        const foottext = {
            color: 'black',
            textDecoration: 'none',
            marginBottom: '1vw',
            marginTop: '3px'
        }

        const footheader = {
            color: 'black',
            textDecoration: 'none',
            fontSize: 'calc(8px + 1.0vw)',
            marginBottom: '15px',
            marginTop: '0px',
            fontWeight: 'bold',
            lineHeight: 'calc(14px + 1.1vw)'
        }

        const divsplit = {
            padding: '20px',
            background: '#d0b36d',
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        }

        const imagecol = {
            background: 'd0b36d',
            marginRight: '5%',
            marginLeft: '5%',
            width: '10%',
            flexDirection: 'column',
            display: 'flex',
            color:'black',
            textAlign: 'center'
        }

        const textcol = {
            background: '#d0b36d',
            width: '22%',
            flexDirection: 'column',
            display: 'flex',
            color:'black',
            borderLeft: '0.2vw solid #000', // You can replace #000 with the desired border color
            padding: '2%',
            height: '100%'
        }

        return(
            <div style={foot}>
                <div style={divsplit}>
                    <div style={imagecol}>
                        <img src={Logo} alt="Markian Voronovych Logo"/>
                        <p>Made By Markian Voronovych</p>
                        <p>Last Updated By {LAST_UPDATED}</p>

                    </div>
                    <div style={textcol}>
                        <p style={footheader}>
                            Contact Me:
                        </p>
                        <p style={foottext}>
                            +1 (248) 320 0915
                        </p>
                        <p style={foottext}>
                            markv2021@gmail.com
                        </p>
                        <p style={foottext}>
                            voronovy@umich.edu
                        </p>
                        <a href="https://github.com/Markian00">
                            <p style={foottext}>
                                My Github
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/in/markian-voronovych-1b930322b">
                            <p style={foottext}>
                                My LinkedIn
                            </p>
                        </a>

                    </div>
                    <div style={textcol}>
                        <p style={footheader}>
                            Learn More:
                        </p>
                        <Link style={foottext} to="/Projects">
                            My Projects
                        </Link>
                        <Link style={foottext} to="/Academics">
                            My Education
                        </Link>
                        <Link style={foottext} to="/Resume">
                            My Online Resume
                        </Link>

                    </div>
                    <div style={textcol}>
                        <p style={footheader}>
                            Website Information:
                        </p>
                        <p style={foottext}>
                            Run On AWS
                        </p>
                        <p style={foottext}>
                            PDFs Stored in S3 buckets
                        </p>
                        <p style={foottext}>
                            Built With ReactJS and Bootstrap
                        </p>

                    </div>
                </div>

            </div>
        )
    }
}

export default Footer