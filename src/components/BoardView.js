import React, { Component } from 'react';
import axios from 'axios'
import Todo from './Todo'
import NewTodo from './NewTodo';
import { Button, Container } from 'semantic-ui-react';

// Class responsible for fetching, holding and  displaying all the todo lists 

class BoardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: false,
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

    createNewTodo = (todo_name) => {
        axios.post(this.todos_url, {name: todo_name})
            .then((res) => {
                this.setState({ newTodo: false });
                this.getTodos();
            });
    };

    destroyTodo = (todo_id) => {
        axios.delete(this.todos_url + todo_id)
        .then((res) => {
            this.getTodos();
        });
    };

    render() {

        const renderTodos = this.state.todos.map((todo) => {
            return <Todo destroyTodo={this.destroyTodo} key={todo.id} todo_id={todo.id} completed_tasks={todo.completed_tasks}
                total_tasks={todo.total_tasks} refreshTodo={this.getTodos}></Todo>
        });
        return (
            <div className="BoardView">
                Boardview
                <Container>
                    <Button onClick={() => { this.setState({ newTodo: true }) }}>Create new Todo</Button>
                </Container>
                {this.state.newTodo && <NewTodo createNewTodo={this.createNewTodo}></NewTodo>}
                {renderTodos}
            </div>
        );
    }
}

export default BoardView;
