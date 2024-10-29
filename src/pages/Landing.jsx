import styles from "./Landing.module.css";

function Landing() {
  return (
    <main className={styles.landing}>
      <div className={styles.imgContainer}>&nbsp;</div>
      <div className={styles.imgContainer}>&nbsp;</div>
      <div className={styles.imgContainer}>&nbsp;</div>
      <div className={styles.imgContainer}>&nbsp;</div>

      <div className={styles.textArea}>
        <h1>Conan Gray</h1>
        <div>The new single &quot;Holidays&quot; is out now everywhere</div>
      </div>
    </main>
  );
}

export default Landing;
