import React, {Component} from 'react';
import '../../css/about.scss';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';

class About extends Component {
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
            <div className="about_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="about_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">About me</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>

                        <TextSplit className='left_side_text' splitBy="words">I'm SHANIX! (formerly known as Sharonraj Vasave). I started as a content creator on YouTube in early 2016, making funny videos and mimicry.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">I soon dove into horror content—ghost pranks and urban legends—until 2017. Then, I shifted into Minecraft gaming and began teaching myself ethical hacking, app modding, and music production.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">I started producing hip-hop and trap beats, eventually discovering Phonk. My unique fusion of styles attracted an international audience, and I became known as India's first Phonk producer.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">After a brief hiatus, I returned in 2023, reignited by the trending Phonk scene. Now, I'm exploring fresh genres like Brazilian Funk, EDM, Krushclub, and Hardwave.</TextSplit>
                    </div>
                    <div className="player">
                        <iframe className="player_iframe" width="100%" height="450" frameBorder="no" title="music"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1149955720&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        )
    }
}

export default About;
