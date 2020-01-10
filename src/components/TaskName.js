import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';

export default class TaskName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        };
    }

    render() {
        return (
            <Container>
               {this.state.name}
            </Container>
        )
    }
}
