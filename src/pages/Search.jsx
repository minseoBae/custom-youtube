import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchId);
    setLoading(true);
  }, [searchId]);

  const fetchVideos = async (query, pageToken = '') => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${query}&type=video&key=${'AIzaSyBpPHEQxHbFyjn7MSIqPKcvo7B7DJvF4ZA'}${pageToken ? `&pageToken=${pageToken}` : ''}`
      );
      const data = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...data.items]);
      setNextPageToken(data.nextPageToken);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(searchId, nextPageToken);
    }
  };

  const searchPageClass = loading ? 'isLoading' : 'isLoaded';

  if (error) {
    return <Main title="Error">{error.message}</Main>;
  }

  return (
    <Main 
    title="유투브 검색" 
    description="유투브 검색 결과 페이지입니다.">
        
      <section id="searchPage" className={searchPageClass}>
        <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
        <div className="video__more">
          {nextPageToken && (
            <button onClick={handleLoadMore}>더 보기</button>
          )}
        </div>
      </section>
    </Main>
  );
};

export default Search;