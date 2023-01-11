import './App.css'
import { Todo } from './components/Todo'
import { TodoButton } from './components/TodoButton'
import { TodoList } from './components/TodoList'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'

const todos = [
  { text: 'Task 1', completed: false },
  { text: 'Task 2', completed: false },
  { text: 'Task 2', completed: false },
]

const App = () => {
  return <div>
    <TodoCounter></TodoCounter>
    <article className='mx-auto w-5/6 sm:w-4/6 lg:w-2/6 mt-12 2xl:mt-24 pb-20'>
      <TodoSearch></TodoSearch>
      <TodoList>
        {todos.map((todo, index) => (
          <Todo key={index} value={todo.text}></Todo>
        ))}
      </TodoList>
      <TodoButton></TodoButton>
    </article>
  </div>
}

export default App;
