import React from 'react'
import Navbar from '../Navbar'
import Slider from './Slider'

function Bkmain() {
  return (
    <div>
      <div className='optionsCrm'>
        <div className='optionLeft'>
          <div className='optionCards'>
            <h4 className='optionHeading'>Sliders</h4>
          </div>
          <div className='optionCards'>
            <h4 className='optionHeading'>Sliders</h4>
          </div>
        </div>
        <div className='WorkStation'>
        <Slider />
        </div>
      </div>
    </div>
  )
}

export default Bkmain