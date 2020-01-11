import React, { Component } from 'react';
import axios from 'axios'
import { Button, Container } from 'semantic-ui-react';
import TaskCheckBox from './TaskCheckBox';
import TaskName from './TaskName';

// Class responsible for fetching, holding and  displaying all the todo lists 

class Task extends Component {
    constructor(props) {
        super(props);
        // alert(JSON.stringify(this.props.task));
        this.state = {
            task: this.props.task,
        };
        this.task_url = "http://localhost:8000/api/tasks/" + this.state.task.id + "/";
        // alert(JSON.stringify(this.state.task));
    }

    componentDidMount() {
        this.setState({task: this.props.task});
    }

    deleteTask = () => {
         this.props.deleteTask(this.state.task.id);
    };

    getTask = () => {
        axios.get(this.task_url)
            .then((response) => {
                this.setState({ task: response.data })
            })
            .catch(err => {
                console.log(err);
            });
    };

    updateCompletedTask = (is_completed) => {
        
        axios.patch(this.task_url, {completed:is_completed})
        .catch(err => {
            console.log(err);
        })
        .then(() => {
            this.props.refreshTodo();
        });
       
    };

    updateTaskName = (new_name) => {
        axios.patch(this.task_url, {name: new_name})
        .catch(err => {
            console.log(err);
        })
        .then(() => {
            this.props.refreshTodo();
        });
    };


    displayTask = () => {
        return  (
            <Container>
                <Container>
                    <TaskName name={this.state.task.name}
                     updateTaskName={this.updateTaskName}></TaskName>
                </Container>
                <Container>
                    <TaskCheckBox  completed={this.state.task.completed} 
                    updateCompletedTask={this.updateCompletedTask}></TaskCheckBox>
                </Container>
                <Container>
                    <Button onClick={this.deleteTask}>Delete task</Button>
                </Container>
            </Container>
        )
    };

    render(props) {
        return (
            <Container className="Task">
                {this.displayTask()}
            </Container>
        );
    }
}

export default Task;
