import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "../auth0-wrapper";


import './NavBar.scss';
import { redirectUri } from '../index';

const LoggedInNav = () => (
  <div className="subNav">
    <div className="subNav__menu">
        <NavLink to="/magic8ball" exact className="subNav__link">Magic 8 Ball</NavLink>
        <NavLink to="/todo" className="subNav__link">Todo List</NavLink>
    </div>
  </div>
)

const LoggedInDropdown = ({ open, setOpen, logout, user }) => {
  return (
    <div className={`nav__loggedInDropdown${open ? " open" : ""}`}>
      <ul>
        <li>{user ? user.name : ''}</li>
        <li><NavLink to="/modal" exact className="subNav__link"  onClick={() => setOpen(false)}>React-Modal</NavLink> </li>
        <li><NavLink to="/popup" exact className="subNav__link"  onClick={() => setOpen(false)}>Reactjs-Popup</NavLink> </li>
        <li><NavLink to="/magic8ball" exact className="subNav__link" onClick={() => setOpen(false)}> Magic 8 Ball</NavLink></li>
        <li><NavLink to="/todo" exact className="subNav__link" onClick={() => setOpen(false)}> Todo List</NavLink></li>
        <li><NavLink to="/grocerylist" exact className="subNav__link" onClick={() => setOpen(false)}> Grocery List</NavLink></li>
        <li><button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectUri})}>Log Out</button></li>
      </ul>
    </div>
  )
}

const MobileDropdown = ({ open, setOpen, logout }) => {
  return (
    <div className={`nav__mobile-dropdown${open ? " open" : ""}`}>
      <ul>
      <li><NavLink to="/modal" exact className="subNav__link"  onClick={() => setOpen(false)}>React-Modal</NavLink> </li>
        <li><NavLink to="/popup" exact className="subNav__link"  onClick={() => setOpen(false)}>Reactjs-Popup</NavLink> </li>
      <li><NavLink to="/magic8ball" exact className="subNav__link" onClick={() => setOpen(false)}> Magic 8 Ball</NavLink></li>
        <li><NavLink to="/todo" exact className="subNav__link" onClick={() => setOpen(false)}> Todo List</NavLink></li>
        <li><NavLink to="/grocerylist" exact className="subNav__link" onClick={() => setOpen(false)}> Grocery List</NavLink></li>
        <li><button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectUri})}>Log Out</button></li>
      </ul>
    </div>
  )
}

const NavBar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [open, setOpen] = React.useState(false); // Used for displaying and hiding the dropdown

  return (
    <>
      <nav className="nav">
        <Link to="/" onClick={() => setOpen(false)}><img src='/It Me.svg' width="200" alt="ItMe" className="nav__logo" /></Link>
        <div className="nav__mobile-menu">

        </div>
        <div className={`nav__menu${open ? " open" : " closed"}`}>
          {!isAuthenticated && (
            <button className="nav__btn nav__btn--login" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}

            {isAuthenticated && user && (
              <>
                <img className="nav__avatar" src={user.picture} alt="User avatar" width="32" />
                <img className="nav_dropdownIconOpen" src='/arrow-down.svg' alt="dropdown open" onClick={() => setOpen(true)} />
                <img className="nav_dropdownIconClose" src='/close-button.svg' alt="dropdown close" onClick={() => setOpen(false)} />
                <img className="nav__mobile-menu-btn" src='/Menu-button.svg' alt="mobile menu" width="32" onClick={() => setOpen(!open)} />
                <LoggedInDropdown open={open} logout={logout} user={user} />
              </>
            )}
        </div>
      </nav>
      <MobileDropdown open={open} setOpen={setOpen} logout={logout} />
      {isAuthenticated && <LoggedInNav/>}
    </>
  );
};

export default NavBar;