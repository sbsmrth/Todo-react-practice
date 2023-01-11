const TodoCounter = () => {
  return (
    <header className="container text-center pt-10 md:pt-12 text-white mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold">Welcome...</h1>
      <span className="text-xl sm:text-2x l font-thin animate-pulse">You've completed 2 of 3 tasks</span>
    </header>
  );
}

export { TodoCounter };