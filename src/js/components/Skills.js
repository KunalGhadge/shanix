import React, { Component } from 'react';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';
import Sphere from '../containers/Sphere';
import prefix from "./Config";

import '../../css/skills.scss';
import '../vendor/tagcanvas.min';
import 'animate.css';

const skills = [
    "Ethical Hacking",
    "Music Production",
    "Game Hacking",
    "App Modding",
    "Phonk",
    "Brazilian Funk",
    "EDM",
    "Krushclub",
    "Angelcore",
    "Hardwave",
    "Hip-hop",
    "Trap Beats",
    "SoundCloud",
    "YouTube",
    "Game Dev",
    "Aesthetic Rap",
    "Jungle Phonk",
    "Rare Phonk",
    "Unity",
    "FL Studio",
    "Ableton",
    "Cybersecurity",
    "Python"
];

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1500);
        // var elements = document.querySelectorAll('.text_h1');
    }

    render() {

        if (this.state.isLoading) {
            return <PreloaderElement />
        }
        return (
            <div className="skills_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="skills_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br />
                        <TextSplit className="text_h1">Skills &</TextSplit>
                        <TextSplit className="text_h1">Experience</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br />

                        <div className="skills_highlights">
                            <TextSplit splitBy="words" className='highlight_desc'>Expertise spanning music production, ethical hacking, and game development. India's First Phonk producer, blending traditional themes with modern digital crafts.</TextSplit>

                            <div className="skills_list">
                                <div className="skill_item">
                                    <span className="skill_bullet"></span>
                                    <TextSplit className='skill_text' splitBy="words">App Modding & Game Hacking</TextSplit>
                                </div>
                                <div className="skill_item">
                                    <span className="skill_bullet"></span>
                                    <TextSplit className='skill_text' splitBy="words">FL Studio & Music Mastery</TextSplit>
                                </div>
                                <div className="skill_item">
                                    <span className="skill_bullet"></span>
                                    <TextSplit className='skill_text' splitBy="words">Cybersecurity & Ethical Hacking</TextSplit>
                                </div>
                                <div className="skill_item">
                                    <span className="skill_bullet"></span>
                                    <TextSplit className='skill_text' splitBy="words">Building immersive digital experiences</TextSplit>
                                </div>
                            </div>

                            <p className='collaboration_text'>
                                <TextSplit splitBy="words">Want to collaborate? Check my</TextSplit>
                                <TextSplit tagName='link' splitBy="words" to="https://open.spotify.com/artist/72E9kEuXfIHx2MpFbLEUlU"
                                    target='_blank' className='left_side_link'>Spotify</TextSplit>
                                <TextSplit splitBy='words'>or just</TextSplit>
                                <TextSplit tagName='link' splitBy="words" to={prefix + "/contact"}
                                    className='left_side_link'>contact</TextSplit>
                                <TextSplit splitBy='words'>me.</TextSplit>
                            </p>
                        </div>
                    </div>
                    <div className="right_side">
                        <Sphere id={'mySkills'} width={550} height={500} items={skills} />
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;</span>
            </div>
        )
    }
}

export default Skills;
