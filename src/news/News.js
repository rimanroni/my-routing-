import React, { useState } from 'react';
import { newsData } from './NewsData';
import { Link } from 'react-router-dom';

const News = () => {
    const [news, setnews] = useState(newsData)
    const strshort = (str, num )=>{
         if(str.length > num ){
             return str.slice(0, num) + "..."
         }else{
             return str 
         }
    }
    return (
        <div>
             <div className="container mt-4">
         {
            news.map((newsItem)=>{
                const {id, img, head, body} = newsItem;

                 return   <div key={id} className='border newspera'>
                         <img src={img} alt="" /> <br />
                         <h6>{head}</h6>
                         <p>{strshort(body, 100)}</p>
                         <Link to={head }>learn more </Link>
                         <p> </p>
                 </div>
                        
            })
         }
           
             </div>
        </div>
    );
};

export default News;