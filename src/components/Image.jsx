const Image = ({ url, css }) => {
  return (
    <img className={css} src={url}></img>
  );
};

export { Image };