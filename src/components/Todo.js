import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';
import { Button, Container, Grid } from 'semantic-ui-react';
import NewTask from './NewTask';
import TodoName from './TodoName';

// Class responsible for fetching, holding and  displaying all the tasks of a single todo
// Displaying the todo list and handling user input 


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: { name: "", completed_tasks: 0, total_tasks: 0, tasks: [] },
            newTask: false,
        };
        this.todo_post_url = "http://localhost:8000/api/tasks/";
        this.todo_url = "http://localhost:8000/api/todo/" + this.props.todo_id + "/";
    }

    componentWillMount() {
        this.getTodo();
    };

    getTodo = () => {
        axios.get(this.todo_url)
            .then((response) => {
                this.setState({ todo: response.data })
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleRefresh = () => this.getTodo();

    addTask = (new_task) => {

        axios.post(this.todo_post_url, { name: new_task, completed: false, todo: this.props.todo_id })
            .then((response) => {
                this.getTodo();
                this.props.refreshTodo();
            })
            .catch(err => {
                console.log(err);
            });
        this.setState({ newTask: false });
    };

    deleteTask = (id) => {
        axios.delete("http://localhost:8000/api/tasks/" + id)
            .then((response) => {
                this.getTodo();
                this.props.refreshTodo();
            })
            .catch(err => {
                console.log(err);
            });
    };

    destroyTodo = () => {
        this.props.destroyTodo(this.props.todo_id);
    };

    updateTodoName = (todo_name) => {
        axios.patch(this.todo_url, { name: todo_name })
            .then(() => {
                this.getTodo();
            });
    };

    displayTodo = () => {

        return (
            <Grid.Column>
                {/* <Container> */}
                    <Container>
                        <TodoName name={this.props.todo_name} updateTodoName={this.updateTodoName}></TodoName>
                    </Container>
                    <Container>
                        <Button onClick={this.destroyTodo}>Destroy Todo</Button>
                    </Container>
                    <Container> {this.props.completed_tasks} / {this.props.total_tasks} Completed Tasks</Container>
                    <Button onClick={() => { this.setState({ newTask: true }) }}>Add Task</Button>
                {/* </Container> */}
            </Grid.Column>
        );
    };

    render() {
        const renderTasks = this.state.todo.tasks.map((task) =>
            <Task key={task.id} refreshTodo={this.props.refreshTodo} task={task} deleteTask={this.deleteTask}></Task>)

        return (
            <div className="todo">
                {this.displayTodo()}
                {this.state.newTask == true &&
                    <NewTask createNewTask={this.addTask}></NewTask>}
                {renderTasks}
            </div>
        );
    }
}

export default Todo;
