import { useState } from "react";

const TodoSearch = ({addElement}) => {

  const [todo, setTodo] = useState({
    text: '',
    completed: false
  });

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
  };

  const handleKey = event => {
    if(event.key === 'Enter') {
      addElement(todo);
    };
  };

  const getData = event => {
    setTodo({
      ...todo,
      text: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border-b-white border-b">
      <input onChange={getData} onKeyDown={handleKey} className="w-full outline-0 bg-transparent py-2 px-14 text-white tracking-wider text-center rounded-lg font-bold h-12" placeholder="Write your task" />
    </form>
  );
};

export { TodoSearch };