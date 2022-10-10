import React from 'react';
import '../styles/Section2.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const Section2 = () => {
  return (
    <div className='section2'>
      <div className='section2-mainContainer'>
        <div className='cream'>
        <div className='cream-block'>
          <h1>Ice Cream</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of.</p>
          <h4>22 products</h4>
        </div>
         <div className='cream-btnBottom'>
          <p >go to category</p>
          <KeyboardArrowRightIcon style={{ background: "#DF5879", color: "#fff", padding:"5px", borderRadius:"9999px"}}/>
         </div>
          
        </div>
        <div className='macarons'>
          <h4>15 products</h4>
        </div>
        <div className='discounts'>
          <h1>discounts</h1>
        </div>
        <div className='donuts'>
          <h4>18 products</h4>
          <h1>Donuts</h1>
          <div className='donutsBtn'>
          <p>go to category</p>
          <KeyboardArrowRightIcon style={{ color: "#fff", background: "#CF4567", padding:"5px", borderRadius:"9999px"}}/>
          </div>
          
        </div>
        <div className='categories'>
          <h1>categories</h1>
        </div>
        <div className='cheskey'>
            <h1>Cheskey</h1>
            <h4>22 products</h4>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.</p>
          <div className='cheskeyBtn'>
            <p>go to category</p>
          
            <KeyboardArrowRightIcon style={{ background: "#36A6CC", padding:"5px", borderRadius:"9999px", color: "#fff"}}/>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Section2