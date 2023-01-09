const Todo = props => {
  return(
    <li>
      <span>C</span>
      <p>{ props.value }</p>
      <span>X</span>
    </li>
  );
}

export { Todo };