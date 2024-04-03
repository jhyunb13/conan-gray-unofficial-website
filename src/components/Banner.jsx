function Banner() {
  const infoText = [];

  for (let i = 0; i < 10; i++) {
    infoText.push(
      <span key={i}>Conan Gray&apos;s fan-made unofficial website</span>
    );
  }

  return <div className="info-banner">{infoText}</div>;
}

export default Banner;
