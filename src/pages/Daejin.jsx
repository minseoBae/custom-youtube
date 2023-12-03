import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { daejinText, departmentText } from '../data/daejin'

const Daejin = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const daejinPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "대진대학교 소개"
            description="대진대학교  강의입니다.">
            
            <section id='daejinPage' className={daejinPageClass}>
                <h2>😊 대진대학교의 여러 정보를 알고 싶다면!</h2>
                <div className="video__inner">
                    <VideoCards videos={daejinText} />
                </div>
                <h2>🏫 대진대의 여러 학과를 소개합니다!</h2>
                <div className="video__inner">
                    <VideoCards videos={departmentText} />
                </div>
            </section>
        </Main>
    )
}

export default Daejin