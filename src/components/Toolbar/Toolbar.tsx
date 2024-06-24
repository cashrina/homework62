import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary text-white">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Ailan</NavLink>
                <ul className="navbar-nav ms-auto d-flex flex-row gap-5 flex-nowrap">
                    <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/contacts" className="nav-link">Contacts</NavLink></li>
                    <li className="nav-item"><NavLink to="/about-us" className="nav-link">About Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Toolbar;