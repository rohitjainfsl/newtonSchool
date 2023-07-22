import React from 'react'
import DownArrow from './images/down-arrow.svg'

function Section({name, desc, leftBtn, rightBtn, downArrow, background}) {
  return (
    <section className='sec' style={{backgroundImage: "url( " + background + ")"}}>
      <div className='carname'>
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>

      <div className='cta'>
        <div className='buttons'>
          <a href="" className='leftBtn'>{leftBtn}</a>
          {
            //if we have a rightBtn prop
            (rightBtn) ? <a href="" className='rightBtn'>{rightBtn}</a> : ''
          }
        </div>
        {
          downArrow ? <img src={DownArrow} alt="Down Arrow" /> : ''
        }
        
      </div>
    </section>
  )
}

export default Section