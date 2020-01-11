import React, { Component } from 'react'
import { Container, Input, Icon } from 'semantic-ui-react';
import Axios from 'axios';

export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }


    createNewTask = () => {
        const new_name = String(this.state.name).trim();
        if (new_name != ""){
            this.props.createNewTask(new_name);
            this.setState({name: ""});
        }
    };

    setTaskName = (e) => {
        this.setState({ name: e.target.value });
    };


    render() {
        return (
            <Container>
                <Input onChange={this.setTaskName} value={this.state.name}></Input>
                <Icon onClick={this.createNewTask} className="send-task-name" name="send"></Icon>
            </Container>
        )
    }
}
