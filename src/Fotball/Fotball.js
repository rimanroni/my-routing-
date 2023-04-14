import React, { useState } from 'react';
import { fotballData } from './fotballdata';
import { Link } from 'react-router-dom';
const Fotball = () => {
      const [data, setdata] =  useState(fotballData);
      const strbody = (str, num)=>{
             if(str.length > num){
                return str.slice(0, num) + "..."
             }else{
                return str;
             }
      }

    return (
        <div>
             {
                data.map((bolog)=>{
                   const {title, data, img} = bolog;
                   return <div className='   rr   '>
                          <div className="riman border rounded">
                            <p>   <img src={img } alt="" /></p>
                             <h5>{title}</h5>
                             <article>{strbody(data, 100)}</article>
                             <p> </p>
                             <Link to={title} className='btn btn-primary' > Lorem More </Link>
                             <p>  </p>
                          </div>

                     
                   </div>
                     
                })
             }
        </div>
    );
};

export default Fotball;