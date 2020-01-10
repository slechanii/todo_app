import React, { Component } from 'react'
import { Container, Input, Icon } from 'semantic-ui-react';

export default class TaskName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            editing: false,
            // previous_name: this.state.name,
        };
    }


    updateTaskName = () => {
        const new_name = String(this.state.name).trim();
        // if (this.state.name != "")
        this.setState({name: new_name});
        this.setState({editing: false});
        this.props.updateTaskName(this.state.name);
    };

    setTaskName = (e) => {
        this.setState({name: e.target.value});
    };

    editTaskName = () => {
        return (
            <Container>
                <Input onChange={this.setTaskName} value={this.state.name}></Input>
                <Icon onClick={this.updateTaskName} className="send-task-name" name="send"></Icon>
            </Container>
        );
    };


    render() {
        return (
            <Container>
                {this.state.editing ? (
                    this.editTaskName()

                ) : (
                        <Container className="task-name" onClick={() => this.setState({ editing: true })}>
                            {this.state.name}</Container>
                    )}
            </Container>
        )
    }
}
