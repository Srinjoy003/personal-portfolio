import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
	return (
		<header className="header">
			<Link className="logo" href="/">
				Srinjoy <span className="">Sengupta</span>
			</Link>

			<AiOutlineMenu id="menu-icon"/>

			<nav className="navbar">
				<a className="navbar-link" href="#home">
					Home
				</a>
				<a className="navbar-link" href="#education">
					Education
				</a>
				<a className="navbar-link" href="#services">
					Services
				</a>
				<a className="navbar-link" href="#testimonials">
					Testimonials
				</a>
				<a className="navbar-link" href="#contact">
					Contact
				</a>
			</nav>
		</header>
	);
}

export default Header;
