import React, { Component } from 'react';
import axios from 'axios'

// Class responsible for fetching, holding and  displaying all the todo lists 

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {name: "", completed: ""}
        };
        this.task_url = "http://localhost:8000/api/tasks/" + this.props.task_id + "/";
    }

    componentWillMount = () => {
        this.getTask();
        
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
                    Task name: {this.state.task.name}
                </p>
                <p>
                    Completed: {String(this.state.task.completed)}
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
