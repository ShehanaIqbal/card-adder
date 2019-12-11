import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './card.css';
const NewCard = (props) => {

  return (
    <div>
    <Row>
      <Col sm="6">
        <Card body>
  <CardTitle className='cardTitle'>{props.title}</CardTitle>
  <CardText>{props.content}</CardText>
          <button onClick={props.deleteCard}>Delete this card</button>
        </Card>
      </Col>
    </Row>
    <br></br>
    <br></br>
    </div>
  );
};

export default NewCard;