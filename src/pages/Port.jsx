import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { ViteText, ReactText, VueText, NextText } from '../data/portfolio'

import { TbBrandVite } from "react-icons/tb";
import { IoLogoVue } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Port = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">
            
            <section id='portPage' className={portPageClass}>
                <h1>🤗 나만의 포트폴리오 사이트를 만들고 싶다면</h1>
                <br />
                <h2><TbBrandVite />  프레임워크 사용</h2>
                <div className="video__inner">
                    <VideoCards videos={ViteText} />
                </div>
                <h2><FaReact />  프레임워크 사용</h2>
                <div className="video__inner">
                    <VideoCards videos={ReactText} />
                </div>
                <h2><IoLogoVue />  프레임워크 사용</h2>
                <div className="video__inner">
                    <VideoCards videos={VueText} />
                </div>
                <h2><SiNextdotjs />  프레임워크 사용</h2>
                <div className="video__inner">
                    <VideoCards videos={NextText} />
                </div>
            </section>
        </Main>
    )
}

export default Port