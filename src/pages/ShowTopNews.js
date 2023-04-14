import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TopnewsData } from './Data/TopNewsData';
const ShowTopNews = () => {
    const { title } = useParams();
    const [newShowNews, setnewShowNews] =  useState('');
    useEffect(()=>{
    const update =TopnewsData.filter((bolog)=>bolog.title===title);
         setnewShowNews(update[0].body)
    }, [ ])
    return (
        <div>
            <div className="container mt-4">
                <h6 className='roni'>{title}</h6>
                <p className='roni2'>{newShowNews}</p>
            </div>
        </div>
    );
};

export default ShowTopNews;