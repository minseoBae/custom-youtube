import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { figmaText, layoutText, webText } from '../data/website'

const Website = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다.">
            
            <section id='websitePage' className={websitePageClass}>
                <h1>😉 웹사이트의 기초는 이 강의로~</h1>
                <h2>🎨 Figma를 활용한 디자인 설계</h2>
                <div className="video__inner">
                    <VideoCards videos={figmaText} />
                </div>
                <h2>🖼️ Layout 연습</h2>
                <div className="video__inner">
                    <VideoCards videos={layoutText} />
                </div>
                <h2>🌐 HTML, CSS 코딩</h2>
                <div className="video__inner">
                    <VideoCards videos={webText} />
                </div>
            </section>
        </Main>
    )
}

export default Website