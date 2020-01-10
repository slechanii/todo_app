import React, { Component } from 'react'
import { Container, Checkbox } from 'semantic-ui-react';

export default class TaskCheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.completed,
        };
    }

    updateCompletedTask = () => {
        this.setState({completed: !this.refs.completed.state.checked});
        this.props.updateCompletedTask(!this.refs.completed.state.checked);
    };

    render() {
        return (
            <Container>
                <Checkbox onChange={this.updateCompletedTask} ref="completed" checked={this.state.completed}></Checkbox>
            </Container>
        )
    }
}
