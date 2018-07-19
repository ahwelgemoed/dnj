import React, { Component } from 'react';
import {Container} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from "react-redux";
import { getPoems , deletePoem} from '../actions/poemActions';
import PropTypes from 'prop-types';


class Poems extends Component {

  renderPoems = (loading) => {
    let template = null;
    const { poems } = this.props.poem;
    console.log(this.props.poem.loading)

    if (loading === true) {
      template =  <div>
      <TransitionGroup>
        <div class="lds-heart"><div></div></div>
      </TransitionGroup>
      </div>
      return template
    }else{
      template =  <div>
            <TransitionGroup className="Poems">
              {poems.map(({_id, name, body, handle}) => (
                <CSSTransition key={_id} timeout={1000} classNames="fade">
                  <Card styel={{ marginBottom: "2rem" }}>
                    <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <hr/>
                    <CardText>{body}</CardText>
                    <Button
                    style={{background:"white", border: "1px solid black", color: "Black"}}
                    className="float-right"
                    size="sm"
                    href={`http://www.instagram.com/${handle}`}
                    target="_blank"
                    >Instagram</Button>
                    </CardBody>
                  </Card>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          return template
    }
  }
  componentDidMount() {
    
    this.props.getPoems();
  }
  onDeleteClick = (id) => {
    this.props.deletePoem(id);
  }
  render() { 
    return (
      <Container>
      {this.renderPoems(this.props.poem.loading)}
      </Container>
    )
  }
}
Poems.propTypes = {
  getPoems: PropTypes.func.isRequired,
  poem: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  poem: state.poem
})

export default connect(mapStateToProps, {getPoems, deletePoem})(Poems);

                  // <Button
                  // className="remove-btn"
                  // color='danger'
                  // size="sm"
                  // onClick={this.onDeleteClick.bind(this, _id)}
                  // >&times;</Button>
