import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



import './CardProduct.css';
import { Rating } from '@mui/material';

import img from '../images/product1.png';



export default function CardProduct(){
    return (
      
      <div className="grid-products">
      <Container>
      <Grid container spacing={4}>

          <Grid item xs={3}>
            <Card sx={{width: 160}}>

                <CardMedia
                component="img"
                image={img}
                alt="produit"
                sx={{height:"90px", width:"90px"}}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:"bold"}}>
                      Macarons Macaron For Him Gift Box
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Macarons
                    </Typography>

                    <Box sx={{display:"flex" ,  alignItems:"center"}}>

                      <Rating className="sweet-rating" value="4" size="small" readOnly />
                      <Typography variant="body2" color="text.secondary">
                        6,38 <span className="sweet-rating">€</span>
                      </Typography>
                    </Box>
                </CardContent>

                <CardActions>
                    <Button 
                      
                      variant="outlined" 
                      endIcon={<ShoppingBagIcon sx={{color:"#ed708e"}}/>} 
                      sx={{ borderRadius: "9999px",
                      textTransform: "lowercase",
                      borderColor:"#ed708e",
                      textAlign : "center" }} 
                      >
                        <span className="btn-add-to-cart">add to cart</span>
                    </Button>
                </CardActions>
            </Card>
          </Grid>

        </Grid>
        </Container>
      </div>
      
    );
  }
  
