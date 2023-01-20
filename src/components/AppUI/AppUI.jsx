import { Todo } from '../Todo';
import { TodoButton } from '../TodoButton';
import { TodoList } from '../TodoList';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { Image } from '../Image';

const AppUI = ({
  allCompleted,
  addElement,
  url,
  deleteCompleted,
  deleteTodo,
  changeTodoState,
  todos
}) => {
  return <>
    <TodoCounter completed={allCompleted} all={todos.length}></TodoCounter>
    <article className={'mx-auto w-5/6 sm:w-4/6 lg:w-2/6 mt-12 2xl:mt-24 pb-20'}>
      <TodoSearch addElement={addElement}></TodoSearch>
      <TodoList>
        {
          todos.map(todo => (
            <Todo key={todo.text} value={todo.text} completed={todo.completed} deleteTodo={deleteTodo} changeTodoState={changeTodoState}></Todo>
          ))
        }
      </TodoList>
      <Image url={url} css='w-3 md:w-6 absolute left-20 top-20'></Image>
      <Image url={url} css='w-3 md:w-6 absolute bottom-20 left-52'></Image>
      <Image url={url} css='w-3 md:w-6 absolute right-20 top-20'></Image>
      <Image url={url} css='w-3 md:w-6 absolute right-44 bottom-32'></Image>
      <Image url={url} css='w-3 md:w-6 absolute top-1/2'></Image>
    </article>
    {todos.length != 0 && <TodoButton deleteCompleted={deleteCompleted}></TodoButton>}
  </>;
}

export { AppUI };