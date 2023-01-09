import './App.css'
import { Todo } from './components/Todo'
import { TodoButton } from './components/TodoButton'
import { TodoList } from './components/TodoList'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'

const todos = [
  { text: 'Task 1', completed: false },
  { text: 'Task 2', completed: false },
  { text: 'Task 3', completed: false }
]

const App = () => {
  return <>
    <TodoCounter></TodoCounter>
    <TodoSearch></TodoSearch>

    <TodoList>
      {todos.map((todo, index) => (
        <Todo key={index} value={todo.text}></Todo>
      ))}
    </TodoList>

    <TodoButton></TodoButton>
  </>;
}

export default App;
