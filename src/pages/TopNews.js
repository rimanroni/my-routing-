import React, { useState } from 'react';
import { TopnewsData } from './Data/TopNewsData';
import { Link } from 'react-router-dom';

const TopNews = () => {
    const [newsData, setnewsData] = useState(TopnewsData)
    const shortStr = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str
        }
    }
    return (
        <div>
            <div className="container mt-4 ">
      <h2 className='text-center text-danger'> আজকের তাজা খবর</h2>
                <div className="row">
                    {
                        newsData.map((news) => {
                            const {id,  title, body } = news
                            return <div key={id} className="odd col-12 col-sm-12 col-md-3 col-lg-3">
                                <div class="card zeronews"  >
                                    <div class="card-body ">
                                        <h5 class="card-title">{title}</h5>

                                        <p class="card-text">{shortStr(body, 100)}</p>
                                        <Link className='card-link' to={title}>আরো পড়ুন </Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }



                </div>
            </div>
        </div>
    );
};

export default TopNews;