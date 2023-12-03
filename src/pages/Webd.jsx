import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { AText, BText, CText, DText, 
    EText, MText, SText, otherText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다.">

            <section id='webdPage' className={webdPageClass}>
                <h2>😄 웹디자인기능사 한번에 따자!</h2>
                <h3>A 유형</h3>
                <div className="video__inner">
                    <VideoCards videos={AText} />
                </div>
                <h3>B 유형</h3>
                <div className="video__inner">
                    <VideoCards videos={BText} />
                </div>
                <h3>C 유형</h3>
                <div className="video__inner">
                    <VideoCards videos={CText} />
                </div>
                <h3>D 유형</h3>
                <div className="video__inner">
                    <VideoCards videos={DText} />
                </div>
                <h3>E 유형</h3>
                <div className="video__inner">
                    <VideoCards videos={EText} />
                </div>
                <h3>M 유형</h3>
                <div className="video__inner">
                    <VideoCards videos={MText} />
                </div>
                <h3>S 유형</h3>
                <div className="video__inner">
                    <VideoCards videos={SText} />
                </div>
                <h3>남은 유형 & 실전</h3>
                <div className="video__inner">
                    <VideoCards videos={otherText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd