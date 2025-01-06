import songsData from "../data/songsData.json";
import Song from "../features/listen/Song";
import styles from "./Listen.module.scss";

function Listen() {
  return (
    <>
      <header className={styles.header}>
        <h2>Releases</h2>
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
