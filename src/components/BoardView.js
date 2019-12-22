import React, { Component } from 'react';
import axios from 'axios'

// Class responsible for fetching, holding and  displaying all the todo lists 

class BoardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
       this.todos_url = "http://localhost:8000/api/todo/";
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get(this.todos_url)
            .then((response) => {
                this.setState({todos: response.data})
            })
            .catch(err => {
                console.log(err);
            });
    };

    displayTodos = () => {
        this.state.todos.map(function(todo){
            alert(todo.name);
        });
    };

    render() {
        this.displayTodos();
        return (
            <div className="BoardView">
                Boardview
      </div>
        );
    }
}

export default BoardView;
