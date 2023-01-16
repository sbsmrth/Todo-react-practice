const TodoCounter = ({ completed, all }) => {
  return (
    <header className="container text-center pt-10 md:pt-12 text-white mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold animate-bounce">Welcome...</h1>
      <span className="text-xl sm:text-2x l font-thin animate-pulse">
        {
          all ? `You've completed ${completed} of ${all} tasks` : "There aren't tasks yet" 
        }
      </span>
    </header>
  );
};

export { TodoCounter };