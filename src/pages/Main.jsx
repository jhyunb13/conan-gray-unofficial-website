import styles from "./Main.module.css";

function Main() {
  return (
    <main id="main-page">
      <div className={styles.mainText}>
        <h1>conan gray ✪ found heaven</h1>
      </div>
      <img
        src="https://i.pinimg.com/736x/94/f8/c2/94f8c271c36767e878a2fdd2a0c7d15a.jpg"
        className={styles.sunglasses}
      />
      <img
        src="https://i.pinimg.com/736x/2d/5e/56/2d5e5619c60b850dbc20852fcd2f6a84.jpg"
        className={styles.silverFullshot}
      />
      <img
        src="https://i.pinimg.com/736x/0e/03/07/0e03079245becb1b8fc53f9cbabd1506.jpg"
        className={styles.timesSquare}
      />
      <img
        src="https://i.pinimg.com/736x/a8/e8/3b/a8e83bd99701e0f171923f71eb2965a1.jpg"
        className={styles.lollapalooza}
      />
      <img
        src="https://i.pinimg.com/736x/78/93/76/789376e6ccdde8dbbdb7e14ef83758b4.jpg"
        className={styles.red}
      />
      <img
        src="https://i.pinimg.com/736x/2f/6b/4d/2f6b4d0a924b794bdd4df5e9cb0ca3ae.jpg"
        className={styles.lonelyDancers}
      />
      <img
        src="https://i.pinimg.com/736x/e2/aa/eb/e2aaebe891c5e676394038afee8ff31e.jpg"
        className={styles.hoodie}
      />
      <img
        src="https://i.pinimg.com/736x/bd/53/a7/bd53a7b774f67bbdc10ea9f2b09aeb13.jpg"
        className={styles.vinyl}
      />
      <img
        src="https://i.pinimg.com/736x/c7/7a/a3/c77aa35262b7ed5709ffa317ce48ab8e.jpg"
        className={styles.silverUpperBody}
      />
      <div className={`${styles.textBox} ${styles.lyricsFaintedLove}`}>
        <p className={styles.text}>
          Dark room, not a whisper or word
          <br />
          Guess you take all the pain that you think you deserve
          <br />
          Won&apos;t sleep &apos;cause it&apos;s easy to hurt tonight, tonight
          <br />
          &apos;Cause you said, &quot;You got it? We&apos;re nothing&quot;
          <br />
          I&apos;m the worst, if you want it
        </p>
      </div>
      <div className={`${styles.textBox} ${styles.lyricsAlleyRose}`}>
        <p className={styles.text}>
          Oh, where&apos;d you go, go, Alley Rose?
          <br />
          Oh, where&apos;d you go, go, go?
        </p>
      </div>
      <div className={`${styles.textBox} ${styles.lyricsLonelyDancers}`}>
        <p className={styles.text}>
          He don&apos;t know love
          <br />I hope he dies
        </p>
      </div>
      <div className={`${styles.textBox} ${styles.lyricsBourgeoisieses}`}>
        <p className={styles.text}>
          I want to be with the Bourgeoisieses
          <br />I want to see how the Bourgeoisieses party all night
          <br />I want to be with the Bourgeoisieses (bourgeoisie)
          <br />
          I want to see how the Bourgeoisieses la-di-dee-die
          <br />
          Want to be with the Bourgeoisieses
        </p>
      </div>
      <div className={`${styles.textBox} ${styles.lyricsNeverEndingSong}`}>
        <p className={styles.text}>
          Can you make us stay forever? Are we done? Can you make it play
        </p>
      </div>
      <div className={`${styles.textBox} ${styles.link}`}>
        <a
          href="https://open.spotify.com/album/39gMxRpFKgIVvw3krIIam5?si=CcNG-O4LS7qOwILLHbCk6w"
          target="_blank"
          rel="noopener"
        >
          LISTEN NOW
        </a>
      </div>
    </main>
  );
}

export default Main;
