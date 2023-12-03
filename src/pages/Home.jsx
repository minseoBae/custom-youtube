import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { webdText } from '../data/webd'
import { figmaText, layoutText, webText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer';
import { todayText } from '../data/today'
import { daejinText, departmentText } from '../data/daejin'
import { excitingText, sentiText, christmasText } from '../data/music'

const websiteTexts = [...figmaText, ...layoutText, ...webText];
const daejinTexts = [...daejinText, ...departmentText]
const musicTexts = [...christmasText, ...excitingText, ...sentiText];

const Home = () => {
    return (
        <Main 
            title = "나만의 개발 유튜브"
            description="개발 유튜브 추천 사이트에 오신 것을 환영합니다.">
            
            <Today videos={todayText} id="today"/>
            <Developer videos={developerText} title="😪 추천 개발자 유튜버를 소개합니다." id="developer" />
            <VideoSlider videos={webdText} title="😮 웹디자인기능사 준비는 이걸로!" id="webd" />
            <VideoSlider videos={websiteTexts} title="😛 웹표준 사이트 만들기 기초 다지기" id="website" />
            <VideoSlider videos={gsapText} title="🤓 GSAP 패럴랙스 효과를 하고 싶다면!" id="gsap" />
            <VideoSlider videos={portfolioText} title="🤗 포트폴리오 만드는 방법을 공유합니다." id="portfolio" />
            <VideoSlider videos={youtubeText} title="😱 지금 이 코딩을 영상으로" id="youtube" />
            <VideoSlider videos={daejinTexts} title="😊 대진대학교에 대해 알고 싶다고요?" id="daejin" />
            <VideoSlider videos={musicTexts} title="🤩 제 뮤직 리스트를 소개합니다!" id="music" />
        </Main>
    )
}

export default Home