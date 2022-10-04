import React from 'react';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

import './Reviews.css';

export default function CardReview({review}){

    
    
    return (
            <Card> 
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      A
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <FormatQuoteRoundedIcon fontSize="large" sx={{  color: '#ed708e' }} />
                    </IconButton>
                  }
                  title={review.firstname}
                  subheader="Regular Customer"
                />

                <CardContent>
                  <Typography variant="body2" sx={{fontStyle:'italic'}}>
                  {review.comments}
                  </Typography>
                </CardContent>
            </Card>
          
      
    );
  }
  
