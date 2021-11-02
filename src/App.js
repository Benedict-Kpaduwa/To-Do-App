//import logo from './logo.svg';
import './App.css';
import TodoItem from "./ToDoItem";
import todoData from './ToDoData';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos = todoData
    }
  }
  const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
  render(){
    return (
    <div className = "todo-list">
    {todoItems}
    </div>
  );
  }
}

export default App;
