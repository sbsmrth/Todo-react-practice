import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

const Todo = props => {
  return (
    <li className="my-4 shadow-md shadow-blue-700 py-4 px-4 flex justify-between rounded-lg items-center text-white">
      <p className="text-sm sm:text-base tracking-wider">{ props.value }</p>
      <button>  
        <Icon css={'fa solid sm:fa-lg'} icon={faCheck}></Icon>
      </button>
    </li>
  );
}

export { Todo };