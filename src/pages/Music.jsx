import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { musicText } from '../data/music'

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
                <h2>🤩 나의 뮤직리스트 추천!</h2>
                <div className="video__inner">
                    <VideoCards videos={musicText} />
                </div>
            </section>
        </Main>
    )
}

export default Music