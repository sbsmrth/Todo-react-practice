import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

const TodoButton = props => {
  return (
    <button>
      <Icon css="h-11 md:h-14 fixed bottom-2 lg:bottom-7 mx-auto left-0 right-0 text-white" icon={faCirclePlus}></Icon>
    </button>
  );
}

export { TodoButton };