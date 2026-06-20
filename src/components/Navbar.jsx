import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="/" aria-label="StreamFlix home">
        <img
          src="../../public/images/logo-on-dark_v2.png"
          alt="StreamFlix"
          className="brand-logo"
        />
      </a>

      <nav className="navbar__links" aria-label="Primary navigation">
        <a className="navbar__link" href="/">
          Home
        </a>
        <a className="navbar__link" href="/series">
          Series
        </a>
        <a className="navbar__link" href="/films">
          Films
        </a>
      </nav>
    </header>
  );
}