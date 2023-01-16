import './App.css';
import { Todo } from './components/Todo';
import { TodoButton } from './components/TodoButton';
import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { useState } from 'react';

const App = () => {

  const [todos, setTodos] = useState([]);

  const addElement = todo => {
    if(todo.text) {
      setTodos([
        ...todos,
        todo
      ]);
    }
  };

  const changeTodoState = todoText => {
    setTodos(
      todos.map(todo => {
        if(todo.text === todoText) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const completed = () => {
    const allCompleted = todos.reduce((acc, todo) => {
      return todo.completed ? acc += 1 : acc;
    }, 0);

    return allCompleted;
  };

  const deleteTodo = todoText => {
    setTodos(
      todos.filter(todo => todo.text != todoText)
    );
  };

  const deleteCompleted = () => {
    setTodos(
      todos.filter(todo => !todo.completed)
    );
  };

  return <>
    <TodoCounter completed={completed()} all={todos.length}></TodoCounter>
    <article className={'mx-auto w-5/6 sm:w-4/6 lg:w-2/6 mt-12 2xl:mt-24 pb-20'}>
      <TodoSearch addElement={addElement}></TodoSearch>
      <TodoList>
        {todos.map(todo => (
          <Todo key={todo.text} value={todo.text} completed={todo.completed} deleteTodo={deleteTodo} changeTodoState={changeTodoState}></Todo>
        ))}
      </TodoList>
    </article>
    { todos.length != 0 && <TodoButton deleteCompleted={deleteCompleted}></TodoButton> }
  </>;
};

export default App;
