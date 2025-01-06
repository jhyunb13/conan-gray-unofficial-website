import styles from "./Banner.module.scss";

function Banner() {
  const infoText = [];

  for (let i = 0; i < 10; i++) {
    infoText.push(
      <span key={i}>Conan Gray&apos;s fan-made unofficial website</span>
    );
  }

  return <footer className={styles.banner}>{infoText}</footer>;
}

export default Banner;
