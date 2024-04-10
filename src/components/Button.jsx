function Button({ children, url, availability }) {
  return (
    <a className="no-link-style" href={url} target="_blank" rel="noopener">
      <button className="button" disabled={availability ? true : false}>
        {children}
      </button>
    </a>
  );
}

export default Button;
