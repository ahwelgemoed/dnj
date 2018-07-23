import React from 'react';
import {Container} from 'reactstrap';
import { Card, CardText, CardBody,
  CardTitle,CardLink} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Markdown from 'markdown-to-jsx';

const why = () => {
  return (
    <div>
      <Container>
        <Card>
        <CardBody>
          <CardTitle className="bgf">Why?</CardTitle>
          <CardText>
          <p> If a ghost is energy in a moment ever repeating, frightening or comforting but mostly forgotten. I guess this is like that, <i>pretension permitting, naturally.</i></p>
          <h5>Participation</h5>
          <p>This is for late nights between apathy and tears. It's almost an Anti-Social Network, no editing, no likes, no claps just equality of emotion, <i>pretension permitting, obviously.</i></p>
          <h5>Observation</h5>
          <p>This is for late nights when you can't sleep and get tired of clicking on random Russian authors on Wikipedia, <i>pretension permitting, of course.</i></p>
          <br/>
          </CardText>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
          <CardTitle className="bgf">What?</CardTitle>
          <CardText>
          <p>A simple space to add a Thought/Poem or anything really, It’s anonymous and very open to abuse. It can't be deleted or edited.</p>
          <p>Use any Language or Emoji</p>
          <p>We ask that you post anything you want as long as it's true, make it short, make it long, just fucking make it. 
          </p>
          <p>You can add your Instagram handle if you want be found, or leave it blank.</p>
           <br/>
           <h6>Basic Markdown is Supported</h6>
           <ul>_Italics_  - <Markdown>_Italics_</Markdown></ul>
           <ul>**Bold**  - <Markdown>**Bold**</Markdown></ul>
           <ul>~~Strikethrough~~  - <Markdown>~~Strikethrough~~</Markdown></ul>
          </CardText>
        </CardBody>
      </Card>

      <Card>
      <CardBody>
        <CardTitle className="bgf">Who?</CardTitle>
        <CardText>
          <p>I'm AH Welgemoed 🇿🇦, I Code, Design, Wright and Play Guitar.</p>
          <div className="float-right"> 
          <h5><i>Lets Build Stuff</i></h5>
          <CardLink
          className="mylink float-right"
          href="https://ahwelgemoed.github.io/"
          target="_blank"
          > <span className='fab fa-github'/></CardLink>
          <CardLink
          className="mylink float-right"
          href="https://www.instagram.com/ahwelgemoed/"
          target="_blank"
          > <span className='fab fa-instagram'/></CardLink>
          </div>
         <br/>
        </CardText>
      </CardBody>
    </Card>
      </Container>
    </div>
  );
};

export default why;