function Footer({ style }) {
  const contentList = [
    "help",
    "returns",
    "terms",
    "privacy police",
    "contacts",
  ];

  return (
    <footer className="pb-50" style={style}>
      <ul>
        {contentList.map((content) => (
          <a href="" key={content}>
            <li>{content}</li>
          </a>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
