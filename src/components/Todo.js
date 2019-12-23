import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';

// Class responsible for fetching, holding and  displaying all the tasks of a single todo
// Displaying the todo list and handling user input 


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // tasks: [],
        };

    }

    updateTodo = () => {
        // const todo_url = "http://localhost:8000/api/tasks/" + this.props.todo_id + "/";  
        // axios.patch(this.tasks_url, {total_tasks: this.props.total_tasks})
        //     .then((response) => {
        //         this.setState({ todos: response.data })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    };

    componentWillMount() {
        // this.getTasks();
    };

    // getTasks = () => {
    //     const tasks_url = "http://localhost:8000/api/tasks/"
    //     axios.get(this.tasks_url)
    //         .then((response) => {
    //             this.setState({ tasks: response.data })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };

    displayTodo = () => {
        return (
            <div>
                <p>Todo list : {this.props.name} </p>
                <p> {this.props.completed_tasks} / {this.props.total_tasks} Completed Tasks</p>
            </div>
        );
    };

    render() {
        // alert(this.state.tasks);
        const renderTasks = this.props.tasks.map(function(task_id){
            return <Task task_id={task_id}></Task>
        }); 
        return (
            <div className="Todo">
                {this.displayTodo()}
                {renderTasks}
            </div>
        );
    }
}

export default Todo;
