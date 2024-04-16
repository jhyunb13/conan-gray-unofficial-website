import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isListenOpen, setIsListenOpen] = useState(false);
  const [isVideosOpen, setIsVideosOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  function handleHome() {
    setIsHomeOpen((open) => !open);
    setIsListenOpen(false);
    setIsVideosOpen(false);
    setIsTourOpen(false);
    setIsStoreOpen(false);
    setIsInfoOpen(false);
  }

  function handleListen() {
    setIsListenOpen((open) => !open);
    setIsVideosOpen(false);
    setIsTourOpen(false);
    setIsStoreOpen(false);
    setIsInfoOpen(false);
  }

  function handleVideos() {
    setIsVideosOpen((open) => !open);
    setIsListenOpen(false);
    setIsTourOpen(false);
    setIsStoreOpen(false);
    setIsInfoOpen(false);
  }

  function handleTour() {
    setIsTourOpen((open) => !open);
    setIsListenOpen(false);
    setIsVideosOpen(false);
    setIsStoreOpen(false);
    setIsInfoOpen(false);
  }

  function handleStore() {
    setIsStoreOpen((open) => !open);
    setIsListenOpen(false);
    setIsVideosOpen(false);
    setIsTourOpen(false);
    setIsInfoOpen(false);
  }

  function handleInfo() {
    setIsInfoOpen((open) => !open);
    setIsListenOpen(false);
    setIsVideosOpen(false);
    setIsTourOpen(false);
    setIsStoreOpen(false);
  }

  return (
    <nav>
      <ul>
        <li onClick={handleHome}>
          <Link to={"/"} preventScrollReset={false}>
            {`home`.toUpperCase()}
          </Link>
        </li>
        <li onClick={handleListen}>
          {isListenOpen && <div className="nav-clicked">✪</div>}
          <Link to={"/listen"}>{`listen`.toUpperCase()}</Link>
        </li>
        <li onClick={handleVideos}>
          {isVideosOpen && <div className="nav-clicked">✪</div>}
          <Link to={"/videos"}>{`videos`.toUpperCase()}</Link>
        </li>
        <li onClick={handleTour}>
          {isTourOpen && <div className="nav-clicked">✪</div>}
          <Link to={"/tour"}>{`tour`.toUpperCase()}</Link>
        </li>
        <li onClick={handleStore}>
          {isStoreOpen && <div className="nav-clicked">✪</div>}
          <Link to={"/store?page=1"}>{`store`.toUpperCase()}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
