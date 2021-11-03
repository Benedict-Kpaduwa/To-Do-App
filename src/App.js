//import logo from './logo.svg';
import React from "react"
import './App.css';
import TodoItem from "./ToDoItem"
import todoData from './ToDoData';

// function App() {
//   const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)

//   return (
//     <div className = "todo-list">
//       {todoItems}
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState=> {
      const updatedTodo = prevState.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodo
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return(
      <div>
        {todoItems}
      </div>
    );
  }
}

export default App;
