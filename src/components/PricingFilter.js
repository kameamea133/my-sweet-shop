import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Slider, Typography } from '@mui/material';

const PricingFilter = () => {
    const [value, setValue] = useState([10, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    function valuetext(value) {
        return value;
      }


  return (
    <Box 
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent= "center"
    sx={{ width: "100%" }}
    >
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{ pt: "20px", mt: "40px", width: "80%", color: "#ED708E"}}
       
      />
      <Box 
      display="flex"
      justifyContent="space-between"
      sx={{ width: "60%", mt: "10px"}}
      >
        <Typography
        sx={{ border: "2px solid #FFF",
        width: "40%",
        textAlign: "center",
        padding: "5px",
        borderRadius: "2px",
        color: "#FFF"
        }}
        >{`${value[0]}€`}</Typography>
        <Typography
        sx={{ border: "2px solid #FFF",
        width: "40%",
        textAlign: "center",
        padding: "5px",
        borderRadius: "2px",
        color: "#FFF"
        }}
        >{`${value[1]}€`}</Typography>
      </Box> 
      
        
    </Box>
  )
}

export default PricingFilter