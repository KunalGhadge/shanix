import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/home.scss';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

import prefix from "./Config";


class Home extends Component {
    constructor() {
        super();
        this.state = {isLoading: true}
    }

    componentDidMount() {
        setTimeout(() => this.setState({isLoading: false}), 1500);
    }

    render() {
        if (this.state.isLoading) {
            return <PreloaderElement/>
        }
        return (
            <div className="home_content">
                <div className="left_side">
                    <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="home_main">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">Hi,</TextSplit>
                        <TextSplit className="text_h1">I'm SHANIX,</TextSplit>
                        <TextSplit className="text_h1">Phonk producer. </TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>
                        <h2 className="h2_greating">Phonk Producer / Ethical Hacker / Game Dev</h2>
                        <Link to={prefix + "/contact"} className="contact_btn">Contact me</Link>
                    </div>
                    <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
                </div>
                <div className="right_side">
                    <img src={prefix + "/img/Wolf2.png"} alt=""/>
                    <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <text className="path" xmlSpace="preserve" textAnchor="middle"
                              y="195" x="370">SHANIX
                        </text>
                    </svg>
                    <svg className="logo_mirror" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <text className="path" xmlSpace="preserve" textAnchor="middle"
                              fontSize="250" y="200" x="350">SHANIX
                        </text>
                    </svg>
                </div>
            </div>
        )
    }

}

export default Home;
