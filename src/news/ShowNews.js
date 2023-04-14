import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from './NewsData';
const ShowNews = () => {
     const {head} = useParams()

     const [news, setnews ] = useState();
     useEffect(()=>{
      const update = newsData.filter((news)=>news.head === head);
        setnews(update[0].body)
     }, [])
    return (
        <div className='mt-5 container '>
            <h3> {head}</h3> <br />
            <p>{news}</p>
        </div>
    );
};

export default ShowNews;