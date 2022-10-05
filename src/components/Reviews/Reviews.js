import React from 'react';
import Carousel from 'react-material-ui-carousel'


import './Reviews.css';
import CardReview from './CardReview';

const reviews = [
  {id: 1,
  firstname: "Scarlett",
  lastname: "Wilson",
  comments: "Sed diam erat, porttitor sed augue ac, lacinia sodales lorem.In ut velit sagittis, tempor lectus eu, dictum eros. Quisque quis pulvinar magna",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
},
  {id: 2,
  firstname: "Kate",
  lastname: "Jesmez",
  comments: "Porttitor sed augue ac, ASed diam erat, lacinia sodales lorem. In ut velit sagittis, tempor lectus eu, dictum eros. Quisque quis pulvinar magna",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
},  {id: 3,
  firstname: "Adelaida",
  lastname: "Shorle",
  comments: "In ut velit sagittis, sed diam erat, porttitor sed augue ac, lacinia sodales lorem. In ut velit sagittis, tempor lectus eu, dictum eros. Quisque quis pulvinar magna",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
}

]

export default function Reviews(){

    return (
      <div className="row-rewiews">
        
        
            <div className="title-reviews">
              <h2>Customer<br /><span className="white-title">reviews</span></h2>
            </div>
            
          
            <div className="carroussel-reviews">
            <Carousel 
                height="180px" 
                autoPlay={false} 
                navButtonsAlwaysVisible={false} 
                indicators={true}>

                {reviews.map((item, i) => {
                  return (
                    <CardReview review={item} key={item.id} /> 
                  );
                })}
            </Carousel>
          
            </div>
           
    </div>
      
    );
  }
  
