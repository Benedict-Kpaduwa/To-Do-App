//import logo from './logo.svg';
import './App.css';
import TodoItem from "./ToDoItem";
import todoData from './ToDoData';

function App() {
  const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)
  
  return (
    <div className = "todo-list">
    {todoItems}
    </div>
  );
}

export default App;
