import React from 'react';
import '../styles/Section2.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, typography } from '@mui/system';
import { Typography } from '@mui/material';



const Section2 = () => {
  return (
    <div className='section2'>
      <div className='section2-mainContainer'>
        <div className='cream'>
            <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ width:"80%",height:"50%", marginLeft:"35px", color:"#FFF"}}
            >
              <Typography variant="h1" sx={{ fontSize:"49px", fontWeight:"bolder", marginTop:"-25px"}}>Ice Cream</Typography>
              <Typography
              sx={{ marginTop:"20px"}}
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Typography>
              <Typography 
              sx={{ marginTop:"20px", fontSize:"16px", fontWeight:"bolder", backgroundColor:"#36A8C7", width:"29%", textAlign:"center", borderRadius:"4px", padding:"3px"}}
              >22 products</Typography>
            </Box>
         <div className='cream-btnBottom'>
          <div>go to category</div>
          <KeyboardArrowRightIcon style={{ background: "#DF5879", color: "#fff", padding:"5px", borderRadius:"9999px", width:"28px", height:"28px", margin:"3px"}}/>
         </div>
          
        </div>
        <div className='macarons'>
          <h4>15 products</h4>
        </div>
        <div className='discounts'>
          <h1>discounts</h1>
        </div>
        <div className='donuts'>
          <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ height:"15%", width:"60%", marginTop:"20px"}}
          >
            <Typography
            sx={{ fontSize:"16px", fontWeight:"bolder", backgroundColor:"#D55A77",width:"40%", textAlign:"center", borderRadius:"4px", padding:"3px", color:"#FFF"}}
            >18 products</Typography>
            <Typography variant="h1"
            sx={{ fontSize:"49px", fontWeight:"bolder", color:"#FFF", marginTop:"10px"}}
            >Donuts</Typography>
          </Box>
          <div className='donutsBtn'>
          <div className='donuts-categoryTitle'>go to category</div>
          <KeyboardArrowRightIcon style={{ color: "#fff", background: "#CF4567", padding:"5px", borderRadius:"9999px", height:"25px", width:"25px", margin:"2px"}}/>
          </div>
          
        </div>
        <div className='categories'>
          <h1>categories</h1>
        </div>
        <div className='cheskey'>
           <Box 
           display="flex"
           flexDirection="column"
           justifyContent="center"
           sx={{ height:"70%", width:"40%"}}
           >
            <Typography variant="h1"
            sx={{ marginTop:'-40px', fontSize:"49px", fontWeight:"bolder" }}
            >Cheskey</Typography>
            <Typography
            sx={{ marginTop:"38px"}}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
           </Box>
          <div className='cheskeyBtn'>
            <p>go to category</p>
            <KeyboardArrowRightIcon style={{ background: "#36A6CC", padding:"5px", borderRadius:"9999px", color: "#fff", width:"28px", height:"28px", margin:"6px 3px"}}/>
          </div>
          <div className='cheskey-productsBtn'>22 products</div>
        </div>
      </div>
    </div>
  )
}

export default Section2