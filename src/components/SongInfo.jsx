function SongInfo({ children }) {
  return (
    <>
      <h2>{children[0]}</h2>
      <div className="song-info">{children[1]}</div>
    </>
  );
}

export default SongInfo;
