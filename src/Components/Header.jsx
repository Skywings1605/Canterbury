import "./Header.css"
import logo from "./images/logo.svg"
export const Header = () => {
    return (
        <footer className="header">
            <img className="logo" src={logo} alt="" />
            <h2 className="contact playfair">Contact us location Call +91 82969 69731</h2>

        </footer>
    )
}