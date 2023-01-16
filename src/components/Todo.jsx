import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

const Todo = ({ value, completed, deleteTodo, changeTodoState }) => {
  return (
    <li className="my-4 shadow-md shadow-blue-700 py-4 px-4 flex justify-between rounded-lg items-center text-white">
      <button onClick={() => changeTodoState(value)}>  
        <Icon css={'sm:fa-lg hover:text-blue-700'} icon={faCheck}></Icon>
      </button>
      <p className={`text-sm sm:text-base tracking-wider ${completed && 'line-through'}`}>{ value }</p>
      <button onClick={() => deleteTodo(value)}>
        <Icon css={'fa solid sm:fa-lg hover:text-red-600'} icon={faXmark}></Icon>
      </button>
    </li>
  );
};

export { Todo };