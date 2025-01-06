import styles from "./Landing.module.scss";

function Landing() {
  return (
    <main className={styles.landing}>
      <div className={styles.imgContainer}>&nbsp;</div>
      <div className={styles.imgContainer}>&nbsp;</div>
      <div className={styles.imgContainer}>&nbsp;</div>
      <div className={styles.imgContainer}>&nbsp;</div>

      <div className={styles.textArea}>
        <h1>Conan Gray</h1>
        <p>The new single &quot;Holidays&quot; is out now everywhere</p>
      </div>
    </main>
  );
}

export default Landing;
