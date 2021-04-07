function Button({ fn, children, title, isLoading }) {
  return (
    <button
      onClick={() => {
        if (!isLoading) {
          return fn();
        } 
      }}
      title={title}
      className="Button"
    >
      {children}
    </button>
  );
}

export default Button;
