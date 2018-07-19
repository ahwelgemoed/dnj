import React, { Component } from 'react';
import {Container} from 'reactstrap';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from "react-redux";
import { getPoems , deletePoem} from '../actions/poemActions';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';


class Poems extends Component {

  state = {
    hide:''
  }

  renderButton(handle) {

    if(handle) {
      return (
        <Button
        style={{background:"white", border: "none", color: "Black"}}
        // className="float-right        size="sm"
        href={`http://www.instagram.com/${handle}`}
        target="_blank"
        // isHandle={hanhle}
        > - <FontAwesome name="instagram"/> {handle}</Button>
      );
    }
  }

  renderPoems = (loading, erie) => {
    let template = null;
    const { poems } = this.props.poem;
    console.log(loading);
    console.log(erie)
    if (loading === true){
      template =  
        <div>
          <TransitionGroup>
            <div className={'lds-ellipsis' + this.state.hide}><div></div><div></div><div></div><div></div></div>
          </TransitionGroup>
        </div>
      return template;
    }
    else if(erie.length < 1){
      this.setState({ hide: '' })
      template =  
      <div>
        <TransitionGroup>
          <div className={'lds-ellipsis' + this.state.hide}><div></div><div></div><div></div><div></div></div>
        </TransitionGroup>
      </div>

      return template;

    } else{
      template =
      <TransitionGroup className="Poems">
              {poems.map(({_id, name, body, handle}) => (
                <CSSTransition key={_id} timeout={1000} classNames="fade">
                  <Card styel={{ marginBottom: "2rem" }}>
                    <CardBody>
                    <CardTitle><b>{name}</b> {this.renderButton(handle)}</CardTitle>
                    <hr/>
                    <CardText>{body}</CardText>
                    
                    </CardBody>
                  </Card>
                </CSSTransition>
              ))}
              <div className="lds-heart"><div></div></div>
      </TransitionGroup>
          
          return template;
    }
  }
  // {this.renderButton()}
  // componentWillReceiveProps(){
  //   console.log("props");
  //  this.setState({ hide: 'show' });
  // }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillMount() {
    console.log('componentWillMount')
    this.props.getPoems();
  }
  componentDidMount() {
    console.log('componentDidMount');
    // const { loading } = this.state;
    setTimeout(() => this.setState({ hide: 'hide' }), 1500);
    // var element = document.getElementById("opens").className.add("hide");
}
  onDeleteClick = (id) => {
    this.props.deletePoem(id);
  }
  render() { 
    // console.log(this.props.poem.poems)
    return (
      <Container>
      {this.renderPoems(this.props.poem.loading, this.props.poem.poems)}
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
