import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react';
import TaskCheckBox from './TaskCheckBox';

// Class responsible for fetching, holding and  displaying all the todo lists 

class Task extends Component {
    constructor(props) {
        super(props);
        // alert(JSON.stringify(this.props.task));
        this.state = {
            task: { id:"", name: "", completed: "", todo:"" }
        };
        this.task_url = "http://localhost:8000/api/tasks/" + this.props.task_id + "/";
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


    displayTask = () => {
        return (
            <div>
                <p>
                    ID : { this.state.task.id }
                </p>
                <p>
                    Task name: {this.state.task.name}
                </p>
                <p>
                    <TaskCheckBox checked={this.state.task.completed == 'true'}></TaskCheckBox>
                </p>
                <p>
                    <Button onClick={this.deleteTask}>Delete task</Button>
                </p>
            </div>
        )
    };

    render(props) {
        return (
            <div className="Task">
                {this.displayTask()}
            </div>
        );
    }
}

export default Task;
