import React from 'react'

import { musicText } from '../../data/music'
import { Link } from 'react-router-dom'

const Music = () => {
    return (
        <section id='daejin'>
            <h2>🤩 나의 뮤직리스트 추천!</h2>
            <div className='video__inner'>
                {musicText.map((video, key) => (
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

export default Music