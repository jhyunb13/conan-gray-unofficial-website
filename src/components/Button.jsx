function Button({ children, url, availability }) {
  return (
    <a href={url} target="_blank" rel="noopener">
      <button className="button" disabled={availability ? true : false}>
        {children}
      </button>
    </a>
  );
}

export default Button;
