import './App.css';
import TaskList from './Composants/TaskList/TaskList';
import AddTask from './Composants/AddTask/AddTask';
import FilterTodo from './Composants/FilterTodo/FilterTodo';

function App() {
  return (
    <div className="App">
      <div className='box'>
      <h1 className='title'> My ToDO-APp </h1>
      <AddTask/> 
      <TaskList/>
      <FilterTodo/> 
  </div> 
    </div>
  );
}

export default App;
