import React from 'react';
import {Container} from 'reactstrap';
import { Card, CardText, CardBody,
  CardTitle,} from 'reactstrap';

const Info = () => {
  return (
    <div>
      <Container>
        <Card>
          <CardBody>
            <CardTitle>The Idea <i>(Beta)</i></CardTitle>
            <CardText>
            <p>A simple space to add a <mark>Thought/Poem</mark> or anything really, It’s anonymous and very open to abuse. It <mark>can't</mark> be deleted or edited.</p>
            <p>Use any <mark>Language or Emoji</mark></p>
            <p>We ask that you post anything you want as long as it's true, make it short make it long, just <mark>fucking</mark> make it. 
            </p>
            <p>You can add your <mark>Instagram</mark> handle if you want be found, or leave it blank.</p>
             <br/>
             <div className="float-right bottim">Made with ❤️ in 🇿🇦</div>
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Info;