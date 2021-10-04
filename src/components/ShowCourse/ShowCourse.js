
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const ShowCourse = (props) => {
  const history = useHistory();
  const added = (his) =>{
     history.push(his)
  }
  const {title  , price , rate , description , img} = props.course || {};
  return (
    <Col md={6}>
      <div className='m-5 p-4 border single-card'>             
      <Card>
        <Card.Img   src={img} />
        <Card.Body>
          <Card.Title className='text-center text-primary'>{title}</Card.Title>
          <Card.Text className='fw-bold text-center' style={{color: '#0000007d'}}>
            {description}
          </Card.Text>
        </Card.Body>
        <div className='d-flex justify-content-evenly'>        
        <h3>  <Rating
        emptySymbol="far fa-star emty" 
           fullSymbol="fas fa-star full"
            initialRating={rate}
              readonly
          />({rate})</h3>
        <h3 > Price : ${price}</h3>

        </div>
      <button onClick={()=> added('/buy')} className='btn btn-primary fs-4'>
      Buy the course </button>
      </Card>
      </div>
    </Col>
  );
};

export default ShowCourse;