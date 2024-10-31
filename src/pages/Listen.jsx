import songsData from "../data/songsData.json";
import Song from "../features/listen/Song";
import styles from "./Listen.module.css";

function Listen() {
  return (
    <>
      <header className={styles.header}>
        <h1>Releases</h1>
      </header>
      <div className={styles.songList}>
        {songsData.map((itemData, i) => (
          <Song itemData={itemData} key={i} />
        ))}
      </div>
    </>
  );
}

export default Listen;
