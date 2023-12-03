import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { excitingText, sentiText, christmasText } from '../data/music'

const Music = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const musicPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "뮤직리스트 추천"
            description="장르불문 제가 추천하는 여러 노래들 입니다.">
            
            <section id='musicPage' className={musicPageClass}>
                <h1>🤩 장르별 뮤직리스트 추천!</h1>
                <br/>
                <h2>🥳 언제 들어도 신나는 뮤직! </h2>
                <div className="video__inner">
                    <VideoCards videos={excitingText} />
                </div>
                <h2>😭 새벽엔 역시 감성 뮤직!</h2>
                <div className='video__inner'>
                    <VideoCards videos={sentiText} />
                </div>
                <h2>🎅🏻 곧 다가올 크리스마스 뮤직!</h2>
                <div className='video__inner'>
                    <VideoCards videos={christmasText} />
                </div>
            </section>
        </Main>
    )
}

export default Music