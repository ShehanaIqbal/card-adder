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
          <Button onClick={props.deleteCard}>Delete this card</Button>
        </Card>
      </Col>
    </Row>
    <br></br>
    <br></br>
    </div>
  );
};

export default NewCard;