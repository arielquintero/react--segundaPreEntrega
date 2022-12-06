import { NavLink } from "react-router-dom";
// import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <span className="brand">Ecommers</span>
            <section className="flex-links">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link link-home" : null
                    }
                    href="#h">
                    Home
                </NavLink>
                <NavLink className="link link-article" to="/category/componentes1">
                    Article1
                </NavLink>
                <NavLink className="link link-article" to="/category/componentes2">
                    Article2
                </NavLink>
                <NavLink className="link link-contact" to="/contact">
                    Contact
                </NavLink>
                {/* <NavLink className="link link-contact" to="/cart">
                    <CartWidget />
                </NavLink> */}
            </section>
            {/* <CartWidget /> */}
        </div>
    );
};

export default NavBar;
