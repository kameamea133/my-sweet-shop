import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { set } from 'react-hook-form';

const CategoriesProductsFilter = () => {
const [current, setCurrent] = useState(-1);

const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1);
}
  return (
    <div>
        <Accordion expanded={current === 0} onChange={changeState(0)} sx={{ backgroundColor: "#56C2E8"}}>
            <AccordionSummary expandIcon={ <ExpandMore />}>
                <Typography variant= "h5" sx={{ color: "#FFF"}}>Ice Cream</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Sorbet</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Fruit Ice</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Melon</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Pineapple</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={current === 1} onChange={changeState(1)} sx={{ backgroundColor: "#56C2E8"}}>
            <AccordionSummary expandIcon={ <ExpandMore />}>
                <Typography variant= "h5" sx={{ color: "#FFF"}}>Donuts</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Chocolate Milk</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Marshmallow</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Peanut Butter</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Raspberry</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={current === 2} onChange={changeState(2)} sx={{ backgroundColor: "#56C2E8"}}>
            <AccordionSummary expandIcon={ <ExpandMore />}>
                <Typography variant= "h5" sx={{ color: "#FFF"}}>Macarons</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Grapefriut</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Passionfruit</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Chocolate</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Matcha Tea</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={current === 3} onChange={changeState(3)} sx={{ backgroundColor: "#56C2E8"}}>
            <AccordionSummary expandIcon={ <ExpandMore />}>
                <Typography variant= "h5" sx={{ color: "#FFF"}}>Cheskey</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Strawberry</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Blueberry</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Chocolate-Peanut Butter</Typography>
                <Typography gutterBottom={true} sx={{ color: "#FFF"}}>Vegan</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default CategoriesProductsFilter