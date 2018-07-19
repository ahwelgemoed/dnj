import React from 'react';
import {Container} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Info = () => {
  return (
    <div>
      <Container>
        <Card>
          <CardBody>
            <CardTitle>The Idea</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Info;