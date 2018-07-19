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
            A simple space to just add a <mark>Thought/Poem</mark> or anything really, 
            Its anonymous and very open to abuse. It can't be deleted or edited.   
             <br/>
             Use any <mark>Language or Emoji</mark>
             We ask that you post anything that you want as long as it's true, make it short make it long,<mark>just fucking make it</mark>. 
             <br/>
             You can add your <mark>Instagram</mark> handle if you want be found, or just leave it blank. 
             <br/>
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