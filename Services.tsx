import { NavLink, Link } from "react-router-dom";
import { SITE, imgLogo } from "../data";

export function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <Link className="brand" to="/" aria-label={`${SITE.name} home`}>
          <img src={imgLogo()} alt={`${SITE.name} logo`} />
          <div className="name">
            <strong>{SITE.name}</strong>
            <span>Appliance Repair • {SITE.city}</span>
          </div>
        </Link>

        <div className="rightInfo">
          <div className="badge" aria-label="Working hours">
            <span className="pill">Hours</span>
            <span className="tinyline">{SITE.hours}</span>
          </div>
          <a className="badge" href={`tel:${SITE.phoneTel}`} aria-label={`Call ${SITE.phone}`}>
            <span className="pill">Call/Text</span>
            <span className="tinyline">{SITE.phone}</span>
          </a>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
        <NavLink to="/repairs" className={({ isActive }) => (isActive ? "active" : undefined)}>Repairs</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)}>Contact</NavLink>
      </nav>
    </header>
  );
}
