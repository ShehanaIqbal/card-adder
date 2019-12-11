import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from "firebase"


class loginForm extends React.Component {
  state = {
    username: "",
  }
  checkUser = () => {
    const history = this.props.props.history;
    firebase.database().ref("users").once("value", (snapshot) => {
      const data = snapshot.val()
      if (Object.values(data).includes(this.state.username)) {
        console.log("Success")
        history.push("/")
        localStorage.setItem("username",this.state.username)

      } else {
        console.log("failed")
      };
    })
  }
  render() {
    return (
      <Form >
        <FormGroup row>
          <Label for="Username" sm={2}>Username</Label>
          <Col sm={10}>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Please enter your username"
              value={this.state.username}
              onChange={(event) => {
                this.setState({
                  username: event.target.value
                })
                event.preventDefault();
              }}
            />
          </Col>
        </FormGroup>
        <Button className='submitbutton' onClick={() => this.checkUser()}>Submit</Button>
      </Form>
    );
  }
}

export default loginForm;