function Button({ fn, children, title }) {
  return (
    <button onClick={fn} title={title} className="Button">
      {children}
    </button>
  );
}

export default Button;
