import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './Icon';

const TodoButton = ({ deleteCompleted }) => {
  return (
    <button onClick={deleteCompleted} title="Delete completed">
      <Icon css="h-11 md:h-14 fixed bottom-2 lg:bottom-7 mx-auto left-0 right-0 text-white" icon={faXmarkCircle}></Icon>
    </button>
  );
};

export { TodoButton };