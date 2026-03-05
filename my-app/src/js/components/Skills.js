import React, {Component} from 'react';
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
        setTimeout(() => this.setState({isLoading: false}), 1500);
        // var elements = document.querySelectorAll('.text_h1');
    }

    render() {

        if (this.state.isLoading) {
            return <PreloaderElement/>
        }
        return (
            <div className="skills_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="skills_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">Skills &</TextSplit>
                        <TextSplit className="text_h1">Experience</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>
                        <TextSplit splitBy="words" className='left_side_text'>My expertise spans music production, ethical hacking, and game development. I am known for pioneering Phonk music in India, blending traditional themes with rare genres like Jungle and Rare Phonk.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">I also have extensive experience in app modding, game hacking, and building immersive digital experiences.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">Want to collaborate or learn more?</TextSplit>
                        <p className='left_side_text'>
                            <TextSplit splitBy="words">Please check my</TextSplit>
                            <TextSplit tagName='link' splitBy="words" to="https://open.spotify.com/artist/72E9kEuXfIHx2MpFbLEUlU"
                                       target='_blank' className='left_side_link'>Spotify</TextSplit>
                            <TextSplit splitBy='words'>profile or just</TextSplit>
                            <TextSplit tagName='link' splitBy="words" to={prefix + "/contact"}
                                       className='left_side_link'>contact</TextSplit>
                            <TextSplit splitBy='words'>me.</TextSplit>
                        </p>
                    </div>
                    <div className="right_side">
                        <Sphere id={'mySkills'} width={550} height={500} items={skills}/>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        )
    }
}

export default Skills;
