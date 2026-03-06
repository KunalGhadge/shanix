import React, { Component } from 'react';
import '../../css/about.scss';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

class About extends Component {
    constructor() {
        super();
        this.state = { isLoading: true }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1500);
    }

    render() {
        if (this.state.isLoading) {
            return <PreloaderElement />
        }
        return (
            <div className="about_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="about_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br />
                        <TextSplit className="text_h1">About me</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br />

                        <div className="bio_highlights">
                            <div className="bio_item">
                                <i className="fa fa-microphone-alt"></i>
                                <TextSplit className='highlight_text' splitBy="words">India's First Phonk Producer from India with a unique fusion of international trap and ritual themes.</TextSplit>
                            </div>
                            <div className="bio_item">
                                <i className="fa fa-user-secret"></i>
                                <TextSplit className='highlight_text' splitBy="words">Ethical Hacker & App Modder since 2017, exploring the digital veil and cybersecurity.</TextSplit>
                            </div>
                            <div className="bio_item">
                                <i className="fa fa-gamepad"></i>
                                <TextSplit className='highlight_text' splitBy="words">Game Dev enthusiast specializing in immersive experiences and custom shaders.</TextSplit>
                            </div>
                            <div className="bio_item">
                                <i className="fa fa-compact-disc"></i>
                                <TextSplit className='highlight_text' splitBy="words">Currently exploring Brazilian Funk, EDM, Krushclub, and Hardwave genres.</TextSplit>
                            </div>
                        </div>
                    </div>
                    <div className="player">
                        <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/artist/72E9kEuXfIHx2MpFbLEUlU?utm_source=generator"
                            width="100%" height="352" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"></iframe>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;</span>
            </div>
        )
    }
}

export default About;
