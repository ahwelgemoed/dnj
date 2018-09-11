import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import {Container} from 'reactstrap';
import { Card,CardLink, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from "react-redux";
import { getPoems , deletePoem} from '../actions/poemActions';
import PropTypes from 'prop-types';
import domtoimage from 'dom-to-image';


class Poems extends Component {

  state = {
    hide:''
  }
  handleClick = (id, name) => {
    var Imy = document.getElementById(id);
    var ImyIm = document.getElementById(id+"img");
    console.log(ImyIm);

    domtoimage.toPng(Imy)
    .then(function(dataUrl) {
    console.log(dataUrl);
      //window.open(dataUrl);
      var img = new Image();
      img.src = dataUrl;
      // document.getElementById(id).appendChild(img);
    });
    domtoimage.toJpeg(document.getElementById(id), { 
      quality: 1,
      style: {
    } })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = name;
        link.href = dataUrl;
        link.click();
    })
      .catch(function(error) {
        console.error('oops, something went wrong!', error);
      });
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
        > - <span className='fab fa-instagram'> {handle}</span> </Button>
      );
    }
  }

  renderPoems = (loading, erie) => {
    let template = null;
    const { poems } = this.props.poem;
    if (loading === true){
      // console.log("Before")
      // console.log(erie)
      // this.setState({ hide: '' })÷
      template =  
        <div>
          <TransitionGroup>
            <div className={this.state.hide}>
            <img className='load' src="LOAD.gif"/>
            </div>
          </TransitionGroup>
        </div>
      return template;
    }
    else if(erie.length === 0){
      // console.log("trigger")
      // console.log(erie);
      this.setState({ hide: '' })
      template =  
      <div>
        <TransitionGroup>
         <div className={this.state.hide}>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        </TransitionGroup>
      </div>

      return template;

    } else{
      console.log(this.state)

      template =
      <TransitionGroup className="Poems">
      <div class="row">
      {poems.map(({_id, name, body, handle}) => (
        <CSSTransition key={_id} timeout={1000} classNames="fade">
        <div className="col-12">
                  <Card 
                  className='cards cardline '
                  id={_id}>
                    <CardBody>
                    <CardTitle>{name} {this.renderButton(handle)}</CardTitle>
                    <hr/>
                    <CardText>
                    <Markdown options={{forceInline: true,}}
                  >{body}</Markdown>
                    </CardText>
                    </CardBody>
                    </Card>
                    <CardLink
                    className="float-right"
                    href={`mailto:disnetjy@gmail.com?Subject=REPORT%20ABUSE 🙅 (We Keep You Safe)&body=ID : ${_id} Title : ${name} Body : ${body}`}
                    target="_top"
                    >Report</CardLink>
                    <CardLink
                    className="btn-download float-left"
                    onClick={() => this.handleClick(_id, name)}>
                      Save as Image (Beta)
                    </CardLink>
                  </div>             
                </CSSTransition>
              ))}
              </div>
      </TransitionGroup>
          
          return template;
    }
  }

  componentDidUpdate(){
    // console.log('componentDidUpdate');
  }
  componentWillMount() {
    // console.log('componentWillMount')
    this.props.getPoems();
  }
  componentDidMount() {
    // console.log(this.template);
    // const { loading } = this.state;
    () => this.setState({ hide: 'hide' });
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
