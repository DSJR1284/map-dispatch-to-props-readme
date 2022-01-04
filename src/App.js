import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addTodo } from './actions/todos';

class App extends Component {

  state = {
    todo: ''
  }

  //Action Creator
  addTodo = () => {
    return ({
      type: 'ADD_TODO',
      //This is the payload actionType 'ADD_TODO payload todo: this.state.todo
      todo: this.state.todo
    })
  }

  handleOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Todo being added: ", this.state.todo);
    this.props.addTodo(this.state.todo); //Using the Todo action creator
    this.setState({ todo: '' });
  }

  render() {
    // debugger;
    const renderTodos = () => this.props.todos.map(todo => <li key={todo}>{todo}</li>);
    return (
      <div className="App">
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          id="todos"
          placeholder="add todo" 
          value={this.state.todo}/>
        <input type="submit" />
      </form>
      <h2>Todos:</h2>
        <ol>{renderTodos()}</ol>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: (todo) => {
//       dispatch(addTodo(todo))
//     }
//   };
// };

export default connect(state => ({todos: state.todos}),{addTodo})(App);

// export default connect(mapStateToProps, mapDispatchToProps)(App);