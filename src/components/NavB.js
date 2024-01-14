import React, {useState, useEffect} from "react"
import logo from "./headerLogo.png"
import ReactDOM from "react-dom/client";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const sticky = {
    position: 'fixed',
    top: '0',
    width: '100%',
    margin: 'auto',
    padding: '16px'
}
const padded = {
    padding: '2.5vw'
}

const textsize = {
    fontSize: "1.5vw"
}
class NavB extends React.Component{
    render(){

        return(
            <>
                <Nav style={sticky}>

                    <NavMenu style={textsize}>
                        <img src={logo} alt="Markian Voronovych Logo" width="12%" style={padded}/>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/Resume">
                            Resume
                        </NavLink>
                        <NavLink to="/Academics">
                            Academics
                        </NavLink>
                        <NavLink to="/Projects">
                            Projects
                        </NavLink>
                    </NavMenu>
                </Nav>

            </>
        )
    }

}

export default NavB

//CODE BY MARKIAN VORONOVYCH 2023