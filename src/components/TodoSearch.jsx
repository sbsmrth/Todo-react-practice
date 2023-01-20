import { useState } from "react";

const TodoSearch = ({ addElement }) => {

  const [text, setText] = useState('');

  const handleKey = event => {
    if(event.key === 'Enter' && text) {
      addElement(text);
      setText('');
    };
  };

  const getData = event => {
    setText(event.target.value);
  };

  return (
    <input onChange={getData} value={text} onKeyDown={handleKey} className="w-full outline-0 bg-transparent py-2 px-14 border-b-white border-b text-white tracking-wider text-center rounded-lg font-bold h-12" placeholder="Write your task" />
  );
};

export { TodoSearch };