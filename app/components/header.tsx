"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MouseEventHandler } from "react";
import { useState, useRef, useEffect } from "react";

function Header() {
	const [open, setOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	const navRef = useRef<HTMLDivElement>(null);

	const handleClick: MouseEventHandler<SVGElement> = (event) => {
		setOpen((currentOpen) => !currentOpen);
		if (navRef.current) {
			navRef.current.classList.toggle("active");
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			const scrollPosition = window.scrollY + 200; // Adjusted for better UX

			sections.forEach((section) => {
				const top = section.offsetTop;
				const bottom = top + section.offsetHeight;

				if (scrollPosition >= top && scrollPosition < bottom) {
					setActiveSection(section.id);
				}
			});
		};

		

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	

	return (
		<header className="header">
			<Link className="logo" href="/">
				Srinjoy <span className="">Sengupta</span>
			</Link>

			{!open ? (
				<AiOutlineMenu className="menu-icon" onClick={handleClick} />
			) : (
				<IoMdClose className="menu-icon" onClick={handleClick} />
			)}

			<nav className="navbar" ref={navRef}>
				<a
					href="#home"
					className={activeSection === "home" ? "nav-active" : ""}
				>
					Home
				</a>
				<a
					href="#education"
					className={activeSection === "education" ? "nav-active" : ""}
				>
					Education
				</a>
				<a
					href="#skills"
					className={activeSection === "skills" ? "nav-active" : ""}
				>
					Skills
				</a>
				<a
					href="#projects"
					className={activeSection === "projects" ? "nav-active" : ""}
				>
					Projects
				</a>
				<a
					href="#contact"
					className={activeSection === "contact" ? "nav-active" : ""}
				>
					Contact
				</a>
			</nav>
		</header>
	);
}

export default Header;
