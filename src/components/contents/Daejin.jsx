import React from 'react'

import { daejinText } from '../../data/daejin'
import { Link } from 'react-router-dom'

const Daejin = () => {
    return (
        <section id='daejin'>
            <h2>😊 대진대학교의 여러 정보를 알고 싶다면!</h2>
            <div className='video__inner'>
                {daejinText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Daejin