import { useState } from "react";
import { AppUI } from "./components/AppUI/AppUI";

const useLocalStorage = (itemName, initialValue)=> {
  const storeData = localStorage.getItem(itemName);
  
  const defaultItem = JSON.parse(storeData) || initialValue;

  const [item, setItem] = useState(defaultItem);

  const setNewTodos = eItem => {
    const stringifiedTodos = JSON.stringify(eItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(eItem);
  };

  return [
    item,
    setNewTodos
  ];
};

const url = "https://i.ibb.co/0FfxHjL/ellipse.png";

const App = () => {

  const [todos, setNewTodos] = useLocalStorage('TODOS_V1', []);

  const findTodo = text => {
    return todos.find(todo => todo.text === text);
  };

  const addElement = text => {
    if(!findTodo(text)) {
      setNewTodos([
        ...todos,
        {
          text,
          completed: false
        }
      ]);
    }
  };

  const changeTodoState = todoText => {
    setNewTodos(
      todos.map(todo => {
        if(todo.text === todoText) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const allCompleted = todos.reduce((acc, todo) => {
    return todo.completed ? acc += 1 : acc;
  }, 0);

  const deleteTodo = todoText => {
    setNewTodos(
      todos.filter(todo => todo.text != todoText)
    );
  };

  const deleteCompleted = () => {
    setNewTodos(
      todos.filter(todo => !todo.completed)
    );
  };

  return (
    <AppUI 
      allCompleted={allCompleted}
      addElement={addElement}
      url={url}
      deleteTodo={deleteTodo}
      deleteCompleted={deleteCompleted}
      changeTodoState={changeTodoState}
      todos={todos}
    />
  );
};

export default App;
