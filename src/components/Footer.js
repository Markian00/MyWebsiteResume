import React from "react"
import Logo from './headerLogo.png'

const LAST_UPDATED = "December 2023"
class Footer extends React.Component {
    render(){

        const foot = {
            background: '#EDC25E',
            fontSize: '15px',
            width: '100%',
            //borderRadius: '25px',
            marginTop: '-5px',
            fontFamily: 'sans-serif',
            color: 'black',
            lineHeight: '20px',
            height: '20px'
        }

        const foottext = {
            marginBottom: '15px',
            marginTop: '3px'
        }

        const footheader = {
            fontSize: '20px',
            marginBottom: '15px',
            marginTop: '0px',
            fontWeight: 'bold'
        }

        const divsplit = {
            padding: '20px',
            background: '#EDC25E',
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        }

        const imagecol = {
            background: '#EDC25E',
            marginRight: '5%',
            marginLeft: '5%',
            width: '10%',
            flexDirection: 'column',
            display: 'flex',
            color:'black',
            textAlign: 'center'
        }

        const textcol = {
            background: '#EDC25E',
            width: '22%',
            flexDirection: 'column',
            display: 'flex',
            color:'black',
            borderLeft: '3px solid #000', // You can replace #000 with the desired border color
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

                    </div>
                    <div style={textcol}>
                        <p style={footheader}>
                            words words words
                        </p>
                        <p style={foottext}>
                            words words words
                        </p>
                        <p style={foottext}>
                            words words words
                        </p>
                        <p style={foottext}>
                            words words words
                        </p>

                    </div>
                    <div style={textcol}>
                        <p style={footheader}>
                            words words words
                        </p>
                        <p style={foottext}>
                            words words words
                        </p>
                        <p style={foottext}>
                            words words words
                        </p>
                        <p style={foottext}>
                            words words words
                        </p>

                    </div>
                </div>

            </div>
        )
    }
}

export default Footer