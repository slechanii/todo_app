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
            task: this.props.task,
        };
        this.task_url = "http://localhost:8000/api/tasks/" + this.state.task.id + "/";
        // alert(JSON.stringifythis.state.task);
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
                    <TaskCheckBox completed={this.state.task.completed} 
                    updateCompletedTask={this.updateCompletedTask}></TaskCheckBox>
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
