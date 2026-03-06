import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../../css/header.scss';
import '../vendor/FontAwesome.min';

import prefix from "./Config";

const MyLink = ({ to, className = "", children = [] }) => {
    return (
        <NavLink exact to={prefix + to} activeClassName="active">
            <i className={className} />
            <span>{children}</span>
        </NavLink>
    )
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <header className={this.state.isToggleOn ? "is-open" : ""}>
                <div className={(this.state.isToggleOn ? "is-open " : " ") + "logo"}>
                    <div className="logo_img">
                        <img src={prefix + "/img/Wolf2.png"} alt="" />
                        {/*<span className="o_letter">O</span>*/}
                        {/*<span className="m_letter">m</span>*/}
                    </div>
                    <span>SHANIX!</span>
                </div>
                <div className={(this.state.isToggleOn ? "is-open " : " ") + "main_buttons"}>
                    <MyLink to={"/"} className=" fa fa-home"> home </MyLink>
                    <MyLink to={"/about"} className="fa fa-user"> about </MyLink>
                    <MyLink to={"/skills"} className="fa fa-cog"> skills </MyLink>
                    {/*<Link to={prefix + "/works"}> <i className="fa fa-eye"/><span> works </span></Link>*/}
                    <MyLink to={"/contact"} className="fa fa-envelope"> contact </MyLink>
                </div>
                <div className={(this.state.isToggleOn ? "is-open " : " ") + "social_buttons"}>
                    <a href="https://x.com/SHANIXofc" target='_blank' rel="noopener noreferrer"><i
                        className="fab fa-twitter" /></a>
                    <a href="https://instagram.com/ishxronraj.exe" target='_blank' rel="noopener noreferrer"><i
                        className="fab fa-instagram" /></a>
                    <a href="https://www.youtube.com/@SHANIXMUSICS" target='_blank' rel="noopener noreferrer"><i
                        className="fab fa-youtube" /></a>
                    <a href="https://soundcloud.com/SHANIXOFC" target='_blank' rel="noopener noreferrer"><i
                        className="fab fa-soundcloud" /></a>
                </div>
                <div className="burger_menu">
                    <button className={(this.state.isToggleOn ? "is-open " : " ") + "menu-icon"}
                        onClick={this.handleClick}><span /></button>
                </div>
            </header>
        );
    }
}

export default Header
