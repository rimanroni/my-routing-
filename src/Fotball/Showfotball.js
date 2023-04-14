import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fotballData } from './fotballdata';
const Showfotball = () => {
    const {title} = useParams();
      const [data, setdata] = useState();
      useEffect(()=>{
            const update = fotballData.filter((d)=>d.title === title)
            setdata(update[0].data)
        },[])
    return (
        <div className='container mt-3'>
            <h4>{title}</h4> <br />
            <p>{data}</p>
        </div>
    );
};

export default Showfotball;