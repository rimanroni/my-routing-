import React, { useState } from 'react';
import { cricketData } from './Cricketdata';
import { Link } from 'react-router-dom';
const Cricket = () => {
    const [cricketdata, setcricketdata] = useState(cricketData);
    const shorbody = (srt, num )=>{
          if(srt.length > num){
             return srt.slice(0, num) + "..."
          }else{
             return srt
          }
    }
    return (
        <div className='container mt-4'>
              {
                cricketdata.map((cricket)=>{
                    const {id, title, img , data} = cricket;
                     return <section key={id} id='cricket' className='border p-2'>
                         <img src={img} alt="" />
                           <h5>{title}</h5>
                            <p>{shorbody(data, 100)}</p>
                            <Link to={title} > Lorem More</Link>
                          
                     </section>
                })
              }
        </div>
    );
};

export default Cricket;