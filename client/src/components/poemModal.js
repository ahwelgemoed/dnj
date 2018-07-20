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
import Info from '../components/Info';
import FontAwesome from 'react-fontawesome';

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
      <Info/>
        <Button
        // className='float-right'
        style={{ marginBottom: "2rem", background:"white", border: "1px solid black", color: "Black"}}
        onClick={this.toggle}>
        <FontAwesome name="plus"/> Add Something
        </Button>
        <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            <h3>Add Poem | Thought</h3>  
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="poem">Title</Label>
                <Input
                type="text"
                name="name"
                id="poem"
                placeholder="Title"
                required
                onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="body">Poem | Thought</Label>
                <Input
                type="textarea"
                name="body"
                id="body"
                required
                placeholder="Poem | Thought..."
                onChange={this.onChange}
                ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="handle">Instagram Handle</Label>
              <Input
              type="text"
              name="handle"
              id="handle"
              placeholder="Instagram Handle (Optional)"
              onChange={this.onChange}
              ></Input>
          </FormGroup>
          <Button
          style={{marginTop: '2rem', background:"white", border: "1px solid black", color: "Black"}}
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
