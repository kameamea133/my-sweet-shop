import React , {useState} from 'react';


import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';


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
    const [index, setIndex] = useState(1)

    function previousReview(){
      setIndex(prevIndex => (prevIndex - 1) % reviews.length)
    }

    function nextReview(){
      setIndex(prevIndex => (prevIndex + 1) % reviews.length)      
    }

  
    return (
      <div className="row-rewiews">
          <div className="title-reviews">
             <h2>Customer reviews</h2> 
            <ArrowCircleLeftOutlinedIcon onClick={previousReview} className="arrow-back" />{index}
            <ArrowCircleRightOutlinedIcon onClick={nextReview} className="arrow-forward" />
          </div>
          
        
          <div className="carroussel-reviews">

          {reviews.map((item, i) => {
        
          return (
            <div className={ (i === index) ? 'card-active' : 'card'} key={item.id}>
              <CardReview
                review={item}
              />
            </div>
          );
        })}
        </div>
          

         
          
       
    </div>
      
    );
  }
  
