import React from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
const ProductsWeightFilter = () => {
  return (
    <FormControl>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="male"
        name="radio-buttons-group"
        >
        <FormControlLabel value="male" control={<Radio  sx={{ color:"#FFF"}}/>} label="100 - 150gr" />
        <FormControlLabel value="female" control={<Radio />} label="150 - 200gr" />
        <FormControlLabel value="other" control={<Radio />} label="200 - 400gr" />
        <FormControlLabel value="other2" control={<Radio />} label="more than 1000gr" />
        </RadioGroup>
    </FormControl>
  )
}

export default ProductsWeightFilter