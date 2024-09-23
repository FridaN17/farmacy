import React from "react"; 
import {CardGroup,Card,} from 'react-bootstrap';
import './Collection.css';

const Collection = ()=> {
return (
<div>
<CardGroup className="container">
      <Card>
        <Card.Img variant="top"   src={'./images/natural.png'}/>
        <Card.Body>
          <Card.Title>Naturally Good</Card.Title>
         
      
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"   src={'./images/skincare.jpg'}/>
        <Card.Body>
          <Card.Title>Healthcare Product</Card.Title>
    
        
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"  src={'./images/kuti.jpg'} />
        <Card.Body>
          <Card.Title>Medlife Product</Card.Title>
          </Card.Body>
      </Card>
    </CardGroup>
    </div>
)
   }
   export default Collection;