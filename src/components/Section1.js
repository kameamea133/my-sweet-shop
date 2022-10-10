import React from 'react'
import pic1 from "../images/pic1.png";
import pic6 from "../images/pic6.png";
import pic4 from "../images/pic4.png";
import pic7 from "../images/pic7.png";

import '../styles/Section1.css';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Section1 = () => {
  return (
   <div className='section1-mainContainer'>
      <div className="section1-leftBox">
        <div className='section1-leftBox-pictureBlock'>
          <img className="pic1" src={pic1} alt='picture1'/>
          <img className='pic4' src={pic4} alt='picture4'/>
          <img className='pic7' src={pic7} alt='picture5'/>

        </div>
      </div>
      <div className='section1-rightBox'>
        <h3>your sweets</h3>
        <div className='section1-rightBox-ourProduction'>
          <h1><span>About</span> Us</h1>
          <div className='ourProduction-btn'>
            <h4>our production</h4>
            <KeyboardArrowRightIcon style={{ backgroundColor: "#E0597A", borderRadius:"9999px", width: "35px", height:"36px", marginRight:"3px"}}/>
          </div>
          
        </div>
        <hr style={{ backgroundColor: "black", width:"90px", height:"5px", borderRadius:"15px", marginLeft: "0", marginBottom: "25px"}}/>
        <div className='section1-rightBox-paragraph'>
          <div className='para-left'>
            <p>Nulla eu nisl quis enim aliquam posuere vitae ac velit. Suspendisse dictum ligula sit amet fringilla tempor. Maecenas elementum urna eget risus gravida malesuada. Phasellus viverra interdum mollis. Nulla eu nisl quis enim aliquam posuere vitae ac velit. Suspendisse dictum ligula sit amet fringilla tempor.</p>
            <p>Nulla eu nisl quis enim aliquam posuere vitae ac velit. Suspendisse dictum ligula sit amet fringilla tempor. Maecenas elementum urna eget risus gravida malesuada. Phasellus viverra interdum mollis. Suspendisse dictum ligula sit amet fringilla tempor. Maecenas elementum</p>

          </div>
          <div className='para-right'>
            <p>Nulla eu nisl quis enim aliquam posuere vitae ac velit. Suspendisse dictum ligula sit amet fringilla tempor. Maecenas elementum urna eget risus gravida malesuada. Phasellus viverra interdum mollis.</p>
            <img src={pic6} alt="picture6" style={{ width: "130px", paddingBottom:"2px"}}/>
          </div>

        </div>
      </div>

   </div>
  )
}

export default Section1