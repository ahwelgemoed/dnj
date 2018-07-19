import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addPoem } from '../actions/poemActions';

class poemModal extends Component {
  state = {
    modal: false,
    name: '',
    body: '',
    handle: '',
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault();
    
    const newPoem = {
      name: this.state.name,
      body: this.state.body,
      handle: this.state.handle,
    }
    this.props.addPoem(newPoem);

    //Close modal
    this.toggle();
  }

  render(){
    return(
      <div>
        <Button
        style={{ marginBottom: "2rem", background:"white", border: "1px solid black", color: "Black"}}
        onClick={this.toggle}>
        Submit a Poem
        </Button>
        <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            <h3> Add Poem </h3>  
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="poem">Poem Name</Label>
                <Input
                type="text"
                name="name"
                id="poem"
                placeholder="Poem Name..."
                onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="body">Poem</Label>
                <Input
                type="textarea"
                name="body"
                id="body"
                placeholder="Poem..."
                onChange={this.onChange}
                ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="handle">Instagram Handle</Label>
              <Input
              type="text"
              name="handle"
              id="handle"
              placeholder="Instagram Handle"
              onChange={this.onChange}
              ></Input>
          </FormGroup>
          <Button
          color="dark"
          style={{marginTop: '2rem'}}
          >
          Submit Poem
          </Button>
            </Form>
          </ModalBody>
        
        </Modal>
      </div>
    );
  }
}
const mapsStateToProps = state => ({
  poem: state.poem
})

export default connect(mapsStateToProps, {addPoem})(poemModal)
