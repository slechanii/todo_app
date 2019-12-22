import React, { Component } from 'react';



// Class responsible for fetching, holding and  displaying all the tasks of a single todo
// Displaying the todo list and handling user input 


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
   
    }

    displayTodo = () => {
        return (
            <div>
                <p>Todo list : {this.props.name} </p>
                <p> {this.props.completed_tasks} / {this.props.total_tasks} Completed Tasks</p>
            </div>
        );
    };

    render() {
        return (
            <div className="Todo">
                {this.displayTodo()}
            </div>
        );
    }
}

export default Todo;
