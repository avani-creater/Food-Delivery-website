import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faCircleQuestion, faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import { useState } from "react";

function Header() {
  const items = useSelector((state) => state.cart.items);
  const onlineStatus = useOnlineStatus();
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="flex justify-between items-center px-4 py-2 shadow-md border-b bg-white relative z-10">
        {/* Logo */}
        <div className="h-12 flex items-center">
          <img src="/website-logo.jpg" alt="Logo" className="h-full w-auto" />
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-xl" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        {/* Navigation Items */}
        <nav className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-0 text-sm md:text-base text-headerColor">
            <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>

            <li>
              <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>

            <li>
              <Link to="/search" className="hover:text-blue-500 flex items-center gap-1" onClick={() => setMenuOpen(false)}>
                <FontAwesomeIcon icon={faSearch} /> Search
              </Link>
            </li>

            <li>
              <Link to="/help" className="hover:text-blue-500 flex items-center gap-1" onClick={() => setMenuOpen(false)}>
                <FontAwesomeIcon icon={faCircleQuestion} /> Help
              </Link>
            </li>

            <li>
              <button onClick={() => { openModal(); setMenuOpen(false); }} className="hover:text-blue-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faUser} /> Sign In
              </button>
            </li>

            <li>
              <Link to="/cart" className="hover:text-blue-500 flex items-center gap-1" onClick={() => setMenuOpen(false)}>
                <FontAwesomeIcon icon={faCartShopping} /> Cart ({items.length})
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <SignIn isVisible={isVisible} onClose={closeModal} />
    </>
  );
}

export default Header;
