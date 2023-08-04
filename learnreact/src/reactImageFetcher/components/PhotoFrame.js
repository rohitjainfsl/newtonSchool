import React from 'react';

export const PhotoFrame = ({url, title}) => {
   return(
    <div className='photoFrame'>
        <img src={url} alt="photoFrame" />
        <div className='caption'>{title}</div>
    </div>
   )
}