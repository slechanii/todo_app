import React, { Component } from 'react'
import { Container, Checkbox } from 'semantic-ui-react';

export default class TaskCheckBox extends Component {

    render() {

        this.state = {

        };
        
        return (
            <Container>
                <Checkbox checked={this.props.completed}></Checkbox>
            </Container>
        )
    }
}
