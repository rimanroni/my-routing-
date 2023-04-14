import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cricketData } from './Cricketdata';
const ShowCricket = () => {
    const {title} = useParams();
    const [data, setdata] = useState('');
    console.log(cricketData)
    
    useEffect(()=>{
    const cunni = cricketData.filter((b)=>b.title === title);
    setdata(cunni[0].data)

    },[])

    return (
        <div className='container cricket'>
          
            <h3>{title}</h3>
            <p>{data}</p>
        </div>
    );
};

export default ShowCricket;