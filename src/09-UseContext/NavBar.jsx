import {Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand" >Use Context</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <NavLink to ="/" 
                        className= { ({ isActive }) => `nav-link ${isActive ? 'active' : ''}` } >
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to ="/about" 
                        className= { ({ isActive }) => `nav-link ${isActive ? 'active' : ''}` } >
                            About 
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" 
                    className= { ({ isActive }) => `nav-link ${isActive ? 'active' : ''}` } >
                        Login
                    </NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
