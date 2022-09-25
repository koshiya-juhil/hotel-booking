import React from 'react'
import delhi from '../photos/delhi.jpeg'
import agra from '../photos/agra.jpeg'
import jaipur from '../photos/jaipur.jpeg'

const Featured = ()=> {
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src={delhi} alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h1 className='featuredTitlesh1'>New Delhi</h1>
                    <h2 className='featuredTitlesh2'>2920 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={agra} alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h1 className='featuredTitlesh1'>Agra</h1>
                    <h2 className='featuredTitlesh2'>413 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={jaipur} alt="" className='featuredImg' />
                <div className="featuredTitles">
                    <h1 className='featuredTitlesh1'>Jaipur</h1>
                    <h2 className='featuredTitlesh2'>1561 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured