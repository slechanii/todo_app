import React, { Component } from 'react';
import axios from 'axios'
import Todo from './Todo'

// Class responsible for fetching, holding and  displaying all the todo lists 

class BoardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.todos_url = "http://localhost:8000/api/todo/";
    }

    componentWillMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get(this.todos_url)
            .then((response) => {
                this.setState({ todos: response.data })
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        // alert("resrefh");    
        const renderTodos = this.state.todos.map(function (todo) {
            return <Todo  key={todo.id} todo_id={todo.id}></Todo>
            // return <Todo name={todo.name} completed_tasks={todo.completed_tasks}
            //     total_tasks={todo.tasks.length} todo_id={todo.id} tasks={todo.tasks}></Todo>
        });
        return (
            <div className="BoardView">
                Boardview
                {renderTodos}
            </div>
        );
    }
}

export default BoardView;
