import "./Hero.css";

function Hero() {
  const handlePlay = () => {
    console.log("Play button clicked");
  };

  const handleMoreInfo = () => {
    console.log("More information clicked");
  };

  return (
    <section className="hero">
      <div className="hero__background" />

      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__badge">STREAMFLIX ORIGINAL</span>

        <h1 className="hero__title">
          Stories Without Limits
        </h1>

        <p className="hero__description">
          Discover powerful dramas, unforgettable adventures and exclusive
          originals. Your next obsession starts here.
        </p>

        <div className="hero__meta">
          <span>2026</span>
          <span className="hero__rating">16+</span>
          <span>4K Ultra HD</span>
          <span>Drama • Action • Thriller</span>
        </div>

        <div className="hero__actions">
          <button
            type="button"
            className="hero__button hero__button--play"
            onClick={handlePlay}
          >
            <span className="hero__play-icon">▶</span>
            Play
          </button>

          <button
            type="button"
            className="hero__button hero__button--info"
            onClick={handleMoreInfo}
          >
            <span className="hero__info-icon">ⓘ</span>
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;